import Parser from './Parser';
import Engine from './Engine';
import Preprocessor from './Preprocessor';

(async () => {
  const content = await Preprocessor.processFile(process.argv[2]);

  const parser = new Parser(content);
  const instructions = parser.parse();

  await Engine.execute(instructions);
})();
