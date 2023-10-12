let tasks = document.querySelector(".tasks");
let deleteBtn = document.createElement("input");

deleteBtn.type = "submit";
deleteBtn.className = "delete";
deleteBtn.value = "Delete";

let addBtn = document.querySelector(".add");
let taskValue = document.querySelector(".input");

addBtn.addEventListener("click", function () {
    if (!(taskValue.value === "" || taskValue.value.trim() === "")) {
        let tasksOutput = document.createElement("div");
        tasksOutput.className = "tasks-output";
        let clonedDeleteBtn = deleteBtn.cloneNode(true);
        
        tasksOutput.addEventListener("click", function () {
            toggleTaskStatus(tasksOutput);
        });

        tasksOutput.appendChild(clonedDeleteBtn);
        tasksOutput.appendChild(document.createTextNode(taskValue.value));
        tasks.appendChild(tasksOutput);
        taskValue.value = "";

        clonedDeleteBtn.addEventListener("click", function () {
            tasksOutput.remove();
            saveTasks();
        });

        saveTasks();
    }
});

function toggleTaskStatus(taskOutput) {
    if (taskOutput.classList.contains("done")) {
        taskOutput.classList.remove("done");
    } else {
        taskOutput.classList.add("done");
    }

    saveTasks();
}

function saveTasks() {
    let taskItems = [];
    let taskOutputs = document.querySelectorAll(".tasks-output");

    taskOutputs.forEach(function (output) {
        let taskItem = {
            text: output.textContent,
            done: output.classList.contains("done")
        };
        taskItems.push(taskItem);
    });

    localStorage.setItem("tasks", JSON.stringify(taskItems));
}

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        let taskItems = JSON.parse(storedTasks);

        taskItems.forEach(function (item) {
            let tasksOutput = document.createElement("div");
            tasksOutput.className = "tasks-output";
            let clonedDeleteBtn = deleteBtn.cloneNode(true);

            tasksOutput.addEventListener("click", function () {
                toggleTaskStatus(tasksOutput);
            });

            if (item.done) {
                tasksOutput.classList.add("done");
            }

            tasksOutput.appendChild(clonedDeleteBtn);
            tasksOutput.appendChild(document.createTextNode(item.text));
            tasks.appendChild(tasksOutput);

            clonedDeleteBtn.addEventListener("click", function () {
                tasksOutput.remove();
                saveTasks();
            });
        });
    }
}
