import store from '@renderer/store'
import { ICodeHarmony } from '@shared/model/application'

export default function storeFile(): void {
  const path = store.getState().codeHarmony.path
  const configuration = store.getState().configuration

  if (path === undefined || path === '') return

  const retVal: ICodeHarmony = {
    path: path,
    configuration: configuration
  }

  window.files.onSave(retVal)
}
