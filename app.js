
const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: {
    invert: true,
		sensitivity: 0.8
  },
	parallax: true,
	parallax: {
		enabled: true
	},
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})
const sliderBg = new Swiper('.slider_bg', {
	centeredSlides: true,
	parallax: true,
	slidesPerView: 3.5,
	spaceBetween: 60
})

// sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider_item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('open')
	})
})

let des = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? des.classList.add('hidden') : des.classList.remove('hidden')
})


const swipeAllSliders = (index) => {
  sliderMain.slideTo(index);
  sliderBg.slideTo(index);
}

sliderMain.on('slideChange', () => swipeAllSliders(sliderMain.activeIndex));
sliderBg.on('slideChange', () => swipeAllSliders(sliderBg.activeIndex));
