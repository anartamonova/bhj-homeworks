const allLinks = Array.from(document.querySelectorAll(".menu__link"));
const menu = allLinks.filter(item => item.nextElementSibling !== null);

for (const item of menu) {
	item.onclick = function() {
		item.nextElementSibling.classList.toggle('menu_active');	
		return false
	}
}
