var formEl = document.querySelector("#task-form");
var taskToDoElement = document.querySelector("#task-to-do");


var createTaskHandler = function() {

    event.preventDefault();
    var listItemElement = document.createElement('li'); //this creates a variable to create new element
    listItemElement.className = "task-item"; //this assigns same class name for same style
    listItemElement.textContent = "This is a new task." //this adds text Content
    taskToDoElement.appendChild(listItemElement); //this appends child to show on page

}

formEl.addEventListener("submit", createTaskHandler);