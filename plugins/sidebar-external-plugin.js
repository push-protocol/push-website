// generateSidebarJson.js
const fs = require('fs');
const sidebars = require('../sidebars.js'); // Adjust the path to your actual sidebar config file

// Convert the sidebar object to JSON
const sidebarJson = JSON.stringify(sidebars, null, 2);

// Write the JSON to a file
fs.writeFile('./sidebar.json', sidebarJson, (err) => {
  if (err) {
    console.error('Error writing sidebar JSON:', err);
  } else {
    console.log('Sidebar JSON generated successfully.');
  }
});