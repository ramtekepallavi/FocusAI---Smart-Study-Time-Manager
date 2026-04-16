let captcha = "";

/* GENERATE CAPTCHA */
function generateCaptcha(){
  let chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  captcha = "";

  for(let i=0;i<5;i++){
    captcha += chars[Math.floor(Math.random()*chars.length)];
  }

  document.getElementById("captchaText").innerText = captcha;
}

/* TOGGLE PASSWORD */
function togglePass(){
  let pass = document.getElementById("password");

  if(pass.type === "password"){
    pass.type = "text";
  }else{
    pass.type = "password";
  }
}

/* LOGIN FUNCTION */
function login(){

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userCaptcha = document.getElementById("captchaInput").value;

  if(email === "" || password === "" || userCaptcha === ""){
    alert("⚠ Please fill all fields");
    return;
  }

  if(userCaptcha !== captcha){
    alert("❌ Invalid Captcha");
    generateCaptcha();
    return;
  }

  if(password.length < 4){
    alert("⚠ Password too short");
    return;
  }

  alert("✅ Login Successful 🚀");
  window.location.href = "./../index.html";
}

/* INIT */
window.onload = function(){
  generateCaptcha();
};