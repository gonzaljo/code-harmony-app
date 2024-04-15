import { Rectangle } from 'electron'
import path from 'path'
import { getUser } from './userManager'
import fs from 'fs'

export type Settings = {
  reactangle: Rectangle
  files: string[]
}

/**
 * Retrieves the settings for the application.
 * If a settings file exists, it reads the file and returns the settings from it.
 * If the settings file does not exist, it returns default settings.
 * @returns The settings object containing the width, height, x, and y values.
 */
export const getSettings = (): Settings => {
  const filePath = path.join(getUser().homeDirectory, '.code-harmony')

  const size: Rectangle = {
    width: 900,
    height: 670,
    x: 20,
    y: 20
  }

  const files: string[] = [];

  if (fs.existsSync(filePath)) {
    const settings: string = fs.readFileSync(
      path.join(getUser().homeDirectory, '.code-harmony'),
      'utf-8'
    )
    const settingsJson = JSON.parse(settings)
    size.width = settingsJson.reactangle.width
    size.height = settingsJson.reactangle.height
    size.x = settingsJson.reactangle.x
    size.y = settingsJson.reactangle.y
    files.push(...settingsJson.files)
  }

  return {
    reactangle: size,
    files: files
  }
}
