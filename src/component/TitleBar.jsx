import "../styles/TitleBar.css";

export default function TitleBar() {
    const handleClose = () => {
        if (window.electronAPI?.closeApp) {
            window.electronAPI.closeApp()
        }
    }
    
    const handleMin = () => {
        if (window.electronAPI?.minimizeApp) {
            window.electronAPI.minimizeApp()
        }
    }

    const handleMax = () => {
        if (window.electronAPI?.maximizeApp) {
            window.electronAPI.maximizeApp();
        }
    }
    return (
        <div className="title-bar h-5/100 text-foreground">
            <h3 className="left text-(--text-color)"></h3>
            <div className="right h-full">
                <button className="minimize-btn hover:bg-gray-500 hover:opacity-60 opacity-50 text-(--text-color)" onClick={handleMin}>_</button>
                <button className="maximize-btn hover:bg-gray-500 hover:opacity-60 opacity-50 text-(--text-color)" onClick={handleMax}>□</button>
                <button className="close-btn hover:bg-red-500 hover:opacity-70 opacity-50 text-(--text-color)" onClick={handleClose}>X</button>
            </div>
        </div>
    )
}