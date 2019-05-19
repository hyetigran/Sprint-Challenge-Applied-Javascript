// class Carousel {
// 	constructor(carousel) {
// 		this.carousel = carousel;
// 		this.leftBtn = this.carousel.querySelector('.left-button');
// 		this.rightBtn = this.carousel.querySelector('.right-button');

// 		this.leftBtn.addEventListener('click', () => this.move(false));
// 		this.rightBtn.addEventListener('click', () => this.move(true));

// 		this.images = this.carousel.querySelectorAll('img');
// 	}

// 	move(right) {
// 		const current = this.carousel.querySelector('.active');
// 		this.data = current.dataset.img;
// 		const num = right ? 1 : -1;
// 		const nextImg = this.carousel.querySelector(`.img[data-img="${Number(this.data) + num}"]`);
// 		if (nextImg) {
// 			if (right) {
// 				current.classList.replace('active', 'left');
// 			} else {
// 				current.classList.replace('active', 'right');
// 			}
// 			nextImg.classList.remove('left', 'right');
// 			nextImg.classList.add('active');
// 		}
// 	}
// }

// const carousel = document.querySelector('.carousel');
// new Carousel(carousel);

class Carousel {
	constructor(carouselElement) {
		this.carouselElement = carouselElement;
		this.leftButton = carouselElement.querySelector('.left-button');
		this.rightButton = carouselElement.querySelector('.right-button');
		this.images = carouselElement.querySelectorAll('img');
		this.currentIndex = 0;
		this.activate();
		this.rightButton.addEventListener('click', this.slideRight.bind(this));
		this.leftButton.addEventListener('click', this.slideLeft.bind(this));
		setInterval(this.slideRight.bind(this), 3000);
	}

	activate() {
		this.images[this.currentIndex].classList.add('active');
	}

	resetActive() {
		this.images.forEach(image => image.classList.remove('active'));
	}

	slideLeft() {
		this.resetActive();
		if (this.currentIndex === 0) {
			this.images[this.images.length - 1].classList.add('active');
			this.currentIndex = this.images.length - 1;
		} else {
			this.images[--this.currentIndex].classList.add('active');
		}
	}

	slideRight() {
		this.resetActive();
		if (this.currentIndex === this.images.length - 1) {
			this.images[0].classList.add('active');
			this.currentIndex = 0;
		} else {
			this.images[++this.currentIndex].classList.add('active');
		}
	}
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);
