import { useField } from 'formik';

export interface ShadowInputProps {
  label: string;
  name: string;
  variant?: 'li';
};
const ShadowInput: React.FC<ShadowInputProps> = ({ label, name, variant }) => {
  const [field] = useField({ name, type: 'text' });
  const Element = variant || 'div';
  return (
    <Element className='ShadowInput'>
      <label htmlFor={field.name}>{label}</label>
      <div aria-hidden className='ShadowInput-Box' style={{ boxShadow: field.value }} />
      <textarea value={field.value} name={field.name} onChange={field.onChange} />
    </Element>
  );
};
export default ShadowInput;