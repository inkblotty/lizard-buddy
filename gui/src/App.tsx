import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'react-final-form';

import dataClient from './dataClient';
import { BaseTheme } from '../../shared';
import './App.css';
import ColorForm from './forms/Colors/ColorForm';
import ShadowForm from './forms/Shadows/ShadowForm';
import ThemeKeyMenu from './navigation/ThemeKeyMenu';

// todo: error handling
function App() {
  const [activeThemeKey, setActiveThemeKey] = useState<string>('colors');
  const [code, setCode] = useState<string>();
  const [existingTheme, setExistingTheme] = useState<BaseTheme>();

  useEffect(() => {
    // request existing theme
    const getAndAssignTheme = async () => {
      const { data } = await dataClient.get(`/${code || 'AA'}`);
      console.log('theme: ', data);
      setExistingTheme(data);
    }

    getAndAssignTheme();
  }, [code]);

  const submitToGH = useCallback(async (values) => {
    console.log('values: ', values);
    const postThemeForReview = async () => {
      const { data } = await dataClient.post(`/create/${code || 'AA'}`, values);
      // trigger success notification and a button to restart
      console.log(data);
    }
    if (code || 'AA') {
      postThemeForReview();
    } else {
      // trigger error notification
      console.error('code required');
    }
  }, [code]);

  const handleNavigation = useCallback((key) => {
    setActiveThemeKey(key);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Lizard Buddy
        {code ? `: Editing theme ${code}` : ''}
      </header>
      {existingTheme
        ? (
          <main>
            <ThemeKeyMenu
              activeKey={activeThemeKey}
              keys={Object.keys(existingTheme)}
              onClick={handleNavigation}
            />
            <Form
              initialValues={existingTheme}
              onSubmit={submitToGH}
              render={({ handleSubmit }) => (
              <form>
                {activeThemeKey === 'colors' && (
                  <ColorForm prepopulatedColors={existingTheme['colors']} />
                )}
                {activeThemeKey === 'shadows' && (
                  <ShadowForm prepopulatedShadows={existingTheme['shadows']} />
                )}
                <div className='SubmitButtonWrapper'>
                  <button type="submit" onClick={handleSubmit}>
                    Submit for Review
                  </button>
                </div>
              </form>
              
            )} />
          </main>
        ) : 'Loading...'
      }
    </div>
  );
}

export default App;
