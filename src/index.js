import "./style.css"
import {createProject, projects} from "./projects";
import { createItem, items } from "./todoItems";
import{changePriority} from "./priority";
import { mainRender,hideClass, renderAllItems, renderProjects } from "./render";


const home = createProject("home", "Projects here related to home duties");
const shopping = createProject("shopping", "going for some shopping");
const school = createProject("school work", "Projects here related to school work");
const assignment = createItem("Linear Algebra", "Complete systems of linear equations in linear algebra", "2025-10-19", "High");
const cleanHouse = createItem("Clean", "Get my bedroom in order", "2025 - 10 -10", "High")
const grocerShopping = createItem ("Groceries", "purchase some groceries", "2025-12-34", "High")
document.querySelector("#projects").addEventListener("click", e => {

            renderProjects(projects)
})

mainRender()
renderAllItems(items)

