const baseURL = "https://gino004.github.io/wdd230/";
const linksURL = "https://gino004.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(data) {
    const main = document.querySelector('main');
    const card01 = main.querySelector('.card01');

    // Elimina solo los enlaces dentro de card01
    card01.innerHTML = '';

    const linksList = document.createElement('ul');
    data.lessons.forEach(lesson => {
        lesson.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
    });

    // Agrega el título "Learning Activities"
    const activitiesTitle = document.createElement('h3');
    activitiesTitle.textContent = "Learning Activities";
    card01.appendChild(activitiesTitle);

    // Agrega los enlaces dentro de card01
    card01.appendChild(linksList);
}


getLinks();