function sendMessage() {
  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chatBox");

  let userText = input.value;

  // User message
  chatBox.innerHTML += `<div class="text-right mb-2">
    <span class="bg-blue-500 text-white px-3 py-1 rounded">${userText}</span>
  </div>`;

  // AI Reply logic
  let reply = "";

  if (userText.includes("study")) {
    reply = "You should study 2 hours daily with breaks.";
  } 
  else if (userText.includes("time")) {
    reply = "Use Pomodoro: 25 min study + 5 min break.";
  }
  else if (userText.includes("exam")) {
    reply = "Focus on important topics and revise daily.";
  }
  else {
    reply = "I am your AI assistant 😊 Ask about study or time management.";
  }

  // AI message
  setTimeout(() => {
    chatBox.innerHTML += `<div class="text-left mb-2">
      <span class="bg-gray-300 px-3 py-1 rounded">${reply}</span>
    </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}