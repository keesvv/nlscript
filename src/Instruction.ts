import InstructionDefinition from './InstructionDefinition';

class Instruction {
  constructor(
    public definition: InstructionDefinition,
    public rawContent: string
  ) {
    this.args = this.rawContent.split(' ').slice(1);
  }

  public args: string[];

  public execute(): void {
    this.definition.fn(this);
  }
}

export default Instruction;
