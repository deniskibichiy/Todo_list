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
        if(e.target.classList.contains("project")) {
        let targetProject = projects.find(item => item.id == e.target.dataset.id);
        renderProjectItems(targetProject);
        }
        if (e.target.classList.contains("delete-icon")) {
            let idOfTargetProject = e.target.dataset.id;
            let deleteTargetProject
            let targetProjectIndex = projects.findIndex
            (item => item.id === e.target.dataset.id);
            if (targetProjectIndex === 0 || targetProjectIndex === -1) {
                alert("Delete operation not allowed on default project")
                return;
            }
            else {
                deleteTargetProject = projects.find(item => item.id === idOfTargetProject);
                projects.splice(targetProjectIndex, 1);
                renderAllItems(items)
            }
            if (!deleteTargetProject) {
                console.log("returning after failing to find project")
                renderProjects(projects);
                return
            }
            else {
                const itemsToDelete = deleteTargetProject.todos;
                itemsToDelete.forEach(item => {
                let itemIndex = items.indexOf(item);
                items.splice(itemIndex,1);
                renderAllItems(items);
            });
            }
            renderProjects(projects);
        }
    })
})

const nav = document.querySelector("#nav");
nav.addEventListener("click", e => {
    if(e.target.classList.contains("home")) {
        renderProjectItems(home);
    }
})

document.addEventListener("DOMContentLoaded", ()=> {
    const allTasks = document.querySelector("#all-tasks");
    allTasks.addEventListener("click", ()=> {
        renderAllItems(items);
    })
})

document.addEventListener("DOMContentLoaded", ()=> {
    const container = document.querySelector("#container");
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("home")) {
            renderProjectItems(items);
        }
        if (e.target.classList.contains("delete")) {
             const idOfTargetItem = e.target.dataset.id;
            let indexToDelete = items.findIndex(item => item.id === idOfTargetItem);
            let activeProject = document.querySelector(".project-heading");
            let activeProjectId = activeProject.dataset.id;
            if (!activeProjectId) {
                const indexInItems = items.findIndex(item => {
                    item.id == idOfTargetItem;
                });
            if (indexInItems || indexInItems == 0) {
                items.splice(indexInItems, 1)
                renderAllItems(items)
            }
            }
            if ( activeProjectId) {
                let itemsProject = projects.find(item => item.id === activeProjectId);
                const indexInObject = itemsProject.todos.findIndex(item => item.id === idOfTargetItem);
                itemsProject.todos.splice(indexInObject,1);
                const indexInItems = items.findIndex(item => item.id == idOfTargetItem)
                if (indexInItems || indexInItems == 0) {
                    items.splice(indexInItems, 1)
            }
            console.log(items)
            renderProjectItems(itemsProject);
            }
        }
    })
})



