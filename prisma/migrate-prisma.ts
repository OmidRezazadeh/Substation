import fs from 'fs';
import path from 'path';

const schemaDir = path.join(__dirname);
const baseDir = path.join(schemaDir, 'base');
const modelDir = path.join(schemaDir, 'model');
const outputFile = path.join(schemaDir, 'schema.prisma');

const files = [
  ...fs.readdirSync(baseDir).map((f) => path.join(baseDir, f)),
  ...fs.readdirSync(modelDir).map((f) => path.join(modelDir, f)),
];

console.log(files);

const merged = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n\n');

fs.writeFileSync(outputFile, merged);

console.log(`✅ Prisma schema merged into ${outputFile}`);
