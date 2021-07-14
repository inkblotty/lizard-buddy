import { BaseTheme } from '@lb/shared';
import writeToTheme from "./writeToTheme";

const categories: (keyof BaseTheme)[] = ['colors', 'elevations', 'radii', 'spacing', 'typography'];

const mockContent = 'Hello world';
const mockBranch = 'test-branch-123';

describe('everything without the server', () => {
  // test.each(categories)('creates a new %p file if category is %p', async (category: keyof BaseTheme) => {
  //   await writeToTheme('BB', mockContent, { category, branch: mockBranch });
  // });
});
