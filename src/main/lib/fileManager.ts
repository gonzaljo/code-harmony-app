import fs from 'fs'
import { ICodeHarmony } from '@shared/model/application'

/**
 * Saves the configuration to a file.
 * @param event - The event object.
 * @param value - The value object containing the path and configuration.
 */
export const save = (event, value: ICodeHarmony): void => {
  if (!value.path) {
    throw new Error('Path is required')
  }

  const val = {
    configuration: value.configuration,
    application: null
  }
  fs.writeFileSync(value.path, JSON.stringify(val, null, 2), 'utf-8')
}

export const open = (value: string): ICodeHarmony => {
  if (!value || value.length === 0) {
    throw new Error('Path is required')
  }

  const data = fs.readFileSync(value, 'utf-8')
  const retVal: ICodeHarmony = JSON.parse(data)
  retVal.path = value
  return retVal
}
