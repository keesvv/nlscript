import Instruction from '../../Instruction';

export default async (i: Instruction) => {
  await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, Number.parseInt(i.args[0], 10));
  });
};
