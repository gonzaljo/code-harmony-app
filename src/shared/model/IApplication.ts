import {
  IVersionable,
  ITextEnabled,
  ITextElement,
  ICode,
  IRelations,
  IExtRelations
} from './application'
import { v4 as uuidv4 } from 'uuid'

/**
 * The Application contains all the other parts of the model
 */

export interface IApplication extends IVersionable, ITextEnabled {
  id: string
  textElements?: ITextElement[]
  codes?: ICode[]
  intRelations?: IRelations[]
  extRelations?: IExtRelations[]
}

// Create a implementation of the IApplication interface
export class Application implements IApplication {
  private _id: string
  private _textElements?: ITextElement[]
  private _codes?: ICode[]
  private _intRelations?: IRelations[]
  private _extRelations?: IExtRelations[]
  private _uuid: string
  private _lastModified: Date
  private _created: Date
  private _createdBy: string

  constructor(id: string) {
    this._id = id
    this._uuid = uuidv4()
    this._lastModified = new Date()
    this._created = new Date()
    this._createdBy = 'SYSTEM'
    this._textElements = []
    this._codes = []
    this._intRelations = []
    this._extRelations = []
  }

  get id(): string {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }
  get textElements(): ITextElement[] | undefined {
    return this._textElements
  }

  set addTextElement(element: ITextElement) {
    if (!this._textElements) {
      this._textElements = []
    }
    this._textElements.push(element)
  }

  get codes(): ICode[] | undefined {
    return this._codes
  }
  set codes(value: ICode[] | undefined) {
    this._codes = value
  }

  get intRelations(): IRelations[] | undefined {
    return this._intRelations
  }
  set intRelations(value: IRelations[] | undefined) {
    this._intRelations = value
  }

  get extRelations(): IExtRelations[] | undefined {
    return this._extRelations
  }
  set extRelations(value: IExtRelations[] | undefined) {
    this._extRelations = value
  }

  get uuid(): string {
    return this._uuid
  }
  set uuid(value: string) {
    this._uuid = value
  }

  get lastModified(): Date {
    return this._lastModified
  }
  set lastModified(value: Date) {
    this._lastModified = value
  }

  get created(): Date {
    return this._created
  }
  set created(value: Date) {
    this._created = value
  }

  get createdBy(): string {
    return this._createdBy
  }
  set createdBy(value: string) {
    this._createdBy = value
  }
  // Repeat the pattern for other properties...
}
