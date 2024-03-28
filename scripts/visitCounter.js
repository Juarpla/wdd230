const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = `Visit Count: ${numVisits}`;
} else {
    visitsDisplay.textContent = `This is your first visit. 🎉 Welcome!`;
}

numVisits += 1;

localStorage.setItem("numVisits-ls", numVisits);
