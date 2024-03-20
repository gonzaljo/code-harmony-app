export interface IConfiguration {
  ids: number[]
  languages: string[]
  textvariants: string[]
}

export class Configuration implements IConfiguration {
  private _ids: number[]
  private _languages: string[]
  private _textvariants: string[]

  constructor(ids: number[], languages: string[], textvariants: string[]) {
    this._ids = ids
    this._languages = languages
    this._textvariants = textvariants
  }

  get ids(): number[] {
    return this._ids
  }

  get languages(): string[] {
    return this._languages
  }

  get textvariants(): string[] {
    return this._textvariants
  }
}
