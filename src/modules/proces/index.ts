import InstructionDefinition from '../../InstructionDefinition';
import Module from '../../Module';

import wacht from './wacht.handler';

export default new Module({
  name: 'Proces',
  keyword: 'proces',
  definitions: [
    new InstructionDefinition('wacht', wacht)
  ]
});
