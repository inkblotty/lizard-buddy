import { promises as fs } from 'fs';
import path from 'path';
import { BaseTheme } from '@lb/shared';

const logColor = '#4EA5D9';
const writeToTheme = async (code: string, data: any, category: keyof BaseTheme): Promise<void> => {
  try {
    const destination = path.join(__dirname, '../../theme/src', category);
    await fs.writeFile(path.join(destination, `${code}.ts`), data, 'utf-8');
    console.log(`%c\nSuccessfully created file: ${category}/${code}.ts`, `color: ${logColor}`);
  } catch (err) {
    console.log(`%c\nFailed to create file: ${category}/${code}.ts`, `color: ${logColor}`);
  }
};
export default writeToTheme;
