import { Configuration } from './configuration'


/**
 * A container for the Configuration and the Application
 */
export interface CodeHarmony {
  configuration: Configuration
  application: Application
}

/**
 * The Application contains all the other parts of the model
 */
export interface Application extends Identifyable, TextEnabled {
  id: string
  textElements?: TextElement[]
  codes?: Code[]
  intRelations?: IntRelations[]
  extRelations?: ExtRelations[]
}

/**
 * A container for for TextFragments
 */
export interface TextElement extends GlobalElement {
  id: string
  textConfig: string
}

/**
 * This interface is a Textfragment, which will be used for TextEnabled objects
 */
export interface Textfragment extends Identifyable, Groupable {
  id: string
  textVariant: string
  locale: string
  text: string
}

/**
 * A Code with a list of Values
 */
export interface Code extends GlobalElement {
  id: string
  values?: Value[] | undefined
}

/**
 * A single value of a Code
 */
export interface Value extends GlobalElement {
  id: number
  indentification: string | undefined
}

/**
 * A relation between two Codes containing IntRelations
 */
export interface IntRelations extends GlobalElement {
  id: string
  fromCode: string
  toCode: string
  relations?: IntRelation[]
}

/**
 * A relation between two Values of a Code
 */
export interface IntRelation extends Validity {
  from: number
  to: number
}

/**
 * A relation between two Codes, one of this Application and one of an external System, containing ExtRelations
 */
export interface ExtRelations extends GlobalElement {
  id: string
  idExternal: string
  externalSystem: string
  externalCode: string
  format: string
  length: number
  relations?: ExtRelation[]
}

/**
 * A relation between a Value and an external System Code
 */
export interface ExtRelation {
  code: number
  externalCode: string | number
  valid: boolean
}

/**
 * A TextEnabled object can contain Textfragments in different languages and textVariants
 */
export interface TextEnabled {
  textFragments?: Textfragment[]
}

/**
 * This interface is used to make a class or object identifiable.
 */
export interface Identifyable {
  uuid: string
  lastModified: Date
  created: Date
  createdBy: string
}

/**
 * This interface is used to mark a class or object Valid
 */
export interface Validity {
  valid: boolean
  validFrom: Date
}

/**
 * This interface is used to mark a class or object to be a member of a group
 */
export interface Groupable {
  group: string | undefined
}

/**
 * Every main part as TextElement, Code, IntRelations and ExtRelations will be a GlobalElement
 */
export interface GlobalElement extends Identifyable, TextEnabled, Validity, Groupable {
  description?: string
}
