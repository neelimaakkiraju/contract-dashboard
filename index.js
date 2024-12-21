import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // If you have CSS

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
