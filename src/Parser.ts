import Instruction from './Instruction';
import Preprocessor from './Preprocessor';
import IPrefix from './interfaces/IPrefix';

class Parser {
  constructor(content: string) {
    this.content = content;
  }

  public content: string;

  public rawInstructions: string[];

  private static parsePrefix(rawPrefix: string): IPrefix {
    const content = rawPrefix.split('.');

    if (content.length === 2) {
      return {
        module: content[0],
        definition: content[1]
      };
    }

    return {
      module: 'globaal',
      definition: rawPrefix
    };
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
        return new Instruction(prefix, i);
      });
  }
}

export default Parser;
