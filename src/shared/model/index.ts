
// Model Interface
export interface IModel {
  getGuid(): string
  getId(): string
  getValidFrom(): Date
  toString(): string
}

export class Model {
  private guid: string
  private id: string
  private validFrom: Date

  constructor(guid: string, id: string, validFrom: Date) {
    this.guid = guid;
    this.id = id;
    this.validFrom = validFrom
  }

  getGuid(): string {
    return this.guid
  }

  getId(): string {
    return this.id
  }

  getValidFrom(): Date {
    return this.validFrom
  }

  toString(): string {
    return `guid: ${this.guid}, id: ${this.id}, validFrom: ${this.validFrom}`
  }
}
