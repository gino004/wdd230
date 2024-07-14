document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date();
    var today = currentDate.getTime();
    var welcomeMessage = document.getElementById("welcomeMessage");

    console.log("lastVisit from localStorage:", lastVisit);

    if (!lastVisit) {
        welcomeMessage.innerText = "Welcome! Let us know if you have any questions.";
        localStorage.setItem("lastVisit", today);
        console.log("First visit, setting lastVisit to today:", today);
    } else {
        lastVisit = parseInt(lastVisit, 10); // Convertir lastVisit a un número
        console.log("Parsed lastVisit:", lastVisit);

        var timeDifference = today - lastVisit;
        console.log("timeDifference in milliseconds:", timeDifference);

        var daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        console.log("daysSinceLastVisit:", daysSinceLastVisit);

        if (daysSinceLastVisit == 0 && timeDifference < (1000 * 60 * 60 * 24)) {
            welcomeMessage.innerText = "Back so soon! Awesome!";
            console.log("Displaying message: Back so soon! Awesome!");
        } else {
            var message = "You last visited " + daysSinceLastVisit + " day";
            message += (daysSinceLastVisit === 1) ? "." : "s ago.";
            welcomeMessage.innerText = message;
            console.log("Displaying message:", message);
        }

        localStorage.setItem("lastVisit", today);
        console.log("Updating lastVisit to today:", today);
    }
});