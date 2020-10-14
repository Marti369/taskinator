var formEl = document.querySelector("#task-form");
var taskToDoElement = document.querySelector("#task-to-do");



var createTaskHandler = function() {

    event.preventDefault(); //this prevents default of page refresh
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    taskToDoElement.appendChild(listItemEl);


    var listItemElement = document.createElement('li'); //this creates a variable to create new element
    listItemElement.className = "task-item"; //this assigns same class name for same style
    listItemElement.textContent = "This is a new task." //this adds text Content
    taskToDoElement.appendChild(listItemElement); //this appends child to show on page
    listItemElement.textContent = taskNameInput;

}

formEl.addEventListener("submit", createTaskHandler);