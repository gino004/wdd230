// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('banner');
    var closeBannerBtn = document.getElementById('closeBanner');

    // Mostrar el banner de manera lenta
    setTimeout(function() {
        banner.style.opacity = '1'; // Cambiar la opacidad a 1 para mostrar el banner
    }, 500); // Retraso de 500 milisegundos (0.5 segundo) para mostrar el banner después de un segundo

    // Cerrar el banner al hacer clic en el botón "Close"
    closeBannerBtn.addEventListener('click', function() {
        banner.style.opacity = '0'; // Cambiar la opacidad a 0 para ocultar el banner
        setTimeout(function() {
            banner.style.display = 'none'; // Ocultar el banner después de que termine la transición de opacidad
        }, 500); // Retraso de 500 milisegundos (0.5 segundo) para esperar que termine la transición
    });
});