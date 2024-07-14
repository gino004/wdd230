// Variables con URLs
const baseURL = "https://gino004.github.io/wdd230/";
const linksURL = "https://gino004.github.io/wdd230/data/links.json";

// Función asíncrona para obtener los datos de links.json
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data); // Muestra los datos en la consola para verificar

        // Llama a la función para mostrar los enlaces en la página
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Función para mostrar los enlaces en la página HTML
function displayLinks(data) {
    const weeks = data.weeks;
    const weeksList = document.getElementById('weeksList');

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        const weekTitle = document.createElement('strong');
        weekTitle.textContent = week.week;
        weekItem.appendChild(weekTitle);

        const linksList = document.createElement('ul');

        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url; // Construye la URL completa usando baseURL
            anchor.textContent = link.title;
            anchor.target = '_blank'; // Para abrir en una nueva pestaña
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekItem.appendChild(linksList);
        weeksList.appendChild(weekItem);
    });
}

// Llama a la función para obtener y mostrar los enlaces
getLinks();