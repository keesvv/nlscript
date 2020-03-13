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

  public static registeredModules: Array<Module> = [];

  public static registerModules(...modules: Array<Module>): void {
    Module.registeredModules.push(...modules);
  }
}

export default Module;
