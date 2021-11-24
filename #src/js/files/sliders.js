// var swiper = new Swiper(".mySwiper", {
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });
let sliderReport = new Swiper('.report__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: ".report .swiper-button-next",
		prevEl: ".report .swiper-button-prev",
	},
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetween: '2.7%',
		}
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
let sliderTestimonial = new Swiper('.testimonials__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: ".testimonials .swiper-button-next",
		prevEl: ".testimonials .swiper-button-prev",
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
let sliderTeam = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 32,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: ".about .swiper-button-next",
		prevEl: ".about .swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let sliderCertificate;
let sliderProductInit = false;

function sliderInit() {
	sliderCertificate = new Swiper('.certificate', {
		// observer: true,
		// observeParents: true,
		slidesPerView: 2,
		// spaceBetween: 32,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		// Arrows
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 11,
			},
			576: {
				slidesPerView: 4,
				spaceBetween: 11,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}

if (window.matchMedia("(max-width: 1279.98px)").matches) {
	sliderInit();
	sliderProductInit = true;
}

window.addEventListener('resize', function (e) {
	if (window.matchMedia("(max-width: 1280.98px)").matches && !sliderProductInit) {
		sliderInit();
		sliderProductInit = true;
	} else if (window.matchMedia("(min-width: 1279.98px)").matches && sliderProductInit) {
		sliderProductInit = false;
		for (let i = 0; i < sliderCertificate.length; i++) {
			sliderCertificate[i].destroy(true, true);
		}
	}
})