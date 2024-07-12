document.addEventListener("DOMContentLoaded", function() {
    fetch('new-ward-members.json')
        .then(response => response.json())
        .then(familyData => {
            const familyInfoDiv = document.getElementById('family-info');

            const familyName = document.createElement('h2');
            familyName.textContent = `Family Name: ${familyData.NameFamily}`;
            familyInfoDiv.appendChild(familyName);

            const movedDate = document.createElement('p');
            const formattedMovedDate = formatDateString(familyData.Movedtotheneighborhood);
            movedDate.textContent = `Moved to the neighborhood on: ${formattedMovedDate}`;
            familyInfoDiv.appendChild(movedDate);

            const numberPeople = document.createElement('p');
            numberPeople.textContent = `Number of People: ${familyData.NumberPeople}`;
            familyInfoDiv.appendChild(numberPeople);

            const visited = document.createElement('p');
            visited.textContent = `Visited by Bishopric: ${familyData.Visitedbybishopric}`;
            familyInfoDiv.appendChild(visited);

            const membersTitle = document.createElement('h3');
            membersTitle.textContent = 'Family Members:';
            familyInfoDiv.appendChild(membersTitle);

            const membersList = document.createElement('ul');
            familyData["family members"].forEach(member => {
                const listItem = document.createElement('li');
                const formattedBirthdate = formatDateString(member.birthdate);
                listItem.textContent = `Name: ${member.name}, Gender: ${member.gender}, Birthdate: ${formattedBirthdate}`;
                membersList.appendChild(listItem);
            });
            familyInfoDiv.appendChild(membersList);
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

function formatDateString(dateString) {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}-${month}-${day}`;
}