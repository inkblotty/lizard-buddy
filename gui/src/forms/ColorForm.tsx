import React, { useCallback } from 'react';
import { BaseTheme } from '@lb/shared';
import ColorFormSection from './ColorFormSection';

export interface ColorFormProps {
  prepopulatedColors: BaseTheme['colors'];
};
const ColorForm: React.FC<ColorFormProps> = ({ prepopulatedColors }) => {
  const onChange = useCallback((value, key) => {

  }, []);

  const sections = Object.keys(prepopulatedColors).map(sectionKey => (
    <ColorFormSection
    // @ts-ignore TODO fix me
      keys={Object.keys(prepopulatedColors[sectionKey as 'primary'])}
      onChange={onChange}
      sectionTitle={sectionKey}
      values={prepopulatedColors[sectionKey as 'primary']}
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