function UpdateDateHour() {
    var date = new Date();
    var options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    var format = date.toLocaleDateString('en-US', options);
    document.getElementById('lastModified').textContent = format;
}

setInterval(UpdateDateHour, 1000);
UpdateDateHour();