import InstructionDefinition from './InstructionDefinition';

class Instruction {
  constructor(
    public definition: InstructionDefinition,
    public rawContent: string
  ) {
    this.args = this.rawContent.match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)
      .slice(1)
      .map((arg) => {
        if (arg.startsWith('"') && arg.endsWith('"')) {
          return arg.slice(1, arg.length - 1);
        }
        return arg;
      });
  }

  public args: string[];

  public execute(): void {
    this.definition.fn(this);
  }
}

export default Instruction;
