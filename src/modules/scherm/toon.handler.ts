import Instruction from '../../Instruction';
import Storage from '../../Storage';

export default (i: Instruction) => {
  // eslint-disable-next-line no-console
  console.log(Storage.get(i.args[0]));
};
