/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import Instruction from './Instruction';

class Engine {
  static async execute(instructions: Array<Instruction>): Promise<void> {
    for (const instruction of instructions) {
      try {
        await instruction.execute();
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
    }
  }
}

export default Engine;
