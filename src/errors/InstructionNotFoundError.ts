import UserError from './UserError';
import IErrorContext from '../interfaces/IErrorContext';

class InstructionNotFoundError extends UserError {
  constructor(instructionName: string, moduleName: string, context: IErrorContext) {
    super(`Instruction '${instructionName}' not found in module '${moduleName}'.`, context);
  }
}

export default InstructionNotFoundError;
