import React, { useCallback } from 'react';

export interface ColorProps {
  label: string;
  name: string;
  onChange: (value: string) => void;
  value?: string;
};
const Color: React.FC<ColorProps> = ({ label, name, onChange, value }) => {
  const handleChange = useCallback(e => onChange(e.target.value), []);
  return (
    <div className='ColorInput'>
      <div className='ColorInput-Circle' />
      <label htmlFor={name}>{label}</label>
      <input value={value} name={name} onChange={handleChange} />
    </div>
  );
};
export default Color;