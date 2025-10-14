class TodoItems {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function createItem (title, description, dueDate, priority) {
    return new TodoItems(title, description, dueDate, priority);
};

export default createItem;