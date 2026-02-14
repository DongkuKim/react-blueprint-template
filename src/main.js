import React from 'https://esm.sh/react@19.2.0';
import { createRoot } from 'https://esm.sh/react-dom@19.2.0/client';
import { App } from './App.js';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(React.createElement(App));
}
