import {createProject, projects} from "./projects";
import { createItem, items } from "./todoItems";


const home = createProject("home", "Projects here related to home duties");
const school = createProject("school work", "Projects here related to school work");
const assignment = createItem("Math Homework", "Complete systems of linear equations in linear algebra", "2025-10-19", "High");
const cleanHouse = createItem("Clean room", "Get my bedroom in order", "2025 - 10 -10", "High")
projects[0]
//console.log(items)
//console.log(projects);
school.todos.push(assignment)
home.todos.push(cleanHouse)

console.log(school.todos)
console.log(home.todos)
console.log(items)
//console.log(school === projects[1])




