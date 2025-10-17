function handleDialog () {
    let openDialog = document.querySelector(".dialog");
    openDialog.showModal();
}

function cancelModal () {
    let openDialog = document.querySelector(".dialog");
    openDialog.close()
}



export{handleDialog, cancelModal}