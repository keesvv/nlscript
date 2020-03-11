/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import Instruction from '../Instruction';

export default interface IDefinition {
  keyword: string;
  fn: (instruction: Instruction) => void | Promise<void>
};
