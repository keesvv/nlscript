import InstructionDefinition from '../../InstructionDefinition';
import Module from '../../Module';

import toon from './toon.handler';

export default new Module({
  name: 'Scherm',
  keyword: 'scherm',
  definitions: [
    new InstructionDefinition('toon', toon)
  ]
})
