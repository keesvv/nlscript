import Instruction from './Instruction';
import definitions from './definitions';

class Parser {
  constructor(
    public content: string
  ) {}

  public rawInstructions: string[];

  parse(): Instruction[] {
    this.rawInstructions = this.content
      .split(';')
      .map(i => i.trim())
      .filter(i => i.length);

    return this.rawInstructions
      .map((i) => {
        const definition = definitions.find(j => i.startsWith(j.keyword));

        if (!definition) {
          throw new Error('Invalid instruction');
        }

        return new Instruction(definition, i);
      });
  }
}

export default Parser;
