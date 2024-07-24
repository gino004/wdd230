document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");

    // Verificar el día actual
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 para domingo, 1 para lunes, 2 para martes, etc.

    // Mostrar el banner solo los días lunes, martes y miércoles (días 1, 2 y 3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = "block";
    }
});