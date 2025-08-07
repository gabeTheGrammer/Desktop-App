import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ipcMain.on('app:close', () => {
  app.quit()
})

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    transparent: true,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
  });


  const isDev = process.env.NODE_ENV === 'development';

  win.webContents.openDevTools();
  // Load Vite dev server during development
  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    // Load built app in production
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);
