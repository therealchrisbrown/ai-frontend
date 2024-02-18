// JavaScript to handle the toggling of dark mode
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    // Enable dark mode
    // Set the Taipy GUI "dark_mode" option to true
    // Example: gui.run(stylekit={ "dark_mode": true });
    console.log('Dark mode enabled');
  } else {
    // Disable dark mode
    // Set the Taipy GUI "dark_mode" option to false
    // Example: gui.run(stylekit={ "dark_mode": false });
    console.log('Dark mode disabled');
  }
});