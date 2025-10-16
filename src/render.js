

function mainRender() {
    const container = document.querySelector("#container");
    const taskDiv = document.createElement("div");

    container.textContent = "Let the rendering begin"
}

function renderProjects(arr) {
    const container = document.querySelector(".all-projects");
    arr.forEach(item => {
        const listing = document.createElement("a");
        const btn = document.createElement("button");
        btn.textContent = `${item.name}`;
        listing.appendChild(btn);
        container.appendChild(listing);
    });
}

export {mainRender, renderProjects}