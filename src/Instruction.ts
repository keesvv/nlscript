import Module from './Module';
import IDefinition from './interfaces/IDefinition';
import IPrefix from './interfaces/IPrefix';
import InstructionNotFoundError from './errors/InstructionNotFoundError';
import ModuleNotRegisteredError from './errors/ModuleNotRegisteredError';

class Instruction {
  constructor(
    public prefix: IPrefix,
    public rawContent: string
  ) {
    this.parseArgs();
    this.updateDefinitions();
  }

  public module: Module;

  public definition: IDefinition;

  public args: string[];

  private updateDefinitions() {
    this.module = Module.registeredModules.find((j) => j.keyword === this.prefix.module);
    this.definition = this.module?.definitions.find((j) => j.keyword === this.prefix.definition);
  }

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
    this.updateDefinitions();

    if (!this.module) {
      throw new ModuleNotRegisteredError(this.prefix.module, {
        line: this.rawContent,
        error: this.prefix.module
      });
    }

    if (!this.definition) {
      throw new InstructionNotFoundError(
        this.prefix.definition,
        this.prefix.module, {
          line: this.rawContent,
          error: this.prefix.definition
        }
      );
    }

    await this.definition.fn(this);
  }
}

export default Instruction;
