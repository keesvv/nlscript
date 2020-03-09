import Module from "../Module";

import globaal from './globaal';
import scherm from './scherm';
import proces from './proces';

export default new Array<Module>(
  globaal,
  scherm,
  proces
);
