import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// app components
import App from './app';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.register(); // => application offline-mode
serviceWorker.unregister();
