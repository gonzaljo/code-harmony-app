import { Configuration } from './configuration'

export interface Identifyable {
  uuid: string
  lastModified: Date
  created: Date
  createdBy: string
}

export interface Validity {
  valid: boolean
  validFrom: Date
}

export interface Groupable {
  group: string | undefined
}

export interface Textfragment extends Identifyable, Groupable {
  id: string
  textVariant: string
  languageCode: string
  text: string
}

export interface TextEnabled extends Identifyable, Validity, Groupable {
  textFragments?: Textfragment[]
}

export interface GlobalElement extends IdleDeadline, TextEnabled, Validity, Groupable {
  description?: string
}

export interface TextElement extends GlobalElement {
  id: string
  textConfig: string
}

export interface Value extends GlobalElement {
  id: number
  indentification: string | undefined
}

export interface Code extends GlobalElement {
  id: string
  values?: Value[] | undefined
}

export interface IntRelation extends Validity {
  from: number
  to: number
}

export interface IntRelations extends GlobalElement {
  id: string
  fromCode: string
  toCode: string
  relations?: IntRelation[]
}

export interface ExtRelation {
  code: number
  externalCode: string | number
  valid: boolean
}

export interface ExtRelations extends GlobalElement {
  id: string
  idExternal: string
  externalSystem: string
  externalCode: string
  format: string
  length: number
  relations?: ExtRelation[]
}

export interface Application extends Identifyable, TextEnabled {
  id: string
  textElements?: TextElement[]
  codes?: Code[]
  intRelations?: IntRelations[]
  extRelations?: ExtRelations[]
}

export interface CodeHarmony {
  configuration: Configuration
  application: Application
}
