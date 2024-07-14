// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector(".negocios");

// gridbutton.addEventListener("click", () => {
//     display.classList.add("grid");
//     display.classList.remove("list");
// });

// listbutton.addEventListener("click", () => {
//     display.classList.add("list");
//     display.classList.remove("grid");
// });

const fullInfoButton = document.querySelector("#fullInfo");
const summaryButton = document.querySelector("#summary");
const mainContainer = document.querySelector(".negocios");

fullInfoButton.addEventListener("click", () => {
    document.querySelectorAll(".empresa img").forEach(img => img.style.display = "block");
});

summaryButton.addEventListener("click", () => {
    document.querySelectorAll(".empresa img").forEach(img => img.style.display = "none");
    mainContainer.classList.toggle("zebra");
});