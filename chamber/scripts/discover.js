document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date();
    var today = currentDate.getTime();
    var welcomeMessage = document.getElementById("welcomeMessage");

    if (!lastVisit) {
        welcomeMessage.innerText = "Welcome! Let us know if you have any questions.";
        localStorage.setItem("lastVisit", today);
    } else {
        var daysSinceLastVisit = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit == 0) {
            welcomeMessage.innerText = "Back so soon! Awesome!";
        } else {
            var message = "You last visited n days ago. " + daysSinceLastVisit + " day";
            message += (daysSinceLastVisit === 1) ? "." : "s.";
            welcomeMessage.innerText = message;
        }

        localStorage.setItem("lastVisit", today);
    }
});