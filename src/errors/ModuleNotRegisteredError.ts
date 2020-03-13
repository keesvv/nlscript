import UserError from './UserError';
import IErrorContext from '../interfaces/IErrorContext';

class ModuleNotRegisteredError extends UserError {
  constructor(moduleName: string, context: IErrorContext) {
    super(`Module not registered: '${moduleName}'. Register it using \`gebruik ${moduleName};\`.`, context);
  }
}

export default ModuleNotRegisteredError;
