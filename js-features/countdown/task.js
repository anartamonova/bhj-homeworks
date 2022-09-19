let count = document.getElementById("timer").textContent;

const timerMinus = function() {
  const timer = document.getElementById("timer");
  count -= 1;
  timer.textContent = count;
  if (count <=0) {
	alert("Вы победили в конкурсе!");
    clearInterval(timeId);
    timer.textContent = 59;
  }
}

const timeId = setInterval(timerMinus, 1000);