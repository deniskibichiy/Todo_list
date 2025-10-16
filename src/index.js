import "./style.css"
import {createProject, projects} from "./projects";
import { createItem, items } from "./todoItems";
import{changePriority} from "./priority";
import { mainRender, renderProjects } from "./render";


const home = createProject("home", "Projects here related to home duties");
const school = createProject("school work", "Projects here related to school work");
const assignment = createItem("Linear Algebra", "Complete systems of linear equations in linear algebra", "2025-10-19", "High");
const cleanHouse = createItem("Clean", "Get my bedroom in order", "2025 - 10 -10", "High")
const grocerShopping = createItem ("groceries", "purchase some groceries", "2025-12-34", "High")
renderProjects(projects);
mainRender()



