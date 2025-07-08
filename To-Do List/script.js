// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const incompleteList = document.getElementById("incompleteList");
const completedList = document.getElementById("completedList");

// Add new task
addBtn.addEventListener("click", addTask);

// Clear all tasks
clearBtn.addEventListener("click", clearAll);

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  // Toggle between lists on click
  li.addEventListener("click", () => {
    if (li.parentNode === incompleteList) {
      incompleteList.removeChild(li);
      completedList.appendChild(li);
    } else {
      completedList.removeChild(li);
      incompleteList.appendChild(li);
    }
  });

  li.appendChild(deleteBtn);
  incompleteList.appendChild(li);
  taskInput.value = "";
}

// Clear All Function
function clearAll() {
  incompleteList.innerHTML = "";
  completedList.innerHTML = "";
}
