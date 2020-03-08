import Instruction from './Instruction';
import InstructionDefinition from './InstructionDefinition';

const definitions = new Array<InstructionDefinition>(
  new InstructionDefinition('maak', (i) => {
    console.log(i.args);
  })
);

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
