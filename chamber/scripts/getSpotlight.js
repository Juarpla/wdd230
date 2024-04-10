const information = "data/members.json";
const spotlights = document.querySelector(".memberSpotlight");

const getMembers = async () => {
    try {
        const response = await fetch(information);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
};

const displayMembers = (data) => {
    let membersList = data.companies.filter(member => member.membershipLevel === "silver" || member.membershipLevel === "golden");

    shuffleArray(membersList);

    for (let i = 0; i < Math.min(3, membersList.length); i++) {
        let member = membersList[i];
        let card = createMemberCard(member);
        spotlights.appendChild(card);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createMemberCard(member) {
    let card = document.createElement("article");
    card.classList.add("child");

    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("company");
    cardTitle.textContent = member.name;

    let slogan = document.createElement("div");
    slogan.classList.add("slogan");
    slogan.textContent = `"${member.description}"`;

    let address = document.createElement("p");
    address.id = "address";
    address.textContent = member.address;

    let telephone = document.createElement("p");
    telephone.id = "telephone";
    telephone.textContent = member.phoneNumber;

    let webPage = document.createElement("a");
    webPage.href = member.website;
    webPage.textContent = "Website";

    card.appendChild(cardTitle);
    card.appendChild(slogan);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(webPage);

    return card;
}

getMembers();