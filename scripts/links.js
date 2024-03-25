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

// function displayLinks(data) {
//     const main = document.querySelector('main');
//     data.lessons.forEach(lesson => {
//         const weekName = `Week ${lesson.lesson}`;
//         const linksList = document.createElement('ul');
//         lesson.links.forEach(link => {
//             const listItem = document.createElement('li');
//             const anchor = document.createElement('a');
//             anchor.href = `${baseURL}${link.url}`;
//             anchor.textContent = link.title;
//             listItem.appendChild(anchor);
//             linksList.appendChild(listItem);
//         });
//         const weekHeader = document.createElement('h3');
//         weekHeader.textContent = weekName;
//         main.appendChild(weekHeader);
//         main.appendChild(linksList);
//     });
// }

function displayLinks(data) {
    const main = document.querySelector('main');
    const card01 = main.querySelector('.card01');

    // Elimina solo los enlaces dentro de card01
    card01.innerHTML = '';

    data.lessons.forEach(lesson => {
        const weekName = `Week ${lesson.lesson}`;
        const linksList = document.createElement('ul');
        lesson.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
        const weekHeader = document.createElement('h3');
        weekHeader.textContent = weekName;
        card01.appendChild(weekHeader);
        card01.appendChild(linksList);
    });
}

getLinks();