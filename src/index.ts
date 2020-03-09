import Parser from './Parser';
import Engine from './Engine';

const parser = new Parser();

(async () => {
  await parser.loadContentFromFile(process.argv[2]);

  const instructions = parser.parse();

  await Engine.execute(instructions);
})();
