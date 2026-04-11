function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let user = {name, email, password: pass};

  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("msg").innerText = "Signup successful 👍";
}