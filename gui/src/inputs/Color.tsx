import React, { useCallback } from 'react';

export interface ColorProps {
  label: string;
  name: string;
  onChange: (value: string) => void;
  value?: string;
  variant?: 'li';
};
const Color: React.FC<ColorProps> = ({ label, name, onChange, value, variant }) => {
  const handleChange = useCallback(e => onChange(e.target.value), [onChange]);
  const Element = variant || 'div';
  return (
    <Element className='ColorInput'>
      <label htmlFor={name}>{label}</label>
      <div aria-hidden className='ColorInput-Circle' style={{ backgroundColor: value }} />
      <input value={value} name={name} onChange={handleChange} />
    </Element>
  );
};
export default Color;