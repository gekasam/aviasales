import React from 'react';
import ReactDOM from 'react-dom/client';

import classes from './index.module.scss';
import AviasalesApp from './components/AviasalesApp';

console.log(classes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AviasalesApp />
  </React.StrictMode>
);
