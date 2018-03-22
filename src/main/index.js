import { app, BrowserWindow, ipcMain, Menu, Notification } from 'electron'

const APP_VERSION = '0.0.1'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 768,
    useContentSize: true,
    width: 1360,
    titleBarStyle: 'hidden',
    // frame:false,
    hasShadow: true,
    // webPreferences: {
    //   devTools: false
    // }
  })

  mainWindow.loadURL(winURL)
  // mainWindow.loadURL('http://localhost:8080')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  handleIpc()
  Menu.setApplicationMenu(new Menu())

  new Notification({
    title: 'Demo',
    body: `Version ${APP_VERSION}`
  }).show()
}

function handleIpc () {
  ipcMain.on('close', () => {
    app.quit()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
