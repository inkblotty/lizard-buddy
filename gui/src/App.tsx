import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import { BaseTheme } from '../../shared';
import './App.css';
import ColorForm from './forms/Colors/ColorForm';
import ShadowForm from './forms/Shadows/ShadowForm';

function App() {
  const [code, setCode] = useState<string>();
  const [existingTheme, setExistingTheme] = useState<BaseTheme>();

  useEffect(() => {
    // request existing theme
  }, [code]);

  const submitToGH = useCallback(async (values) => {
    console.log('values: ', values);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Lizard Buddy
        {code ? `: Editing theme ${code}` : ''}
      </header>
      {existingTheme
        ? (
          <Form
            initialValues={existingTheme}
            onSubmit={submitToGH}
            render={({ handleSubmit }) => (
            <form>
              <ColorForm prepopulatedColors={existingTheme['colors']} />
              <ShadowForm prepopulatedShadows={existingTheme['shadows']} />
              <button type="submit" onClick={handleSubmit}>
                Submit for Review
              </button>
            </form>
          )} />
        ) : 'Loading...'
      }
    </div>
  );
}

export default App;
