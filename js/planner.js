document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");

  const totalTasksEl = document.getElementById("totalTasks");
  const completedTasksEl = document.getElementById("completedTasks");
  const pendingTasksEl = document.getElementById("pendingTasks");

  const taskCount = document.getElementById("taskCount");
  const emptyState = document.getElementById("emptyState");

  let tasks = [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("taskTitle").value.trim();
    const date = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;
    const desc = document.getElementById("taskDesc").value.trim();

    if (!title || !date || priority === "Priority") {
      alert("Please fill all fields");
      return;
    }

    const task = {
      id: Date.now(),
      title,
      date,
      priority,
      desc,
      completed: false
    };

    tasks.push(task);
    renderTasks(tasks);
    form.reset();
  });
  function renderTasks(taskArray) {
    taskList.innerHTML = "";

    if (taskArray.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }

    taskArray.forEach(task => {
      const card = document.createElement("div");
      card.className = "bg-white p-5 shadow-lg rounded-lg";

      card.innerHTML = `
        <h4 class="text-xl font-bold">📘 ${task.title}</h4>
        <p class="text-gray-500">Deadline: ${task.date}</p>
        <p class="mt-2">${task.desc}</p>

        <div class="mt-4 flex justify-between items-center">
          <span class="${getPriorityColor(task.priority)} text-white px-2 py-1 rounded text-sm">
            ${task.priority}
          </span>

          <div class="flex gap-2">
            <button class="bg-green-500 text-white px-2 py-1 rounded text-sm complete-btn">
              ✓
            </button>

            <button class="bg-red-500 text-white px-2 py-1 rounded text-sm delete-btn">
              ✕
            </button>
          </div>
        </div>
      `;
      card.querySelector(".complete-btn").addEventListener("click", function () {
        task.completed = !task.completed;
        renderTasks(tasks);
      });

      card.querySelector(".delete-btn").addEventListener("click", function () {
        tasks = tasks.filter(t => t.id !== task.id);
        renderTasks(tasks);
      });

      if (task.completed) {
        card.classList.add("opacity-50", "line-through");
      }

      taskList.appendChild(card);
    });

    updateUI();
  }

  function getPriorityColor(priority) {
    if (priority === "High") return "bg-red-500";
    if (priority === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  }

  searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();

    const filtered = tasks.filter(task =>
      task.title.toLowerCase().includes(value) ||
      task.desc.toLowerCase().includes(value)
    );

    renderTasks(filtered);
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const filter = btn.getAttribute("data-filter");

      if (filter === "all") {
        renderTasks(tasks);
      } else {
        const filtered = tasks.filter(t => t.priority === filter);
        renderTasks(filtered);
      }
    });
  });

  window.clearAllTasks = function () {
    tasks = [];
    renderTasks(tasks);
  };

  function updateUI() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    progressText.innerText = `${completed} / ${total} Tasks Completed`;
    progressBar.style.width = total === 0 ? "0%" : (completed / total) * 100 + "%";

    totalTasksEl.innerText = total;
    completedTasksEl.innerText = completed;
    pendingTasksEl.innerText = pending;

    if (taskCount) taskCount.innerText = total;
  }

});