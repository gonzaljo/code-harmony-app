/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { app, shell, BrowserWindow, ipcMain, Menu, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import path from 'path'
import fs from 'fs'

function createWindow(): void {
  // Create the browser window.
  // https://www.electronjs.org/de/docs/latest/api/structures/browser-window-options
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    x: 1073,
    y: 388,
    show: false,
    center: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // Create a Menu
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          click: () => {
            dialog
              .showSaveDialog({
                defaultPath: __dirname,
                title: 'New Code Harmony App',
                filters: [{ name: 'Code Harmony', extensions: ['chjson'] }]
              })
              .then((result) => {
                console.log(result.filePath)
                mainWindow.webContents.send('new-file', result.filePath)
              })
          }
        },
        {
          label: 'Exit',
          click: () => app.quit()
        }
      ]
    }
  ]

  // Set the menu to the application
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.codeharmony.electron-toolkit')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))
  ipcMain.on('save', (event, value) => {
    const pth = value.path
    const val = {
      configuration: value.configuration,
      application: null
    }
    fs.writeFileSync(pth, JSON.stringify(val, null, 2), 'utf-8')
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
