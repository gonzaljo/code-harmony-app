/**
 * The Configuration for an Application
 */
export interface Configuration {
  textVariants: TextVariant[]
  textConfigs: TextConfig[]
  groups: Group[]
  locales: Locale[]
}

/**
 * Evenry Application can have multiple TextVariants which describe the different types of TextFragments
 */
export interface TextVariant {
  id: string
  mimeType: string
  length: number
  default: boolean
}

/**
 * A TextConfig defines types of TextElements
 */
export interface TextConfig {
  id: string
  format: string,
  message: string
}

/**
 * A Group to mark Implementors of the Interface Groupalbe as members of a group
 */
export interface Group {
  id: string
  description: string
}

/**
 * Defines a locale for an Application
 * 
 * “para" id: is the locale, like "de_DE", "en_US" or "de_CH"
 */
export interface Locale {
  id: string
  description: string
  defuault: boolean
}

