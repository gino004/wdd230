/*en esta parte son para definir los dias de la semana*/
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
/*aqui es para definir los meses*/
let monthsnames = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

/*lo de abajo son para definir los horarios en javascript*/
let d = new Date();
let Dayname = daynames[d.getDay()];
let Monthname = monthsnames[d.getMonth()];
let fulldate = Dayname + ", " + Monthname + ", " + d.getDate() + ", " +
    d.getFullYear();
document.getElementById("current").textContent = fulldate;