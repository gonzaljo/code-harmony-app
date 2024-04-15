import { ElectronAPI } from '@electron-toolkit/preload'
import { User } from '../main/lib/userManager'
import { ICodeHarmony } from '@shared/model/application'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    usermanager: {
      get: () => User
    }
    menu: {
      onNewFile: (callback: (value: string) => void) => void
      onOpenFile: (callback: (value: ICodeHarmony) => void) => void
    }
    files: {
      onSave: (value: ICodeHarmony) => void
    }
  }
}
