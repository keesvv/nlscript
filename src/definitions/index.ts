import InstructionDefinition from '../InstructionDefinition';

import maak from './maak.handler';

export default new Array<InstructionDefinition>(
  new InstructionDefinition('maak', maak)
);

