
function changePriority (arr, title) {
    let newPriority = "Low";
    let selectedItemIndex =arr.findIndex(item => item.title === title);
    arr[selectedItemIndex].priority = newPriority;
    console.log(`${selectedItemIndex}`)
}

export{changePriority}
