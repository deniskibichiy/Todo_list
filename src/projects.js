
class Project {
    constructor (name) {
        this.name = name;
    };
}

let projects = []

function createNewProject (name) {
    let newProject = new Project (name);
     projects.push(newProject); 
}

export {createNewProject, projects}
