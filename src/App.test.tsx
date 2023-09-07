// React + Web3 Essentials
import React from 'react';

// External Components
import { render, screen } from '@testing-library/react';

// Internal Components
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
