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

  // Parse all instructions
  const instructions = parser.parse();

  // Execute all instructions in a sequence
  await Engine.execute(instructions);
})();
