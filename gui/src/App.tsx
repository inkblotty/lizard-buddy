import React, { useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';

import dataClient from './dataClient';
import { BaseTheme } from '../../shared';
import './App.css';
import ColorForm from './forms/Colors/ColorForm';
import ShadowForm from './forms/Shadows/ShadowForm';
import ThemeKeyMenu from './navigation/ThemeKeyMenu';
import Notification, { NotificationProps } from './notification/Notification';

// todo: error handling
function App() {
  const [activeThemeKey, setActiveThemeKey] = useState<string>('colors');
  const [existingTheme, setExistingTheme] = useState<BaseTheme>();
  const [notification, setNotification] = useState<NotificationProps>();

  // initial code populates the form
  const [initialCode] = useState<string>();

  // final code is the code submitted for review
  const [finalCode, setFinalCode] = useState<string>();

  useEffect(() => {
    // request existing theme
    const getAndAssignTheme = async () => {
      const { data: { isDefaultTheme, ...theme } } = await dataClient.get(`/${initialCode || 'AA'}`);
      setExistingTheme(theme);
    }

    getAndAssignTheme();
  }, [initialCode]);

  const submitToGH = useCallback(async (values) => {
    const postThemeForReview = async () => {
      const { data } = await dataClient.post(`/create/${finalCode || 'AA'}`, values);
      // trigger success notification and a button to restart
      console.log(data);

      // todo: error handling (like if there are already too many PRs);

      setNotification({
        type: 'success',
        content: <>{finalCode} submitted for review!</>
      });
    }
    if (finalCode || 'AA') {
      postThemeForReview();
    } else {
      // trigger error notification
      console.error('finalCode required');
    }
  }, [finalCode]);

  const handleNavigation = useCallback((key) => {
    setActiveThemeKey(key);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Lizard Buddy
      </header>
      {existingTheme
        ? (
          <main>
            {notification?.type && <Notification {...notification} />}
            <ThemeKeyMenu
              activeKey={activeThemeKey}
              keys={Object.keys(existingTheme)}
              onClick={handleNavigation}
            />
            <Formik
              initialValues={existingTheme}
              onSubmit={submitToGH}>
              {(props) => (
                <form>
                  {activeThemeKey === 'colors' && (
                    <ColorForm prepopulatedColors={existingTheme['colors']} />
                  )}
                  {activeThemeKey === 'shadows' && (
                    <ShadowForm prepopulatedShadows={existingTheme['shadows']} />
                  )}
                  <div className='SubmitButtonWrapper'>
                    <label htmlFor='finalCode'>
                      Code for this Theme
                      <input type='text' name='finalCode' onChange={({ target }) => setFinalCode(target?.value)} />
                    </label>
                    <button  disabled={!finalCode} onClick={(e) => {
                      e.preventDefault();
                      props.handleSubmit();
                    }}>
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
