import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App.jsx';

var container = document.querySelector("#root");
var root = ReactDOM.createRoot(container);
root.render(<App name="Huynhat" />);
