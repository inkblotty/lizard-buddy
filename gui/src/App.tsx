import React from 'react';
import './App.css';
import ColorForm from './forms/ColorForm';

const placeholder = {
  primary: {
    100: '#D1EBCE',
    200: '#A3D69E',
    300: '#75C26D',
    400: '#4B9743',
    500: '#367A30',
    600: '#206B19',
    700: '#1A5614',
    800: '#13400F',
    900: undefined,
  },
  secondary: {
    100: '#F1F1EA',
    200: '#F1F1EA',
    300: '#D7D7D2',
    400: '#BCBCBA',
    500: '#A2A2A2',
    600: '#3D3D3D',
    700: '#141414',
    800: '#000000',
    900: undefined,
  },
  success: {
    100: '#D1EBCE',
    200: '#A3D69E',
    300: '#75C26D',
    400: '#4B9743',
    500: '#367A30',
    600: '#206B19',
    700: '#1A5614',
    800: '#13400F',
    900: undefined,
  },
  error: {
    100: '#FFDEDF',
    200: '#FFBCBE',
    300: '#FF9B9E',
    400: '#FF797D',
    500: '#FF585D',
    600: '#E9353A',
    700: '#D31117',
    800: '#BB090E',
    900: undefined,
  },
  warning: {
    100: '#FFF4CC',
    200: '#FFE999',
    300: '#FFDE66',
    400: '#FFD333',
    500: '#FFC800',
    600: '#ECBA04',
    700: '#D8AB07',
    800: '#B28D04',
    900: undefined,
  },
  information: {
    100: '#DFF9FF',
    200: '#C0F2FF',
    300: '#A0ECFF',
    400: '#81E5FF',
    500: '#61DFFF',
    600: '#3DB2CF',
    700: '#18849F',
    800: '#08677E',
    900: undefined,
  },
  neutral: {
    100: '#F1F1EA',
    200: '#D7D7D2',
    300: '#BCBCBA',
    400: '#A2A2A2',
    500: '#616161',
    600: '#3D3D3D',
    700: '#252525',
    800: '#141414',
    900: undefined,
  },
  reward: {
    100: '#DFF9FF',
    200: '#C0F2FF',
    300: '#A0ECFF',
    400: '#81E5FF',
    500: '#61DFFF',
    600: '#3DB2CF',
    700: '#18849F',
    800: '#08677E',
    900: undefined,
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Lizard Buddy
      </header>
      <ColorForm prepopulatedColors={placeholder} />
    </div>
  );
}

export default App;
