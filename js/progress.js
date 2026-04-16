// MOBILE MENU
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("navMenu").classList.toggle("hidden");
};

// CIRCLE ANIMATION
function setCircle(id, percent) {
  let el = document.getElementById(id);
  el.style.background = `conic-gradient(#3b82f6 ${percent}%, #ddd ${percent}%)`;
  el.innerText = percent + "%";
}

window.onload = () => {

  setCircle("mathCircle", 80);
  setCircle("codeCircle", 70);
  setCircle("scienceCircle", 60);

  document.getElementById("bar1").style.width = "80%";
  document.getElementById("bar2").style.width = "70%";
  document.getElementById("bar3").style.width = "60%";

};

// QUOTES
const quotes = [
  "Study today, succeed tomorrow.",
  "Consistency beats talent.",
  "Focus on your goals.",
  "Hard work pays off."
];

let i = 0;
setInterval(() => {
  i = (i + 1) % quotes.length;
  document.getElementById("quote").innerText = quotes[i];
}, 3000);
// ================= WEEKLY PROGRESS ANIMATION =================

function loadWeeklyProgress() {

  setTimeout(() => {
    document.getElementById("mon").style.width = "80%";
    document.getElementById("tue").style.width = "60%";
    document.getElementById("wed").style.width = "90%";
    document.getElementById("thu").style.width = "70%";
    document.getElementById("fri").style.width = "85%";
    document.getElementById("sat").style.width = "50%";
    document.getElementById("sun").style.width = "40%";
  }, 300);

}

// CALL FUNCTION
window.addEventListener("load", loadWeeklyProgress);
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