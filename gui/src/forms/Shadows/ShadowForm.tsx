import React from 'react';
import { BaseTheme } from '@lb/shared';
import ShadowFormSection from './ShadowFormSection';

export interface ShadowFormProps {
  prepopulatedShadows: BaseTheme['shadows'];
};
const ShadowForm: React.FC<ShadowFormProps> = ({ prepopulatedShadows }) => {
  return (
    <div className='Form'>
      <h2>Shadows</h2>
      <ShadowFormSection
        keys={Object.keys(prepopulatedShadows)}
        sectionTitle='shadows'
      />
    </div>
  );
};
export default ShadowForm;