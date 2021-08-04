import React, { useCallback } from 'react';

export interface ShadowInputProps {
  label: string;
  name: string;
  onChange: (value: string) => void;
  value?: string;
  variant?: 'li';
};
const ShadowInput: React.FC<ShadowInputProps> = ({ label, name, onChange, value, variant }) => {
  const handleChange = useCallback(e => onChange(e.target.value), [onChange]);
  const Element = variant || 'div';
  return (
    <Element className='ShadowInput'>
      <label htmlFor={name}>{label}</label>
      <div aria-hidden className='ShadowInput-Box' style={{ boxShadow: value }} />
      <input value={value} name={name} onChange={handleChange} />
    </Element>
  );
};
export default ShadowInput;