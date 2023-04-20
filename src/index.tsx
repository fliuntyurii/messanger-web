import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';

import en from './locales/en.json';
import ua from './locales/ua.json';
import store from './store/store';
import App from './App';

import './styles/global.scss';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    uk: {
      translation: ua
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
