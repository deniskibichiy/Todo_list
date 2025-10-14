import { projects } from "./projects";
class TodoItems {
    constructor (title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
const items = []

function createItem (title, description, dueDate, priority) {
    let newItem = new TodoItems(title, description, dueDate, priority);
    items.push(newItem);
    return newItem;
};

export {createItem, items};