// script.js
const membersURL = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displayMembers(data) {
    const main = document.querySelector('.negocios'); // Seleccione el elemento con la clase 'negocios'
    data.forEach(empresa => {
        const empresaSection = document.createElement('section');
        empresaSection.classList.add('empresa');

        const empresaImage = document.createElement('img');
        empresaImage.src = empresa.image;
        empresaImage.alt = empresa.name;
        empresaSection.appendChild(empresaImage);

        const empresaName = document.createElement('h3');
        empresaName.textContent = empresa.name;
        empresaSection.appendChild(empresaName);

        const empresaAddress = document.createElement('p');
        empresaAddress.textContent = `Address: ${empresa.address}`;
        empresaSection.appendChild(empresaAddress);

        const empresaPhone = document.createElement('p');
        empresaPhone.textContent = `Phone: ${empresa.phone}`;
        empresaSection.appendChild(empresaPhone);

        const empresaWebsite = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = empresa.website;
        websiteLink.textContent = `${empresa.website}`;
        empresaWebsite.appendChild(websiteLink);
        empresaSection.appendChild(empresaWebsite);

        const empresaMembership = document.createElement('p');
        empresaMembership.textContent = `Membership: ${empresa.membership}`;
        empresaSection.appendChild(empresaMembership);

        main.appendChild(empresaSection);
    });
}
// displayMembers();

getMembers();