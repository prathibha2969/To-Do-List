function addTask() {
    const taskInput = document.getElementById("todo-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const activeCategory = document.querySelector(".category-section.active");
    if (!activeCategory) {
        alert("Please select a category first!");
        return;
    }
    
    const category = activeCategory.id.replace("-section", "");
    const listId = `${category}-list`;
    const taskList = document.getElementById(listId);

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
        updateTaskCount(category); 
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    updateTaskCount(category);
}
function updateTaskCount(category) {
    const taskCount = document.querySelectorAll(`#${category}-list li`).length;
    document.getElementById(`${category}-count`).textContent = taskCount;
}
function showCategory(category) {
    const sections = document.querySelectorAll(".category-section");
    const buttons = document.querySelectorAll(".category-btn");

    sections.forEach((section) => {
        section.classList.remove("active");
    });

    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    document.getElementById(`${category}-section`).classList.add("active");
    document.getElementById(`${category}-btn`).classList.add("active");
}
showCategory('personal');
