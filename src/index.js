import React from 'react';
import ReactDOM from 'react-dom/client';
import './StyleComponents/NavBar.css';
import './StyleComponents/CartWidget.css';
import './StyleComponents/ItemList.css'
import { Header } from "./App.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);