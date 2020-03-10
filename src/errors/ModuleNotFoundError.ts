import UserError from './UserError';
import IErrorContext from '../interfaces/IErrorContext';

class ModuleNotFoundError extends UserError {
  constructor(moduleName: string, context: IErrorContext) {
    super(`Module not found: '${moduleName}'.`, context);
  }
}

export default ModuleNotFoundError;
