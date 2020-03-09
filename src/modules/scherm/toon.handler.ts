import Instruction from '../../Instruction';
import storage from '../../storage';

export default (i: Instruction) => {
  // eslint-disable-next-line no-console
  console.log(storage.get(i.args[0]));
};
