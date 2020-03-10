import UserError from './UserError';
import IErrorContext from '../interfaces/IErrorContext';

class ModuleNotFoundError extends UserError {
  constructor(context: IErrorContext) {
    super('Module not found.', context);
  }
}

export default ModuleNotFoundError;
