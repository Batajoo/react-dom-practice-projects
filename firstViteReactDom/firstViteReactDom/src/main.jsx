import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const AnotherElement = (
  <h2>Hi hello</h2>
);

const ReactElement = React.createElement("a", {href:"https://www.google.com/"}, "Hello world", "hehe");

createRoot(document.getElementById('root')).render(
  ReactElement
);
