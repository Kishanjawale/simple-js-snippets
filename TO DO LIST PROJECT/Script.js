function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.innerText = taskInput.value;
    
    listItem.onclick = function() {
        this.parentNode.removeChild(this);
    };

    taskList.appendChild(listItem);
    taskInput.value = "";
}
