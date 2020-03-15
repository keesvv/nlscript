import fs from 'fs';
import path from 'path';
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

  public static importExternalModule(moduleName: string): Promise<Module> {
    // const moduleIndex: string = await new Promise((resolve, reject) => {
    //   fs.readFile(`modules/${moduleName}/module.ts`, { encoding: 'utf8' }, (err, data) => {
    //     if (err) {
    //       reject(err);
    //     }

    //     resolve(data);
    //   });
    // });

    const dirname = path.dirname(process.argv[2]);
    const modulePath = path.join(dirname, 'modules', moduleName, 'module.js');

    if (fs.existsSync(modulePath)) {
      return import(modulePath);
    }

    return undefined;
  }
}

export default Module;
