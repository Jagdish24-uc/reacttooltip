// App.js

// Import the necessary dependencies
import React from 'react';
import Tooltip from './Tooltip'; // Import the Tooltip component
import './App.css'; // Import the App.css styles

// Define the App component
const App = () => {
  return (
    <div className="container">
      <h1>Tooltip</h1> {/* Display a heading */}
      <Tooltip position="top"> {/* Render a Tooltip component with 'top' position */}
        <button className="button-gap">Hover Me (Top)</button> {/* Render a button with a text */}
      </Tooltip>

      <Tooltip position="bottom"> {/* Render a Tooltip component with 'bottom' position */}
        <button className="button-gap">Hover Me (Bottom)</button> {/* Render a button with a text */}
      </Tooltip>

      <Tooltip position="right"> {/* Render a Tooltip component with 'right' position */}
        <button className="button-gap">Hover Me (Right)</button> {/* Render a button with a text */}
      </Tooltip>

      <Tooltip position="left"> {/* Render a Tooltip component with 'left' position */}
        <button className="button-gap">Hover Me (Left)</button> {/* Render a button with a text */}
      </Tooltip>
    </div>
  );
};

export default App; // Export the App component as the default export
