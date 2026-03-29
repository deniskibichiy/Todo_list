class Project {
    constructor (name, description) {
        this.name = name;
        this.description = description;
        this.todos = [];
        this.id = crypto.randomUUID();
    }
    
}

let projects = []

function createProject (name, description) {
    const newProject = new Project (name, description);
    projects.push(newProject);
    return newProject;

}

export {createProject, projects}
