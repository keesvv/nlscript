/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import Instruction from './Instruction';

class Engine {
  static async execute(instructions: Array<Instruction>): Promise<void> {
    for (const instruction of instructions) {
      await instruction.execute();
    }
  }
}

export default Engine;
