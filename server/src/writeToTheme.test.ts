import { BaseTheme } from '@lb/shared';
import { promises as fs } from 'fs';
import path from 'path';
import writeToTheme from "./writeToTheme";

const categories: (keyof BaseTheme)[] = ['colors', 'elevations', 'radii', 'spacing', 'typography'];

const mockContent = 'Hello world';
const getDestinationPath = (category: string) => path.join(__dirname, '../../theme/src', category, 'BB.ts');

describe('writeToTheme', () => {
  afterAll(() => {
    categories.forEach(category => {
      fs.unlink(getDestinationPath(category));
    });
  });

  test.each(categories)('creates a new %p file if category is %p', async (category: keyof BaseTheme) => {
    const destinationPath = getDestinationPath(category);
    await writeToTheme('BB', mockContent, category);
    const newFile = await fs.readFile(destinationPath, 'utf-8');
    expect(newFile).toBeDefined();
    expect(newFile).toEqual(mockContent);
  });
});
