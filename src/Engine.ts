import Instruction from './Instruction';

class Engine {
  async execute(instructions: Array<Instruction>): Promise<void> {
    for (const instruction of instructions) {
      await instruction.execute();
    }
  }
}

export default Engine;
