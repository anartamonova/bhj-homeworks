const chat = document.querySelector(".chat-widget");
const widget = document.querySelector(".chat-widget__input");
const messages = document.getElementById("chat-widget__messages");
const answers = [
  "Что нужно",
  "Как дела?",
  "Мы очень заняты",
  "Может купите что-нибудь?",
  "Адьес, амигос, аривидерчес",
  "Все, прощайте!",
];

function returnAnswers() {
  for (let i = 0; i < answers.length; i++) {
    return answers[Math.floor(Math.random() * (answers.length - i))];
  }
}
widget.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && event.target.value !== "") {
    messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${new Date().toLocaleString()}</div>
    <div class="message__text">${event.target.value}!</div>
    </div>
    <div class="message">
    <div class="message__time">${new Date().toLocaleString()}</div>
    <div class="message__text">${returnAnswers()}</div>
    </div>`;
    event.target.value = "";
    messages.lastElementChild.scrollIntoView();
	} else if (event.key === "Enter" && event.target.value == "") {
		alert("Вы не написали сообщение!")
	}

});
chat.addEventListener("click", () => chat.classList.add("chat-widget_active"));