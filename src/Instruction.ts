import Module from './Module';
import IDefinition from './interfaces/IDefinition';

class Instruction {
  constructor(
    public module: Module,
    public definition: IDefinition,
    public rawContent: string
  ) {
    this.parseArgs();
  }

  public args: string[];

  public parseArgs(): void {
    this.args = this.rawContent.match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)
      .slice(1)
      .map((arg) => {
        if (arg.startsWith('"') && arg.endsWith('"')) {
          return arg.slice(1, arg.length - 1);
        }
        return arg;
      });
  }

  public async execute(): Promise<void> {
    await this.definition.fn(this);
  }
}

export default Instruction;
