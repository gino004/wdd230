// const modeButton = document.querySelector("#mode");
// const main = document.querySelector("main");

// modeButton.addEventListener("click", () => {
//     if (modeButton.textContent.includes("🌑")) {
//         main.style.background = "#000";
//         main.style.color = "#fff";
//         modeButton.textContent = "☀️";
//     } else {
//         main.style.background = "#eee";
//         main.style.color = "#000";
//         modeButton.textContent = "🌑";
//     }
// });


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.classList.remove("transition-out");
        modeButton.classList.add("transition-in");
        setTimeout(() => {
            modeButton.textContent = "🌞";
            modeButton.classList.remove("transition-in");
        }, 250);
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.classList.remove("transition-out");
        modeButton.classList.add("transition-in");
        setTimeout(() => {
            modeButton.textContent = "🌑";
            modeButton.classList.remove("transition-in");
        }, 250);
    }
});