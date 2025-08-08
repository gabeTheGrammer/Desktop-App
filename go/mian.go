package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"runtime"
)

func main() {
	http.HandleFunc("/changeWallpaper", wallpaperApi)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println(err)
	}
}

func wallpaperApi(w http.ResponseWriter, r *http.Request) {
	type request struct {
		Path string `json:"path"`
	}
	var req request
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"No": "No",
		})
	}
	var err error
	switch runtime.GOOS {
	case "windows":
		err = setWallpaperWindows(req.Path)
	case "darwin":
		err = setWallpaperMac(req.Path)
	case "linux":
		err = setWallpaperLinux(req.Path)
	default:
		err = fmt.Errorf("unsupported platform")
	}

	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"No": "No",
		})
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"Ok": "Ok",
	})
}

func setWallpaperWindows(path string) error {
	cmd := exec.Command("powershell", "-command", `
        Add-Type -TypeDefinition @"
        using System.Runtime.InteropServices;
        public class Wallpaper {
            [DllImport("user32.dll",SetLastError=true)]
            public static extern bool SystemParametersInfo(int uAction, int uParam, string lpvParam, int fuWinIni);
        }
"@
        [Wallpaper]::SystemParametersInfo(20, 0, "`+path+`", 3)
    `)
	return cmd.Run()
}

func setWallpaperMac(path string) error {
	script := `osascript -e 'tell application "Finder" to set desktop picture to POSIX file "` + path + `"'`
	cmd := exec.Command("bash", "-c", script)
	return cmd.Run()
}

func setWallpaperLinux(path string) error {
	cmd := exec.Command("gsettings", "set", "org.gnome.desktop.background", "picture-uri", "file://"+path)
	return cmd.Run()
}
