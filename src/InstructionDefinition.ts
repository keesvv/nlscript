import Instruction from './Instruction';

class InstructionDefinition {
  constructor(
    public keyword: string,
    public fn: (instruction: Instruction) => void | Promise<void>
  ) {}
}

export default InstructionDefinition;
