import InstructionDefinition from '../../InstructionDefinition';
import Module from '../../Module';

import maak from './maak.handler';
import toon from './toon.handler';

export default new Module({
  name: 'Globaal',
  keyword: 'globaal',
  definitions: [
    new InstructionDefinition('maak', maak),
    new InstructionDefinition('toon', toon)
  ]
})
