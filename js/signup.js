function signup(){

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let terms = document.getElementById("terms").checked;

  if(name === "" || email === "" || password === "" || confirmPassword === ""){
    alert("⚠ Please fill all fields properly");
    return;
  }

  if(!email.includes("@") || !email.includes(".")){
    alert("❗ Enter valid email");
    return;
  }

  if(password.length < 4){
    alert("⚠ Password must be at least 4 characters");
    return;
  }

  if(password !== confirmPassword){
    alert("❌ Passwords do not match");
    return;
  }

  if(!terms){
    alert("⚠ Please accept Terms & Conditions");
    return;
  }

  alert("🎉 Account Created Successfully!");

  window.location.href = "./login.html";
}