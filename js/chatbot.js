let chatBox;
let input;

window.onload = function () {
  chatBox = document.getElementById("chatBox");
  input = document.getElementById("input");
};

/* SEND MESSAGE */
function sendMessage(){

  let text = input.value.trim();
  if(text === "") return;

  // USER MESSAGE (RIGHT)
  let user = document.createElement("div");
  user.className = "user-msg";
  user.innerText = text;

  chatBox.appendChild(user);
  input.value = "";

  scrollDown();

  // BOT TYPING
  let bot = document.createElement("div");
  bot.className = "bot-msg";
  bot.innerText = "Typing... 🤖";

  chatBox.appendChild(bot);
  scrollDown();

  setTimeout(() => {

    bot.innerText = getReply(text.toLowerCase());
    scrollDown();

  }, 500);
}

/* ENTER KEY */
input.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    sendMessage();
  }
});

/* SCROLL */
function scrollDown(){
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* =========================
   30 WEB DEVELOPMENT Q/A
========================= */
function getReply(text){

  // greetings
  if(text.includes("hi") || text.includes("hello")){
    return "👋 Hello! Ask me Web Development questions.";
  }

  // HTML
  if(text.includes("html")) return "🌐 HTML is used to create web structure.";
  if(text.includes("tag")) return "🏷️ HTML tags define elements.";
  if(text.includes("div")) return "<div> is a container element.";
  if(text.includes("form")) return "📝 Forms collect user input.";
  if(text.includes("table")) return "📊 Tables display data in rows/columns.";

  // CSS
  if(text.includes("css")) return "🎨 CSS styles websites.";
  if(text.includes("flex")) return "📦 Flexbox is for layout alignment.";
  if(text.includes("grid")) return "🧩 CSS Grid creates 2D layouts.";
  if(text.includes("margin")) return "📏 Margin is outer space.";
  if(text.includes("padding")) return "📦 Padding is inner space.";
  if(text.includes("color")) return "🌈 CSS changes colors.";

  // JS
  if(text.includes("javascript")) return "⚡ JS makes websites interactive.";
  if(text.includes("function")) return "🔧 Function is reusable code block.";
  if(text.includes("array")) return "📚 Array stores multiple values.";
  if(text.includes("object")) return "📦 Object stores key-value data.";
  if(text.includes("loop")) return "🔁 Loops repeat tasks.";

  // frontend/backend
  if(text.includes("frontend")) return "🖥️ Frontend = UI part of website.";
  if(text.includes("backend")) return "⚙️ Backend handles server logic.";
  if(text.includes("full stack")) return "🔄 Full stack = frontend + backend.";

  // tech tools
  if(text.includes("api")) return "🔗 API connects applications.";
  if(text.includes("database")) return "📂 Database stores data.";
  if(text.includes("sql")) return "📊 SQL is database language.";
  if(text.includes("mongodb")) return "🍃 MongoDB is NoSQL database.";
  if(text.includes("git")) return "📦 Git is version control system.";
  if(text.includes("github")) return "🐙 GitHub hosts code.";

  // advanced
  if(text.includes("react")) return "⚛️ React is frontend library.";
  if(text.includes("node")) return "🟢 Node.js runs JS on server.";
  if(text.includes("cloud")) return "☁️ Cloud stores data online.";
  if(text.includes("security")) return "🔐 Cybersecurity protects systems.";

  return "🤖 Sorry, I only answer Web Development questions.";
}