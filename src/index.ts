import Parser from './Parser';
import Engine from './Engine';
import Module from './Module';
import Preprocessor from './Preprocessor';
import globalModule from './modules/src/modules/globaal';

// Register the 'globaal' module by default
Module.registerModules(globalModule);

(async () => {
  // Get the contents of the specified file
  const content = await Preprocessor.processFile(process.argv[2]);

  const parser = new Parser(content);
  let instructions;

  try {
    // Parse content into an array of instructions
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

  // Execute all instructions in a sequence
  await Engine.execute(instructions);
})();
