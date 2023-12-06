import React from 'react';
import { Provider } from 'react-redux';

import './locales/i18n';

import { store as reduxStore } from './store';
import App from './App';

const Root: React.FC = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

export default Root;
