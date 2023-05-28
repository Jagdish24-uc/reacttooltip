// App.js

import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Tooltip</h1>
      <Tooltip position="top">
        <button className="button-gap">Hover Me (Top)</button>
      </Tooltip>

      <Tooltip position="bottom">
        <button className="button-gap">Hover Me (Bottom)</button>
      </Tooltip>

      <Tooltip position="right">
        <button className="button-gap">Hover Me (Right)</button>
      </Tooltip>

      <Tooltip position="left">
        <button className="button-gap">Hover Me (Left)</button>
      </Tooltip>
    </div>
  );
};

export default App;
