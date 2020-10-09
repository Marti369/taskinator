var buttonElement = document.querySelector("#save-task");
var taskToDoElement = document.querySelector("#task-to-do");


var createTaskHandler = function() {
    var listItemElement = document.createElement('li'); //this creates a variable to create new element
    listItemElement.className = "task-item"; //this assigns same class name for same style
    listItemElement.textContent = "This is a new task." //this adds text Content
    taskToDoElement.appendChild(listItemElement); //this appends child to show on page
}

buttonElement.addEventListener("click", createTaskHandler);






continue on 4.2 .1 Introduction