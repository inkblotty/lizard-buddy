import React from 'react';

export interface ThemeKeyMenuProps {
  activeKey?: string;
  keys: string[];
  onClick: (key: string) => void;
};
const ThemeKeyMenu: React.FC<ThemeKeyMenuProps> = ({ activeKey, keys, onClick }) => {
  return (
    <ul className='ThemeKeyMenu'>
      {keys.map(key => (
        <li>
          <button
            className={activeKey === key ? 'isActive' : ''}
            onClick={() => onClick(key)}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ThemeKeyMenu;