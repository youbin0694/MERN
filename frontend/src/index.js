import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "http://localhost:3000";
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
