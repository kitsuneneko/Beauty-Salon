const newsList = document.getElementsByClassName("news-nav-item");

const removeSelectedClass = () => {
    const prevSelectedItem = document.querySelector("div.selected");
    if(prevSelectedItem){
        prevSelectedItem.classList.remove("selected");
    }
}

const changeBg = (e) => { 
    e.currentTarget.classList.add("selected");
}

const action = (e) => {
    removeSelectedClass();
    changeBg(e);
}

for(e of newsList) {
    e.addEventListener("click", action, false);
}