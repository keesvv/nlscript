import fs from 'fs';
import Parser from './src/Parser';

const content = fs.readFileSync(process.argv[2], { encoding: 'utf8' });
const parser = new Parser(content);

const instructions = parser.parse();

instructions.forEach(i => i.execute());
