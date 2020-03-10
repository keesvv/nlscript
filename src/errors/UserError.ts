/* eslint-disable no-console */
import IErrorContext from '../interfaces/IErrorContext';

class UserError extends Error {
  constructor(
    public message: string,
    public context: IErrorContext
  ) {
    super();
  }

  public isUserError = true;

  printError(): void {
    console.log(this.context.line);
    console.log(this.message);
  }
}

export default UserError;
