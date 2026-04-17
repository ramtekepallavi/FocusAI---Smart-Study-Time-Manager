function enrollCourse(btn) {
  btn.innerText = "Enrolled ✅";
  btn.classList.remove("bg-yellow-400");
  btn.classList.add("bg-green-500", "text-white");
}

function deleteCourse(btn) {
  const card = btn.closest(".course-card");
  card.remove();
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