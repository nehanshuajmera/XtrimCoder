import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkmodeContextProvider } from './context/DarkmodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkmodeContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DarkmodeContextProvider>
);

reportWebVitals();
