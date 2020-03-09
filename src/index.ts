import fs from 'fs';
import Parser from './Parser';

const content = fs.readFileSync(process.argv[2], { encoding: 'utf8' });
const parser = new Parser(content);

const instructions = parser.parse();

(async () => {
  for (const instruction of instructions) {
    await instruction.execute();
  }
})();
