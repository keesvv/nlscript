import fs from 'fs';
import Instruction from './Instruction';
import modules from './modules';

class Parser {
  public content: string;

  public rawInstructions: string[];

  private parsePrefix(rawPrefix: string) {
    const content = rawPrefix.split('.');
    const prefix = {
      module: '',
      definition: ''
    }

    if (content.length === 2) {
      prefix.module = content[0];
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
    })
  }

  parse(): Array<Instruction> {
    this.rawInstructions = this.content
      .split(';')
      .map(i => i.trim())
      .filter(i => i.length);

    return this.rawInstructions
      .map((i) => {
        const prefix = this.parsePrefix(i.split(' ')[0]);
        
        const _module = modules.find(j => j.keyword === prefix.module);

        if (!_module) {
          throw new Error('Module not found');
        }
        
        const definition = _module.definitions.find(j => j.keyword === prefix.definition);

        if (!definition) {
          throw new Error('Instruction not found');
        }

        return new Instruction(_module, definition, i);
      });
  }
}

export default Parser;
