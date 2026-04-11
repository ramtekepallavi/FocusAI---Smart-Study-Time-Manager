// TASK SYSTEM
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    list.innerHTML += `
      <li>${task}
      <button onclick="deleteTask(${i})">❌</button>
      </li>
    `;
  });

  document.getElementById("taskCount").innerText = tasks.length;
}

function addTask() {
  let input = document.getElementById("taskInput");

  if(input.value === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  displayTasks();
}

function deleteTask(i) {
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}


// TIMER
let time = 1500;
let interval;

function startTimer() {
  if(interval) return;

  interval = setInterval(() => {
    time--;

    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    document.getElementById("studyTime").innerText =
      Math.floor((1500 - time)/60) + " min";

    if(time <= 0){
      clearInterval(interval);
      alert("Time's up ⏰");
    }

  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 1500;
  document.getElementById("timer").innerText = "25:00";
}


// PROGRESS
function updateProgress() {
  let progress = tasks.length * 10;
  document.getElementById("progressBar").style.width = progress + "%";
}

setInterval(updateProgress, 2000);


// INIT
displayTasks();