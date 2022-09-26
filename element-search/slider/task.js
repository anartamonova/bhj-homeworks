const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slider = Array.from(document.querySelectorAll('.slider__item'));

arrowPrev.onclick = prev;
arrowNext.onclick = next;

function next() {
  let sliderActive = slider.findIndex(item => item.classList.contains('slider__item_active'));

  if (sliderActive < slider.length - 1) {
	slider[sliderActive].classList.remove('slider__item_active');
	sliderActive += 1;
	slider[sliderActive].classList.add('slider__item_active');
  }  else {
	  slider[sliderActive].classList.remove('slider__item_active');
	  sliderActive = 0;
	  slider[sliderActive].classList.add('slider__item_active');
	}
}

function prev() {
  let sliderActive = slider.findIndex(item => item.classList.contains('slider__item_active'));
  if (sliderActive > 0) {
	slider[sliderActive].classList.remove('slider__item_active');
	sliderActive -= 1;
	slider[sliderActive].classList.add('slider__item_active');
  }  else {
	  slider[sliderActive].classList.remove('slider__item_active');
	  sliderActive = slider.length - 1;
	  slider[sliderActive].classList.add('slider__item_active');
	}
}