import {createProject, projects} from "./projects";
import { createItem, items } from "./todoItems";
import{changePriority} from "./priority"


const home = createProject("home", "Projects here related to home duties");
const school = createProject("school work", "Projects here related to school work");
const assignment = createItem("Math Homework", "Complete systems of linear equations in linear algebra", "2025-10-19", "High");
const cleanHouse = createItem("Clean room", "Get my bedroom in order", "2025 - 10 -10", "High")
projects[0]
//console.log(items)
//console.log(projects);
//school.todos.push(assignment)
home.todos.push(cleanHouse)

//console.log(school.todos)
//console.log(home.todos)
console.log(items)
//console.log(school === projects[1])

let bookTest = projects.find(item => item.name == "school work")
let homeTest = projects.findIndex(item => item.name == "home");
cleanHouse.toggleFinishStatus
//homeTest.todos.push(cleanHouse)
changePriority(items, "Clean room");
bookTest.todos.push(assignment)
//console.log(school.todos)
//console.log(projects[1])
//console.log(school.todos)
//console.log(homeTest)
home.todos[homeTest].toggleFinishStatus
//console.log(home.todos[homeTest])




