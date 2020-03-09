import Instruction from '../../Instruction';
import storage from '../../storage';

export default (i: Instruction) => {
  console.log(storage.get(i.args[0]));
};
