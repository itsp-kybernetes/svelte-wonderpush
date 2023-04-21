import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
  root.unmount();
});
