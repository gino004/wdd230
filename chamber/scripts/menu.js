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