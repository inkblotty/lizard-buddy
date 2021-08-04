import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LizardBuddy header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Lizard Buddy/i);
  expect(headerElement).toBeInTheDocument();
});
