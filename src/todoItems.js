import { projects } from "./projects";
class TodoItem {
    constructor (title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }
    toggleFinishStatus () {
        if (this.isDone == false) {
            this.isDone = true;
        }
        else {
            this.isDone = false;
        }
    }
}
const items = []

function createItem (title, description, dueDate, priority, project) {
    let newItem = new TodoItem(title, description, dueDate, priority);
    items.push(newItem);
    project.todos.push(newItem);
    return newItem;
};

export {createItem, items};