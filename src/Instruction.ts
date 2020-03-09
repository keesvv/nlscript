import InstructionDefinition from './InstructionDefinition';
import Module from './Module';

class Instruction {
  constructor(
    public module: Module,
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

  public async execute(): Promise<void> {
    await this.definition.fn(this);
  }
}

export default Instruction;
