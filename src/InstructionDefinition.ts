import Instruction from './Instruction';

class InstructionDefinition {
  constructor(
    public keyword: string,
    public fn: (instruction: Instruction) => void
  ) {}
}

export default InstructionDefinition;
