function getLastVisitDate() {
    const lastVisitDateStr = localStorage.getItem('lastVisitDate');
    return lastVisitDateStr ? parseInt(lastVisitDateStr) : null;
}

function setLastVisitDate() {
    const currentDate = Date.now();
    localStorage.setItem('lastVisitDate', currentDate.toString());
}

function getDaysSinceLastVisit() {
    const lastVisitDate = getLastVisitDate();
    if (!lastVisitDate) {
        return null;
    }

    const currentDate = Date.now();
    const timeDiff = currentDate - lastVisitDate;
    const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysSinceLastVisit;
}

function displayMessage() {
    const daysSinceLastVisit = getDaysSinceLastVisit();
    const latestVisitContainer = document.querySelector("#latestVisit");

    if (daysSinceLastVisit === null) {
        latestVisitContainer.textContent = 'Welcome! Let us know if you have any questions.';
    } else if (daysSinceLastVisit < 1) {
        latestVisitContainer.textContent = 'Back so soon! Awesome!';
    } else {
        const daysText = daysSinceLastVisit === 1 ? 'day' : 'days';
        latestVisitContainer.textContent = `You last visited ${daysSinceLastVisit} ${daysText} ago.`;
    }

    setLastVisitDate();
}

document.addEventListener('DOMContentLoaded', displayMessage);