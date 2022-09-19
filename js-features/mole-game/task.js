let count = 0;
let loose = 0;

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
  function getHole (index) {
    let holeClick = document.getElementById(`hole${index}`);
    return holeClick;
  }

  let hole = getHole(index);

  hole.onclick = function() {
	if (hole.classList.contains('hole_has-mole')) {
	  count += 1;
	  dead.textContent = count;
	} else {
		loose += 1;
		lost.textContent = loose;
	}

	if (loose >= 5) {
	  alert("Вы проиграли");
	  count = 0;
	  loose = 0;
	  dead.textContent = 0;
	  lost.textContent = 0;
	} else if (count >= 10) {
	  alert("Вы победили");
	  count = 0;
	  loose = 0;
	  dead.textContent = 0;
	  lost.textContent = 0;
	}
  }
}