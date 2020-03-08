import InstructionDefinition from '../InstructionDefinition';

import maak from './maak.handler';
import toon from './toon.handler';

export default new Array<InstructionDefinition>(
  new InstructionDefinition('maak', maak),
  new InstructionDefinition('toon', toon)
);
