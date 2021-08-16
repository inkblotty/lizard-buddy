import React from 'react';
import { useField } from 'formik';

export interface ColorProps {
  label: string;
  name: string;
  variant?: 'li';
};
const ColorInput: React.FC<ColorProps> = ({ label, name, variant }) => {
  const [field] = useField({ name, type: 'text' });
  const Element = variant || 'div';
  return (
    <Element className='ColorInput'>
      <label htmlFor={field.name}>{label}</label>
      <div aria-hidden className='ColorInput-Circle' style={{ backgroundColor: field.value }} />
      <input value={field.value} name={field.name} onChange={field.onChange} />
    </Element>
  );
};
export default ColorInput;