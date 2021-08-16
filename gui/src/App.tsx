import React, { useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';

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
      const { data: { isDefaultTheme, ...theme } } = await dataClient.get(`/${code || 'AA'}`);
      setExistingTheme(theme);
    }

    getAndAssignTheme();
  }, [code]);

  const submitToGH = useCallback(async (values) => {
    const postThemeForReview = async () => {
      const { data } = await dataClient.post(`/create/${code || 'AA'}`, values);
      // trigger success notification and a button to restart
      console.log(data);

      // todo: error handling (like if there are already too many PRs);
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
            <Formik
              initialValues={existingTheme}
              onSubmit={submitToGH}>
              {() => (
                <form>
                  {activeThemeKey === 'colors' && (
                    <ColorForm prepopulatedColors={existingTheme['colors']} />
                  )}
                  {activeThemeKey === 'shadows' && (
                    <ShadowForm prepopulatedShadows={existingTheme['shadows']} />
                  )}
                  <div className='SubmitButtonWrapper'>
                    <button type="submit">
                      Submit for Review
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </main>
        ) : 'Loading...'
      }
    </div>
  );
}

export default App;
