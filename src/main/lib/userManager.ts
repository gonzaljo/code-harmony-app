import os from 'os'

export class User {
  readonly username: string
  readonly homeDirectory: string

  constructor(username: string, homeDirectory: string) {
    this.username = username
    this.homeDirectory = homeDirectory
  }
}

export function getUser(): User {
  const userInfo = os.userInfo()
  const username: string = userInfo.username
  const homeDirectory: string = userInfo.homedir

  return new User(username, homeDirectory)
}
