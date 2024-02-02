const d = new Date();
// Get year
const year = d.getFullYear();
document.querySelector('#current-year').textContent = year;

// Get last updated date
const lastUpdate = document.lastModified
document.querySelector('#lastModified').textContent = lastUpdate