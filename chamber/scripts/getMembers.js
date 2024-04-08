const information = "chamber/data/members.json";
const cards = document.querySelector('#cards');

const getMembers = () => {
    const response = fetch(url);
    const data = response.json();
    //console.table(data.prophets);
    displayMembers(data.prophets);
}

const displayMembers = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dateBirth = document.createElement("p");
        let placeBirth = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', `${prophet.imageurl}`);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getMembers();