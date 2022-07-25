const addButton = document.querySelector(".add");
const initialBody = document.querySelector("div.body");
const mainContainer = document.querySelector("div.main-container")
let todoItemCount = 0;


addButton.addEventListener("click", function(){
    addTODO();
})

document.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        addTODO();
    }
})

function addTODO() {
    let TODOText = document.getElementById("todo_text");

    if (TODOText.value == "") {
        alert("Please Enter something");
        return;
    }

    todoItemCount++;
    

    initialBody.style.display = "none";

    let TODOItem = document.createElement("div");

    TODOItem.innerText = TODOText.value;
    TODOItem.setAttribute("class", "todo-item");
    TODOText.value = "";

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");

    let checkedButton = document.createElement("button");
    checkedButton.setAttribute("class", "checked-button");

    let deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", "./delete.png");
    deleteIcon.setAttribute("class", "delete-icon");
    TODOItem.append(deleteIcon);


    let checkedIcon = document.createElement("img");
    checkedIcon.setAttribute("src", "./checked.png");
    checkedIcon.setAttribute("class", "checked-icon");
    TODOItem.append(checkedIcon);


    mainContainer.append(TODOItem);
    TODOItem.append(deleteButton);
    TODOItem.append(checkedButton);

    TODOText.focus();

    deleteButton.addEventListener("click", function () {
        todoItemCount--;
        TODOItem.setAttribute("style", "display:none");
        TODOText.focus();
        if(todoItemCount==0){
            initialBody.setAttribute("style","visibility:visible");
           
        }
    })

    checkedButton.addEventListener("click", function () {
        TODOItem.setAttribute("style", "text-decoration:line-through");
        TODOText.focus();
    })

}

















