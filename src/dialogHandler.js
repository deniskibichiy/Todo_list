
let openDialog = document.querySelector(".dialog");
function handleDialog () {
    openDialog.showModal();
}

function cancelModal () {
    document.querySelector(".form").reset();
    openDialog.close();
}

let projectDialog = document.querySelector(".project-dialog");
function projectModal () {
    projectDialog.showModal();
}

function projectModalCancel () {
    document.querySelector(".project-form").reset();
    projectDialog.close();
}


export{handleDialog, cancelModal, projectModal, projectModalCancel}