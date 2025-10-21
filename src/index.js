import "./style.css"
import {createProject, projects} from "./projects";
import { createItem, items } from "./todoItems";
import{changePriority} from "./priority";
import { mainRender,toggle, renderAllItems, renderProjects, renderProjectItems } from "./render";
import { handleDialog, cancelModal, projectModal, projectModalCancel } from "./dialogHandler";


const home = createProject("home", "Projects here related to home duties");
const shopping = createProject("shopping", "going for some shopping");
const school = createProject("school work", "Projects here related to school work");
const assignment = createItem("Linear Algebra", "Complete systems of linear equations in linear algebra", "2025-10-19", "High", school);
const cleanHouse = createItem("Clean", "Get my bedroom in order", "2025 - 10 -10", "High", home)
const grocerShopping = createItem ("Groceries", "purchase some groceries", "2025-12-34", "High", shopping)


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

    const name = document.querySelector("#project-name").value.toLowerCase();
    const description = document.querySelector("#project-description").value;

    createProject(name, description);

    document.querySelector(".all-projects").textContent = ""; 
    renderProjects(projects);
    projectModalCancel();
})


const submitItemButton = document.querySelector(".submit");
submitItemButton.addEventListener("click", (e) => {
    e.preventDefault();
    const projectHeading = document.querySelector(".project-heading").textContent.toLowerCase();
    const currentProject =   projects.find(item => item.name === projectHeading) || projects.find(item => item.name === "home");
    const title = document.querySelector("#title").value.toLowerCase();
    const description = document.querySelector("#description").value;
   const date = document.getElementById("date").value;
   const dateEntered = new Date(date)
    const priority = document.querySelector("#priority").value;
    createItem(title, description, dateEntered, priority, currentProject);
    renderProjectItems(currentProject);
    cancelModal();
    
})



document.addEventListener("DOMContentLoaded", ()=> {
    const container = document.querySelector("#container")
    container.addEventListener("click", (e) => {
    if (e.target.classList.contains("new-task")) {
         handleDialog()
    }
})
})

document.addEventListener("DOMContentLoaded", ()=> {
    renderProjectItems(projects[0]);
});

renderProjects(projects);
document.addEventListener("DOMContentLoaded", ()=> {
    const allProjects = document.querySelector(".all-projects");
    allProjects.addEventListener("click", (e) => {
        let targetProject = projects.find(item => item.id == e.target.dataset.id);
        renderProjectItems(targetProject);
    })
})

document.addEventListener("DOMContentLoaded", ()=> {
    const allTasks = document.querySelector("#all-tasks");
    allTasks.addEventListener("click", ()=> {
        renderAllItems(items);
    })
})



