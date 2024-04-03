import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { getUser } from '../main/lib/userManager'
import { ICodeHarmony } from '../shared/model/application'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('usermanager', {
      get: () => getUser()
    })
    contextBridge.exposeInMainWorld('menu', {
      onNewFile: (callback) =>
        ipcRenderer.on('new-file', (_event, value: string) => callback(value))
    })
    contextBridge.exposeInMainWorld('files', {
      onSave: (value) => ipcRenderer.send('save', value)
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
