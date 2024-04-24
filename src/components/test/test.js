import React, { useState } from 'react';
import "./test.css";

function TabComponent() {
  // Define state variables to keep track of active tab
  const [activeTab, setActiveTab] = useState(null);

  // Function to handle tab click
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div class="portfolio-item">
  <div class="preview">
    <img src="small-preview-image.jpg" alt="Preview Image"></img>
  </div>
  <div class="full-image">
    <img src="full-screenshot-image.jpg" alt="Full Screenshot"></img>
  </div>
</div>

      
      
    </div>
  );
}

export default TabComponent;
