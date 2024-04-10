const information = "data/members.json";
const cards = document.querySelector(".grid");

const getMembers = async () => {
    try {
        const response = await fetch(information);
        const data = await response.json();
        //console.table(data);
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
};

const displayMembers = (data) => {
    let membersList = data.companies;
    membersList.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("card", "id");

        let cardTitle = document.createElement("h2");
        cardTitle.classList.add("cardTitle");
        cardTitle.textContent = member.name;

        let child = document.createElement("div");
        child.classList.add("child");

        let portrait = document.createElement("img");
        portrait.src = member.image;
        portrait.alt = `Portrait of ${member.name} at ${member.address}`;
        portrait.loading = "lazy";
        portrait.width = "340";
        portrait.height = "360";

        let address = document.createElement("p");
        address.id = "address";
        address.textContent = member.address;

        let telephone = document.createElement("p");
        telephone.id = "telephone";
        telephone.textContent = member.phoneNumber;

        let webPage = document.createElement("a");
        webPage.href = member.website;
        webPage.textContent = "Website";

        child.appendChild(portrait);
        child.appendChild(address);
        child.appendChild(telephone);
        child.appendChild(webPage);

        card.appendChild(cardTitle);
        card.appendChild(child);

        cards.appendChild(card);
    });
}

getMembers();