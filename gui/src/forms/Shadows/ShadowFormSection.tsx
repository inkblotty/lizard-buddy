import React from 'react';
import { BaseTheme } from '@lb/shared';
import ShadowInput from '../../inputs/ShadowInput';

export interface ShadowFormSectionProps {
  keys: (BaseTheme['shadows']['sm'])[];
  sectionTitle: string;
};
const ShadowFormSection: React.FC<ShadowFormSectionProps> = ({ sectionTitle, keys }) => {
  return (
    <>
    <h3>
      {sectionTitle}
    </h3>
    <ul>
      {keys.map(key => (
        <ShadowInput
          key={`${sectionTitle}-${key}`}
          label={key.toString()}
          name={`shadows.${key}`}
          variant='li'
        />
      ))}
    </ul>
    </>
  );
};
export default ShadowFormSection;