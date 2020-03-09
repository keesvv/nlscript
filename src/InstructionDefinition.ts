import Instruction from './Instruction';

class InstructionDefinition {
  constructor(
    keyword: string,
    fn: (instruction: Instruction) => void | Promise<void>
  ) {
    this.keyword = keyword;
    this.fn = fn;
  }

  public keyword: string;

  public fn: (instruction: Instruction) => void | Promise<void>;
}

export default InstructionDefinition;
