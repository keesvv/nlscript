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

  static preprocess(content: string): string {
    const lines = content
      .split('\n')
      .map((i) => i.trim());

    return lines
      .map((i) => {
        if (i.startsWith('#')) {
          return null;
        }

        return i;
      })
      .filter((i) => i)
      .join('\n');
  }
}

export default Preprocessor;
