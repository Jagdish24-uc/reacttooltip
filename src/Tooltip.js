// Tooltip.js

import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  let tooltipClassName = 'tooltip';
  if (position) {
    tooltipClassName += ` tooltip-${position}`;
  }

  return (
    <div className="tooltip-wrapper">
      <div
        className="target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className={tooltipClassName}>
          This is a tooltip.
        </div>
      )}
    </div>
  );
};

export default Tooltip;
