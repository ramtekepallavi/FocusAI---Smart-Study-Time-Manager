function sendMessage() {
  let name = document.getElementById("name").value;
  let response = document.getElementById("response");

  if(name === ""){
    response.innerText = "Please enter your name";
    return;
  }

  response.innerText = "Message sent successfully 👍";
}