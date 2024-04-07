const baseURL = "https://juarpla.github.io/wdd230/";
const linksURL = "https://juarpla.github.io/wdd230/data/links.json";
const weeksList = document.querySelector("#weeks-list");

const getLinks = async () => {
    try {
        let response = await fetch(linksURL);
        if (!response.ok) {
            throw Error(await response.text());
        }
        let data = await response.json();
        // console.log(data);
        displayLinks(data);
        
    } catch (error) {
        console.log(error);
    }
}

const displayLinks = (data) => {
    data.weeks.forEach((week) => {
        const weekElement = document.createElement("ul");

        const weekTitleElement = document.createElement("li");
        weekTitleElement.textContent = `${week.week}: `;
        weekElement.appendChild(weekTitleElement);

        week.links.forEach((link) => {
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekTitleElement.appendChild(linkElement);

            if (link !== week.links[week.links.length - 1]) {
                const separatorElement = document.createElement("span");
                separatorElement.textContent = " | ";
                weekTitleElement.appendChild(separatorElement);
            }
        });

        weeksList.appendChild(weekElement);
    });
}

getLinks();