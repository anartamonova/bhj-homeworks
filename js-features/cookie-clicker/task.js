let element = document.getElementById("clicker__counter");
const image = document.getElementById("cookie")
let count = 0;

image.onclick = function() {
  if (count % 2) {
	  image.width = 200;
	  count += 1;
	  element.textContent = count;
  } else {
	  image.width = 250;
	  count += 1;
	  element.textContent = count;
	}
}