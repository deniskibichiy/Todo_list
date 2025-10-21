
import deleteImage from "./delete.png"
function mainRender() {
    const container = document.querySelector("#container");
    const taskDiv = document.createElement("div");
}


function renderProjects(arr) {
    const container = document.querySelector(".all-projects");
    container.innerHTML = "";
    arr.forEach(item => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-div")
        const itemDiv = document.createElement("div");
        const deleteDiv = document.createElement("div");
        const btn = document.createElement("button");
        btn.dataset.id = item.id;
        const deleteIcon = document.createElement("img");
        deleteIcon.classList.add("delete-icon")
        deleteIcon.src = deleteImage;
        deleteDiv.appendChild(deleteIcon);
        btn.textContent = `${item.name}`;
        itemDiv.appendChild(btn);
        projectDiv.appendChild(itemDiv);
        projectDiv.appendChild(deleteDiv);
        container.appendChild(projectDiv)
    });
}

function renderAllItems (arr) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    const heading = document.createElement("h2")
    heading.classList.add("project-heading");
    heading.textContent = "All Tasks";
    const newTask = document.createElement("button");
    newTask.textContent = "New Task";
    newTask.classList.add("new-task");
    container.appendChild(heading);
    container.appendChild(newTask)
    arr.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("itemDiv")
        const itemHeading = document.createElement("h2");
        itemHeading.textContent = `${item.title}`;
        const description = document.createElement("p");
        description.textContent = `${item.description}`;
        const due = document.createElement("p");
        due.textContent = `Due: ${item.dueDate}`
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.dataset.id = `${item.id}`
        deleteButton.textContent = "Delete Item";
        itemDiv.appendChild(itemHeading);
        itemDiv.appendChild(description);
        itemDiv.appendChild(due);
        itemDiv.appendChild(deleteButton);
        container.appendChild(itemDiv);
        
    })
}


function toggle (el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    }
    else {
        el.classList.add(className);
    }

}

function renderProjectItems (obj) {
        let arrayToRender = obj.todos;
        const container = document.querySelector("#container");
        container.innerHTML="";
        const heading = document.createElement("h2")
        heading.classList.add("project-heading");
        heading.textContent = `${obj.name}`
        const newTask = document.createElement("button");
        newTask.textContent = "New Task";
        newTask.classList.add("new-task");
        container.appendChild(heading)
        container.appendChild(newTask);
        arrayToRender.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("itemDiv")
        const itemHeading = document.createElement("h2");
        itemHeading.textContent = `${item.title}`;
        const description = document.createElement("p");
        description.textContent = `${item.description}`;
        const due = document.createElement("p");
        due.textContent = `Due: ${item.dueDate}`
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.dataset.id = `${item.id}`
        deleteButton.textContent = "Delete Item";
        itemDiv.appendChild(itemHeading);
        itemDiv.appendChild(description);
        itemDiv.appendChild(due);
        itemDiv.appendChild(deleteButton);
        container.appendChild(itemDiv);
    })
}
export {mainRender, toggle, renderProjects, renderAllItems, renderProjectItems}