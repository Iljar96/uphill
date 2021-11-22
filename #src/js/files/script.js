window.onload = function () {
	document.querySelectorAll('._hidden')
		.forEach(item => item.classList.remove('_hidden'));

	const navLine = document.querySelector('.documents__line'),
		navItem = document.querySelectorAll('.documents__navitem');

	if (navLine) {
		navLine.style.width = `${navItem[0].offsetWidth}px`;

		navItem.forEach(el => {
			el.addEventListener('mouseenter', (e) => {
				setTimeout(function () {
					navLine.style.width = `${e.target.offsetWidth}px`;
					navLine.style.left = `${e.target.offsetLeft}px`;
				}, 10);

			});

			el.addEventListener('mouseleave', () => {
				let navItemActive = document.querySelector('.documents__navitem._active');

				navLine.style.width = `${navItemActive.offsetWidth}px`;
				navLine.style.left = `${navItemActive.offsetLeft}px`;
			});
		});
	}
}
