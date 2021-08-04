import React from 'react';
import { BaseTheme } from '@lb/shared';
import Color from '../inputs/Color';

/**
 * maybe instead of onChange and values being props, have a form context to pull from
 */

export interface ColorFormSectionProps {
  onChange: (value: string, name: string) => void;
  sectionTitle: string;
  values: BaseTheme['colors']['primary'];
};
const ColorFormSection: React.FC<ColorFormSectionProps> = ({ sectionTitle, values, onChange }) => {
  return (
    <>
    <h3>
      {sectionTitle}
    </h3>
    <ul>
      {Object.keys(values).map(key => (
        <Color
          key={`${sectionTitle}-${key}`}
          label={key.toString()}
          name={key.toString()}
          onChange={(value) => onChange(value, key.toString())}
          value={values[key as unknown as keyof BaseTheme['colors']['primary']]}
          variant='li'
        />
      ))}
    </ul>
    </>
  );
};
export default ColorFormSection;