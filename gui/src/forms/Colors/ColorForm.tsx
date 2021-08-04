import React from 'react';
import { BaseTheme } from '@lb/shared';
import ColorFormSection from './ColorFormSection';

export interface ColorFormProps {
  prepopulatedColors: BaseTheme['colors'];
};
const ColorForm: React.FC<ColorFormProps> = ({ prepopulatedColors }) => {
  const sections = Object.keys(prepopulatedColors).map(sectionKey => (
    <ColorFormSection
      key={sectionKey}
      sectionTitle={sectionKey}
      // @ts-ignore
      keys={Object.keys(prepopulatedColors[sectionKey as 'primary'])}
    />
  ));

  return (
    <div className='Form'>
      <h2>Colors</h2>
      {sections}
    </div>
  );
};
export default ColorForm;