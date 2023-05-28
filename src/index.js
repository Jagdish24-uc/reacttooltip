import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import './index.css'; // Import the index.css styles
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals'; // Import the reportWebVitals function

// Create a root for rendering React components
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root with strict mode enabled
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
