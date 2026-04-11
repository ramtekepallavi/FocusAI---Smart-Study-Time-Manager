// ================= COUNTER ANIMATION =================
let user = 0, task = 0, hour = 0;

let counter = setInterval(() => {
  if(user < 500) user += 10;
  if(task < 1200) task += 20;
  if(hour < 800) hour += 15;

  document.getElementById("users").innerText = user + "+";
  document.getElementById("tasks").innerText = task + "+";
  document.getElementById("hours").innerText = hour + "+";

  if(user >= 500 && task >= 1200 && hour >= 800){
    clearInterval(counter);
  }
}, 50);


// ================= TYPING EFFECT =================
let text = "Plan smarter. Study better. Achieve more.";
let index = 0;

function typingEffect() {
  if(index < text.length){
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 50);
  }
}
typingEffect();


// ================= DARK MODE =================
let darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = () => {
  document.body.classList.toggle("bg-black");
  document.body.classList.toggle("text-white");

  localStorage.setItem("theme", document.body.classList.contains("bg-black") ? "dark" : "light");
};

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("bg-black", "text-white");
}


// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "#1e40af";
  } else {
    header.style.background = "rgba(37, 99, 235, 0.9)";
  }
});


// ================= SCROLL PROGRESS BAR =================
window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
};


// ================= BUTTON CLICK EFFECT =================
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});


// ================= WELCOME MESSAGE =================
window.onload = () => {
  setTimeout(() => {
    alert("Welcome to SmartStudy AI 🚀");
  }, 1000);
};