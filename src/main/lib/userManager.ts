import os from 'os'

/**
 * Represents a user in the system.
 */
export class User {
  readonly username: string
  readonly homeDirectory: string

  /**
   * Creates a new User instance.
   * @param username - The username of the user.
   * @param homeDirectory - The home directory of the user.
   */
  constructor(username: string, homeDirectory: string) {
    this.username = username
    this.homeDirectory = homeDirectory
  }
}

/**
 * Retrieves the current user information.
 * @returns {User} The user object containing the username and home directory.
 */
export function getUser(): User {
  const userInfo = os.userInfo()
  const username: string = userInfo.username
  const homeDirectory: string = userInfo.homedir

  return new User(username, homeDirectory)
}
