/* eslint-disable no-console */
import chalk from 'chalk';
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
    console.log(this.context.line.replace(
      this.context.error, (oldValue) => chalk.redBright.bold(oldValue)
    ));
    console.log(this.message);
  }
}

export default UserError;
