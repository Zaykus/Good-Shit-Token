// JavaScript to make colors dynamic
const root = document.documentElement;

// Function to update colors
function updateColors(primary, secondary) {
  root.style.setProperty('--primary-color', primary);
  root.style.setProperty('--secondary-color', secondary);
  root.style.setProperty('--gradient-color', `linear-gradient(120deg, ${primary}, ${secondary})`);
}

// Example: Change colors on button click
/* document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const newPrimary = '#282828'; // Example new primary color
    const newSecondary = '#ffa726'; // Example new secondary color
    updateColors(newPrimary, newSecondary);
  }); 
}); */
