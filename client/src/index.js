import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // 1. Import PersistGate
import { store, persistor } from './redux/store'; // 1. Import store and persistor
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
