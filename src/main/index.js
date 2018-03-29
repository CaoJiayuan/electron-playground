import { app, BrowserWindow, ipcMain, Menu } from 'electron'

const APP_VERSION = '0.0.1'
const isDev = process.env.NODE_ENV === 'development'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (!isDev) {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = isDev ? `http://localhost:9080` : `file://${__dirname}/index.html`
let maximize = false

function createWindow () {
  let options = {
    height: 768,
    useContentSize: true,
    width: 1360,
    // titleBarStyle: 'hidden',
    frame: false,
    hasShadow: true
  }
  if (!isDev) {
    options.webPreferences = {
      devTools: false
    }
  }
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow(options)

  mainWindow.loadURL(winURL)
  // mainWindow.loadURL('http://localhost:8080')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  handleIpc()
  setMenu()
}

function handleIpc () {
  ipcMain.on('close', () => {
    app.quit()
  })
  ipcMain.on('mini', () => {
    mainWindow.minimize()
  })
  ipcMain.on('max', () => {
    if (maximize) {
      mainWindow.unmaximize()
      maximize = false
    } else {
      mainWindow.maximize()
      maximize = true
    }
  })
}

function setMenu () {
  if (process.platform === 'darwin') {
    Menu.setApplicationMenu(new Menu())
  } else {
    Menu.setApplicationMenu(null)
  }
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
