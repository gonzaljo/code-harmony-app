/**
 * The Configuration for an Application
 */
export interface IConfiguration {
  textVariants: ITextVariant[]
  textConfigs: ITextConfig[]
  groups: IGroup[]
  locales: ILocale[]
}

export class Configuration implements IConfiguration {
  textVariants: ITextVariant[]
  textConfigs: ITextConfig[]
  groups: IGroup[]
  locales: ILocale[]

  constructor() {
    this.textVariants = []
    this.textConfigs = []
    this.groups = []
    this.locales = []
  }
}

export const configurationFactory = (prefilled: boolean): IConfiguration => {
  const config = new Configuration()

  if (prefilled) {
    config.textConfigs.push(
      {
        id: 'text',
        format: '.{3,20}',
        message: 'For simple text'
      },
      {
        id: 'mesaage',
        format: '\n{5}',
        message: 'For messages used in the application'
      }
    )
    config.textVariants.push(
      {
        id: 'short',
        mimeType: 'text/plain',
        length: 20,
        default: true
      },
      {
        id: 'long',
        mimeType: 'text/plain',
        length: 200,
        default: false
      }
    )
    config.locales.push(
      {
        id: 'de_CH',
        description: 'German (Switzerland)',
        defaultLocale: true
      },
      {
        id: 'fr_CH',
        description: 'French (Switzerland)',
        defaultLocale: false
      },
      {
        id: 'it_CH',
        description: 'Italian (Switzerland)',
        defaultLocale: false
      },
      {
        id: 'en_US',
        description: 'English (United States)',
        defaultLocale: false
      }
    )
  }

  return JSON.parse(JSON.stringify(config))
}

/**
 * Evenry Application can have multiple TextVariants which describe the different types of TextFragments
 */
export interface ITextVariant {
  id: string
  mimeType: string
  length: number
  default: boolean
}

/**
 * A TextConfig defines types of TextElements
 */
export interface ITextConfig {
  id: string
  format: string
  message: string
}

/**
 * A Group to mark Implementors of the Interface Groupalbe as members of a group
 */
export interface IGroup {
  id: string
  description: string
}

export const groupFactory = (id: string, description: string): IGroup => {
  return { id: id, description: description }
}

/**
 * Defines a locale for an Application
 *
 * “para" id: is the locale, like "de_DE", "en_US" or "de_CH"
 */
export interface ILocale {
  id: string
  description: string
  defaultLocale: boolean
}
