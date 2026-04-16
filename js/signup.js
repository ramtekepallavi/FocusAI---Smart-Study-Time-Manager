/* SIGNUP FUNCTION */
function signup(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let terms = document.getElementById("terms").checked;

  if(name === "" || email === "" || password === "" || confirmPassword === ""){
    alert("⚠ Please fill all fields");
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

  alert("🎉 Signup Successful!");
  window.location.href = "./login.html";
}