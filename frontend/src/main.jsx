import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './Themeprovider'; // adjust path
import './index.css'; // adjust path

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
