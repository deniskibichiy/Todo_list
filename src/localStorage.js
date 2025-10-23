
function localStorageHandler () {
    if(!localStorage.getItem("currentProjects")) {
        populateStorage();
    } else {
        setStyles();
}
}


function setStyles() {
    const currentProjects = localStorage.getItem("projects");
    const currentItems = localStorage.getItem("items");

    projects = currentProjects;
    items = currentItems;


}

function populateStorage() {
    localStorage.setItem("items", items);
    localStorage.setItem("projects", projects);
    setStyles();
}

export default localStorageHandler