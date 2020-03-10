import Parser from './Parser';
import Engine from './Engine';
import Preprocessor from './Preprocessor';

(async () => {
  const content = await Preprocessor.processFile(process.argv[2]);

  const parser = new Parser(content);
  let instructions;

  try {
    instructions = parser.parse();
  } catch (error) {
    if (error.isUserError) {
      error.printError();
    } else {
      // eslint-disable-next-line no-console
      console.log('An unexpected error occured. See output below:');
      // eslint-disable-next-line no-console
      console.trace(error);
    }

    process.exit(1);
  }

  await Engine.execute(instructions);
})();
