import React, { useCallback } from 'react';
import { BaseTheme } from '@lb/shared';
import ShadowFormSection from './ShadowFormSection';

export interface ShadowFormProps {
  prepopulatedShadows: BaseTheme['shadows'];
};
const ShadowForm: React.FC<ShadowFormProps> = ({ prepopulatedShadows }) => {
  const onChange = useCallback((value, key) => {

  }, []);

  const sections = Object.keys(prepopulatedShadows).map(sectionKey => (
    <ShadowFormSection
      key={sectionKey}
      onChange={onChange}
      sectionTitle={sectionKey}
      values={prepopulatedShadows[sectionKey as '01']}
    />
  ));

  return (
    <div className='Form'>
      <h2>Shadows</h2>
      {sections}
    </div>
  );
};
export default ShadowForm;