const calcularFactorSensacionTermica = (temperaturaFahrenheit, velocidadVientoMPH) => {

    if (temperaturaFahrenheit <= 50 && velocidadVientoMPH > 3.0) {
        const Twc = 35.74 + 0.6215 * temperaturaFahrenheit - 35.75 * Math.pow(velocidadVientoMPH, 0.16) + 0.4275 * temperaturaFahrenheit * Math.pow(velocidadVientoMPH, 0.16);
        return Twc.toFixed(2) + " °F";
    } else {
        return "N/A";
    }
}


const temperaturaFahrenheit = parseFloat(document.getElementById('temperature').innerText);
const velocidadVientoMPH = parseFloat(document.getElementById('windspeed').innerText);


const factorSensacionTermica = calcularFactorSensacionTermica(temperaturaFahrenheit, velocidadVientoMPH);

document.getElementById('windchill').innerText = factorSensacionTermica;