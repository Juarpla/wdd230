const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const getChapterList = () => JSON.parse(localStorage.getItem("myBOMList"));

button.addEventListener("click", () => {
    if (input.value == "") {
        return input.focus();
    }

    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
});

let chaptersArray = getChapterList() || [];  

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

const displayList = (item) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;

    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
    });
}

const setChapterList = () => {
    localStorage.setItem("myBOMList", JSON.stringify(chaptersArray));
}

const deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
    