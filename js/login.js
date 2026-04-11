function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if(storedUser && email === storedUser.email && pass === storedUser.password){
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}