const { app, BrowserWindow } = require('electron')
require('update-electron-app')()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 1500
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})