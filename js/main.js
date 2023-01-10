$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		responsive : {
			// breakpoint from 0 up
			0 : {
					items: 2,
					margin: 32,
					loop: true,
					dots: false,
			},
			// breakpoint from 480 up
			601 : {
					items: 2,
					margin: 32,
					loop: true,
					dots: false,
			},
			// breakpoint from 768 up
			1001 : {
					items: 3,
					margin: 48,
					loop: true,
					dots: false,
			}
	}
	});
});

// Video

const videoBtn = document.querySelector('#video-btn');
const videoPreview = document.querySelector('.video-preview');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', () => {
	if (video.paused) {
		videoPreview.classList.add('hidden');
		videoWrapper.classList.remove('video-overlay')
		videoBtn.classList.add('none');
		video.play();
	} else {
		videoWrapper.classList.add('video-overlay')
		videoBtn.classList.remove('none');
		video.pause();
	}
})

// Mobile nav
const openNavBtn = document.querySelector('#openMobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavBtn.onclick = () => {
	mobileNav.classList.remove('none');
	document.body.classList.add('no-scroll');
}

closeNavBtn.onclick = () => {
	mobileNav.classList.add('none');
	document.body.classList.remove('no-scroll');
}