export class AcceptablePassword {
  validatePassword(password: string): boolean {
    return password.length >= 6;

  }
}