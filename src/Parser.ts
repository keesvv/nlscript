import Instruction from './Instruction';
import Preprocessor from './Preprocessor';
import Module from './Module';
import ModuleNotFoundError from './errors/ModuleNotFoundError';
import InstructionNotFoundError from './errors/InstructionNotFoundError';

class Parser {
  constructor(content: string) {
    this.content = content;
  }

  public content: string;

  public rawInstructions: string[];

  private static parsePrefix(rawPrefix: string) {
    const content = rawPrefix.split('.');
    const prefix = {
      module: '',
      definition: ''
    };

    if (content.length === 2) {
      // eslint-disable-next-line prefer-destructuring
      prefix.module = content[0];
      // eslint-disable-next-line prefer-destructuring
      prefix.definition = content[1];
    } else {
      prefix.module = 'globaal';
      prefix.definition = rawPrefix;
    }

    return prefix;
  }

  private extractRawInstructions() {
    this.rawInstructions = this.content
      .split(';')
      .map((i) => i.trim())
      .filter((i) => i.length);
  }

  parse(): Array<Instruction> {
    this.content = Preprocessor.preprocess(this.content);
    this.extractRawInstructions();

    return this.rawInstructions
      .map((i) => {
        const prefix = Parser.parsePrefix(i.split(' ')[0]);

        const module = Module.registeredModules.find((j) => j.keyword === prefix.module);

        if (!module) {
          throw new ModuleNotFoundError(prefix.module, {
            line: i,
            error: prefix.module
          });
        }

        const definition = module.definitions.find((j) => j.keyword === prefix.definition);

        if (!definition) {
          throw new InstructionNotFoundError(prefix.definition, prefix.module, {
            line: i,
            error: prefix.definition
          });
        }

        return new Instruction(module, definition, i);
      });
  }
}

export default Parser;
