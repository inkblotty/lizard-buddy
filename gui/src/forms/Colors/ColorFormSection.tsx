import React from 'react';
import { BaseTheme } from '@lb/shared';
import Color from '../../inputs/ColorInput';

export interface ColorFormSectionProps {
  sectionTitle: string;
  keys: (keyof BaseTheme['colors']['primary'])[];
};
const ColorFormSection: React.FC<ColorFormSectionProps> = ({ sectionTitle, keys }) => {
  return (
    <>
    <h3>
      {sectionTitle}
    </h3>
    <ul>
      {keys.map(key => (
        <Color
          key={`${sectionTitle}-${key}`}
          label={key.toString()}
          name={`colors.${sectionTitle}.${key}`}
          variant='li'
        />
      ))}
    </ul>
    </>
  );
};
export default ColorFormSection;