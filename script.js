// Function to add a task
function addTask() {
  const inputBox = document.getElementById("input_box");
  const taskList = document.getElementById("list-container");
  const task = inputBox.value.trim();

  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" class="task-checkbox">
      <span>${task}</span>
    </label>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input box
  inputBox.value = "";

  // Add functionality for "Edit" and "Delete" buttons
  const editBtn = li.querySelector(".edit-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  editBtn.addEventListener("click", function () {
    const newTask = prompt("Edit your task:", task);
    if (newTask) {
      li.querySelector("span").textContent = newTask;
    }
  });

  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  });

  // Optional: Add functionality for the checkbox
  const checkbox = li.querySelector(".task-checkbox");
  checkbox.addEventListener("change", updateCounters);

  // Update the counters
  updateCounters();
}

// Function to update task counters
function updateCounters() {
  const checkboxes = document.querySelectorAll(".task-checkbox");
  let completedCount = 0;
  let uncompletedCount = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      completedCount++;
    } else {
      uncompletedCount++;
    }
  });

  document.getElementById("completed-counter").textContent = completedCount;
  document.getElementById("uncompleted-counter").textContent = uncompletedCount;

  const totalStars = 200;

  for (let i = 0; i < totalStars; i++) {
    // Create a star element
    const star = document.createElement("div");

    // Randomly make some stars into clusters
    star.className = Math.random() > 0.9 ? "cluster" : "star";

    // Set random position for each star
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    // Add the star to the body
    document.body.appendChild(star);
  }
}
