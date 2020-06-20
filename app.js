const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navLinks');
	const navLinks = document.querySelectorAll('.navLinks li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	navLinks.forEach((link, index) => {
		if(link.style.animation) {
			link.style.animation = '';
		} else{
			link.style.animation = `linkFade 0.5s ease forwards ${index / 4 + 0.3}s`;
		}
	});

		burger.classList.toggle('toggle');

	});
}

navSlide();
