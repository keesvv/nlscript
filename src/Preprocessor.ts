import fs from 'fs';

class Preprocessor {
  static processFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default Preprocessor;
