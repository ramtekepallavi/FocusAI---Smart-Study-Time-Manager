/***********************
 MOBILE MENU
************************/
document.getElementById("menuBtn").onclick = function () {
  document.getElementById("navMenu").classList.toggle("hidden");
};

/***********************
 COUNTER ANIMATION
************************/
function animate(id, target, suffix = "") {
  let count = 0;
  let el = document.getElementById(id);

  let interval = setInterval(() => {
    count += Math.ceil(target / 60);

    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    el.innerText = count + suffix;
  }, 30);
}

/***********************
 PROGRESS BARS
************************/
function progressBars() {
  setTimeout(() => {
    document.getElementById("mathBar").style.width = "75%";
    document.getElementById("codeBar").style.width = "85%";
    document.getElementById("sciBar").style.width = "65%";
  }, 300);
}

/***********************
 TASK SYSTEM
************************/
let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let value = input.value.trim();

  if (value === "") return;

  tasks.push(value);
  input.value = "";
  renderList(tasks, "taskList");
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderList(tasks, "taskList");
}

/***********************
 GOAL SYSTEM
************************/
let goals = [];

function addGoal() {
  let input = document.getElementById("goalInput");
  let value = input.value.trim();

  if (value === "") return;

  goals.push(value);
  input.value = "";
  renderList(goals, "goalList");
}

function deleteGoal(index) {
  goals.splice(index, 1);
  renderList(goals, "goalList");
}

/***********************
 RENDER FUNCTION
************************/
function renderList(arr, id) {
  let list = document.getElementById(id);
  list.innerHTML = "";

  arr.forEach((item, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${item}
      <button onclick="${
        id === "taskList" ? "deleteTask" : "deleteGoal"
      }(${index})">❌</button>
    `;

    li.classList.add("fade-in");
    list.appendChild(li);
  });
}

/***********************
 CHARTS
************************/
function loadCharts() {
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Study Hours",
        data: [2, 3, 4, 2, 5, 3, 6],
        fill: true,
        tension: 0.4
      }]
    }
  });

  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: ["Math", "Coding", "Science"],
      datasets: [{
        data: [30, 40, 30]
      }]
    }
  });
}
function subscribe() {
  let email = document.getElementById("email").value;

  if (email === "") {
    alert("❗ Please enter email");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("❗ Invalid email");
    return;
  }

  alert("🎉 Subscribed Successfully!");
  document.getElementById("email").value = "";
}

/* Dynamic Year */
let footerText = document.getElementById("footer .text-center");

if (footerText) {
  let year = new Date().getFullYear();
  footerText.innerHTML = `© ${year} 📘 SmartStudy AI | Made with ❤️ for students`;
}

/***********************
 INIT
************************/
window.onload = () => {
  animate("time", 12, " hrs");
  animate("taskCount", 25);
  animate("focus", 85, "%");
  animate("streak", 7, "🔥");

  progressBars();
  loadCharts();
};