import React from 'react';
import { BaseTheme } from '@lb/shared';
import Color from '../inputs/Color';

/**
 * maybe instead of onChange and values being props, have a form context to pull from
 */

export interface ColorFormSectionProps {
  keys: (keyof BaseTheme['colors']['primary'])[];
  onChange: (value: string, name: string) => void;
  sectionTitle: string;
  values: BaseTheme['colors']['primary'];
};
const ColorFormSection: React.FC<ColorFormSectionProps> = ({ keys, sectionTitle, values, onChange }) => {
  return (
    <ul title={sectionTitle}>
      {keys.map(key => (
        <Color
          label={key.toString()}
          name={key.toString()}
          onChange={(value) => onChange(value, key.toString())}
          value={values[key]}
        />
      ))}
    </ul>
  );
};
export default ColorFormSection;