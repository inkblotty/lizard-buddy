import React from 'react';
import { useField } from 'react-final-form';

export interface ColorProps {
  label: string;
  name: string;
  variant?: 'li';
};
const ColorInput: React.FC<ColorProps> = ({ label, name, variant }) => {
  const { input } = useField(name);
  const Element = variant || 'div';
  return (
    <Element className='ColorInput'>
      <label htmlFor={input.name}>{label}</label>
      <div aria-hidden className='ColorInput-Circle' style={{ backgroundColor: input.value }} />
      <input value={input.value} name={input.name} onChange={input.onChange} />
    </Element>
  );
};
export default ColorInput;