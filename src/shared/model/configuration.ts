
export interface TextVariant {
  id: string
  mimeType: string
  length: number
  default: boolean
}

export interface TextConfig {
  id: string
  format: string,
  message: string
}

export interface Group {
  id: string
  description: string
}

export interface Language {
  id: string
  description: string
  defuault: boolean
}

export interface Configuration {
  textVariants: TextVariant[]
  textConfigs: TextConfig[]
  groups: Group[]
  languages: Language[]
}
