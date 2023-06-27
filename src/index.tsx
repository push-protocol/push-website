import * as dotenv from 'dotenv';
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
dotenv.config();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
} else {
  root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
