import fs from 'fs';
import Instruction from './Instruction';
import modules from './modules';

class Parser {
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

  async loadContentFromFile(filePath: string): Promise<void> {
    this.content = await new Promise((resolve, reject) => {
      fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }

  parse(): Array<Instruction> {
    this.rawInstructions = this.content
      .split(';')
      .map((i) => i.trim())
      .filter((i) => i.length);

    return this.rawInstructions
      .map((i) => {
        const prefix = Parser.parsePrefix(i.split(' ')[0]);

        const module = modules.find((j) => j.keyword === prefix.module);

        if (!module) {
          throw new Error('Module not found');
        }

        const definition = module.definitions.find((j) => j.keyword === prefix.definition);

        if (!definition) {
          throw new Error('Instruction not found');
        }

        return new Instruction(module, definition, i);
      });
  }
}

export default Parser;
