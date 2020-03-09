import InstructionDefinition from './InstructionDefinition';

class Module {
  constructor(data: {
    name: string,
    keyword: string,
    definitions: Array<InstructionDefinition>
  }) {
    this.name = data.name;
    this.keyword = data.keyword;
    this.definitions = data.definitions;
  }

  public name: string;

  public keyword: string;

  public definitions: Array<InstructionDefinition>;
}

export default Module;
