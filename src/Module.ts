import IDefinition from './interfaces/IDefinition';

class Module {
  constructor(data: {
    name: string,
    keyword: string,
    definitions: Array<IDefinition>
  }) {
    this.name = data.name;
    this.keyword = data.keyword;
    this.definitions = data.definitions;
  }

  public name: string;

  public keyword: string;

  public definitions: Array<IDefinition>;
}

export default Module;
