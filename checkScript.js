const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Attach the "Add Task" event listener
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        attachEditHandler(taskItem);
        attachDeleteHandler(taskItem);
    }
});

// Attach the "Edit" button event listener
function attachEditHandler(taskItem) {
    const editButton = taskItem.querySelector(".edit");
    const taskTextElement = taskItem.querySelector(".task-text");
    const originalText = taskTextElement.textContent;
    
    editButton.addEventListener("click", () => {
        const newText = prompt("Edit task:", originalText);
        if (newText !== null && newText.trim() !== "") {
            taskTextElement.textContent = newText;
        }
    });
}

// Attach the "Delete" button event listener
function attachDeleteHandler(taskItem) {
    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
}

// ... (other code)
