import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { StylesProvider } from 'styled-components';
import { styles } from './styles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StylesProvider styles={styles}>
      <App />
    </StylesProvider>
  </React.StrictMode>
);
