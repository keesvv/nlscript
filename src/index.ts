import Parser from './Parser';
import Engine from './Engine';

const parser = new Parser();
const engine = new Engine();

(async () => {
  await parser.loadContentFromFile(process.argv[2]);

  const instructions = parser.parse();

  await engine.execute(instructions);
})();
