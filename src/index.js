import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots.js';
import App from './containers/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
