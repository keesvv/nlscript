import InstructionDefinition from '../../InstructionDefinition';
import Module from '../../Module';

import maak from './maak.handler';

export default new Module({
  name: 'Globaal',
  keyword: 'globaal',
  definitions: [
    new InstructionDefinition('maak', maak)
  ]
});
