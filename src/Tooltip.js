// Tooltip.js

import React, { useState } from 'react'; // Import the necessary dependencies
import './Tooltip.css'; // Import the Tooltip.css styles

// Define the Tooltip component
const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false); // Create a state variable to track the visibility of the tooltip

  const handleMouseEnter = () => { // Event handler for mouse enter
    setShowTooltip(true); // Set showTooltip state to true when mouse enters the target
  };

  const handleMouseLeave = () => { // Event handler for mouse leave
    setShowTooltip(false); // Set showTooltip state to false when mouse leaves the target
  };

  let tooltipClassName = 'tooltip'; // Initialize the tooltipClassName variable with 'tooltip'
  if (position) {
    tooltipClassName += ` tooltip-${position}`; // Append the position value to the tooltipClassName if it exists
  }

  return (
    <div className="tooltip-wrapper">
      <div
        className="target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children} {/* Render the children elements passed to the Tooltip component */}
      </div>
      {showTooltip && ( // Render the tooltip if showTooltip is true
        <div className={tooltipClassName}>
          This is a tooltip.
        </div>
      )}
    </div>
  );
};

export default Tooltip; // Export the Tooltip component as the default export
