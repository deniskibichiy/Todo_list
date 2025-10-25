import {projects} from "./projects";
import { items} from "./todoItems";
function localStorageHandler () {
    if(!localStorage.getItem("currentProjects")) {
        populateStorage();
    } else {
        storeItems();
}
}


function storeItems() {
    const currentProjects = JSON.parse(localStorage.getItem("projects"));
    const currentItems = JSON.parse(localStorage.getItem("items"));
    /*items.length = 0
    projects.length = 0
    items.push(...currentItems);
    projects.push(...currentProjects);
    console.log(items)
    console.log(projects) */
}



function populateStorage() {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("projects", JSON.stringify(projects));
    storeItems();
}

export {localStorageHandler, storeItems}