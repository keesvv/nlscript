import Instruction from '../../Instruction';
import Storage from '../../Storage';

export default (i: Instruction) => {
  Storage.set(i.args[0], i.args[1]);
};
