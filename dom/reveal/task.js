function isVisible(e) {
  const {top, bottom} = e.getBoundingClientRect();
  if (bottom < 0) {
	return false
  }
  if (top > window.innerHeight) {
	return false
  }
  return true
}

document.addEventListener('scroll', () => {
  const reveal = document.querySelectorAll('.reveal');
  if (isVisible(reveal)) {
  reveal.classList.toggle('reveal_active');
  }
})