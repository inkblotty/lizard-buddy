import { useField } from 'react-final-form';

export interface ShadowInputProps {
  label: string;
  name: string;
  variant?: 'li';
};
const ShadowInput: React.FC<ShadowInputProps> = ({ label, name, variant }) => {
  const { input } = useField(name);
  const Element = variant || 'div';
  return (
    <Element className='ShadowInput'>
      <label htmlFor={input.name}>{label}</label>
      <div aria-hidden className='ShadowInput-Box' style={{ boxShadow: input.value }} />
      <textarea value={input.value} name={input.name} onChange={input.onChange} />
    </Element>
  );
};
export default ShadowInput;