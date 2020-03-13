import Module from './Module';
import IDefinition from './interfaces/IDefinition';

class Instruction {
  constructor(
    public module: Module,
    public definition: IDefinition,
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
