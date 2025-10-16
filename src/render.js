

function mainRender() {
    const container = document.querySelector("#container");
    const taskDiv = document.createElement("div");
}

function renderProjects(arr) {
    const container = document.querySelector(".all-projects");
    container.textContent = " ";
    arr.forEach(item => {
        const btn = document.createElement("button");
        btn.textContent = `${item.name}`;
        container.appendChild(btn);
    });
}

function renderAllItems (arr) {
    const container = document.querySelector("#container");
    arr.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("itemDiv")
        const itemHeading = document.createElement("h2");
        itemHeading.textContent = `${item.title}`;
        const description = document.createElement("p");
        description.textContent = `${item.description}`;
        const due = document.createElement("p");
        due.textContent = `Due: ${item.dueDate}`
        itemDiv.appendChild(itemHeading);
        itemDiv.appendChild(description);
        itemDiv.appendChild(due);
        container.appendChild(itemDiv);
    })
}


function hideClass () {
    const container = document.querySelector(".all-projects");
    container.classList.add("hidden")

}
export {mainRender, hideClass, renderProjects, renderAllItems}