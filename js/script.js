/***********************
 WELCOME POPUP
************************/
window.addEventListener("load", () => {
  document.getElementById("welcomePopup").classList.remove("hidden");
});

function closePopup() {
  document.getElementById("welcomePopup").classList.add("hidden");
}
/***********************
 TYPING EFFECT
************************/
const text = "📚 Study smart, manage time & achieve success with AI!";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();


/***********************
 SCROLL PROGRESS BAR
************************/
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percent = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = percent + "%";
});


/***********************
 COUNTER ANIMATION
************************/
/***********************
 COUNTER WITH SMOOTH ANIMATION + SCROLL TRIGGER
************************/

let counterStarted = false;

function animateCounter(id, target) {
  let el = document.getElementById(id);
  let count = 0;
  let duration = 2000; // total animation time
  let stepTime = 20;
  let steps = duration / stepTime;
  let increment = target / steps;

  let interval = setInterval(() => {
    count += increment;

    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    el.innerText = Math.floor(count);
  }, stepTime);
}

/***********************
 START ON SCROLL
************************/
function startCounters() {
  if (counterStarted) return;

  let section = document.getElementById("users");
  let position = section.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    counterStarted = true;

    animateCounter("users", 500);
    animateCounter("tasks", 1200);
    animateCounter("hours", 300);
  }
}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);


/***********************
 FAQ TOGGLE (SMOOTH)
************************/
function toggleFAQ(element) {
  let content = element.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}


/***********************
 SUBSCRIBE FUNCTION
************************/
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


/***********************
 SCROLL ANIMATION
************************/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card, .why-card, .faq-box").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});


/***********************
 BACK TO TOP BUTTON
************************/
let btn = document.createElement("button");
btn.innerHTML = "⬆";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.borderRadius = "50%";
btn.style.background = "#2563eb";
btn.style.color = "white";
btn.style.display = "none";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


/***********************
 DYNAMIC YEAR
************************/
let footerText = document.querySelector("footer .text-center");
let year = new Date().getFullYear();

if (footerText) {
  footerText.innerHTML = `© ${year} 📘 SmartStudy AI | Made with ❤️ for students`;
}
/***********************
 MOBILE MENU TOGGLE
************************/
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});