import { IConfiguration } from './configuration'

/**
 * A container for the Configuration and the Application
 */
export interface ICodeHarmony {
  path: string | undefined
  configuration: IConfiguration
  //application: IApplication
}

export const codeHarmonyFactory = (
  path: string | undefined,
  configuration: IConfiguration
): ICodeHarmony => {
  return {
    path,
    configuration
  }
}

/**
 * A container for for TextFragments
 */
export interface ITextElement extends IGlobalElement {
  id: string
  textConfig: string
}

/**
 * This interface is a Textfragment, which will be used for TextEnabled objects
 */
export interface ITextfragment extends IVersionable, IGroupable {
  id: string
  textVariant: string
  locale: string
  text: string
}

/**
 * A Code with a list of Values
 */
export interface ICode extends IGlobalElement {
  id: string
  values?: IValue[] | undefined
}

/**
 * A single value of a Code
 */
export interface IValue extends IGlobalElement {
  id: number
  indentification: string | undefined
}

/**
 * A relation between two Codes containing IntRelations
 */
export interface IRelations extends IGlobalElement {
  id: string
  fromCode: string
  toCode: string
  relations?: IRelation[]
}

/**
 * A relation between two Values of a Code
 */
export interface IRelation extends IValidity {
  from: number
  to: number
}

/**
 * A relation between two Codes, one of this Application and one of an external System, containing ExtRelations
 */
export interface IExtRelations extends IGlobalElement {
  id: string
  idExternal: string
  externalSystem: string
  externalCode: string
  format: string
  length: number
  relations?: IExtRelation[]
}

/**
 * A relation between a Value and an external System Code
 */
export interface IExtRelation {
  code: number
  externalCode: string | number
  valid: boolean
}

/**
 * A TextEnabled object can contain Textfragments in different languages and textVariants
 */
export interface ITextEnabled {
  textFragments?: ITextfragment[]
}

/**
 * This interface is used to make a class or object versionable, so that we can use it for versioning
 */
export interface IVersionable {
  uuid: string
  lastModified: Date
  created: Date
  createdBy: string
}

/**
 * This interface is used to mark a class or object Valid
 */
export interface IValidity {
  valid: boolean
  validFrom: Date
}

/**
 * This interface is used to mark a class or object to be a member of a group
 */
export interface IGroupable {
  group: string | undefined
}

/**
 * Every main part as TextElement, Code, IntRelations and ExtRelations will be a GlobalElement
 */
export interface IGlobalElement extends IVersionable, ITextEnabled, IGroupable {
  description?: string
}
