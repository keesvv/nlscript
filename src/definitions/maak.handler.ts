import Instruction from '../Instruction';
import storage from '../storage';

export default (i: Instruction) => {
  storage.set(i.args[0], i.args[1]);
};
