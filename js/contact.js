function submitForm(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if(name==="" || email==="" || phone==="" || message===""){
    alert("⚠ Please fill all fields");
    return;
  }

  alert("✅ Message sent successfully!");

  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("phone").value="";
  document.getElementById("message").value="";
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