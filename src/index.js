import "./style.css"
import {createProject, projects} from "./projects";
import { createItem, items } from "./todoItems";
import{changePriority} from "./priority";
import { mainRender,toggle, renderAllItems, renderProjects, renderProjectItems } from "./render";
import { handleDialog, cancelModal, projectModal, projectModalCancel } from "./dialogHandler";


const home = createProject("home", "Projects here related to home duties");
const shopping = createProject("shopping", "going for some shopping");
const school = createProject("school work", "Projects here related to school work");
const assignment = createItem("Linear Algebra", "Complete systems of linear equations in linear algebra", "2025-10-19", "High");
const cleanHouse = createItem("Clean", "Get my bedroom in order", "2025 - 10 -10", "High")
const grocerShopping = createItem ("Groceries", "purchase some groceries", "2025-12-34", "High")


document.querySelector("#projects").addEventListener("click", () => {
    const div = document.querySelector(".all-projects")
    toggle(div, "hidden");
})

document.querySelector(".cancel").addEventListener("click", () => {
    cancelModal();
})


const newProject = document.querySelector("#new-project");
newProject.addEventListener("click", () => {
    projectModal();
})

const cancelProject = document.querySelector(".cancel-project")
cancelProject.addEventListener("click", ()=> {
    document.querySelector(".project-form").reset();
    projectModalCancel();
})

const submitProject = document.querySelector(".submit-project");
submitProject.addEventListener("click", (e)=> {
    e.preventDefault();

    const name = document.querySelector("#project-name").value;
    const description = document.querySelector("#project-description").value;

    createProject(name, description);

    document.querySelector(".all-projects").textContent = ""; 
    renderProjects(projects);
    projectModalCancel();
})


const submitItemButton = document.querySelector(".submit");
submitItemButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
   const date = document.getElementById("date").value;
   const dateEntered = new Date(date)
    const priority = document.querySelector("#priority").value;
    createItem(title, description, dateEntered, priority);
    document.querySelector("#container").textContent = " "
    renderAllItems(items);
    cancelModal();
    
})


const btn = document.querySelector(".new-task");
btn.addEventListener("click", () => {
    handleDialog()
});

document.addEventListener("DOMContentLoaded", ()=> {
    renderProjectItems(projects[1])
})
renderProjects(projects);
//renderAllItems(items)
//console.log(typeof(projects[0].todos))
home.todos.push(cleanHouse)
home.todos.push(grocerShopping)
let arrayToRender1 = home.todos;
console.log(arrayToRender1)

//console.log(projects[0].todos)
//console.log(projects[0].todos[0])