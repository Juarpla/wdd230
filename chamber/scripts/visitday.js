const msToDays = 84600000;
const theDateToday = new Date();

const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));

if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;