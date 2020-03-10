import IErrorContext from '../interfaces/IErrorContext';

class UserError extends Error {
  constructor(
    public message: string,
    public context: IErrorContext
  ) {
    super();
  }
}

export default UserError;
