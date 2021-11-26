window.onload = function () {
	document.querySelectorAll('._hidden')
		.forEach(item => item.classList.remove('_hidden'));

	//Tabs line
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

	const formItems = document.querySelectorAll('.proposal-content__nav');
	const phoneText = 'Введите номер телефона';
	const emailText = 'Введите email';

	formItems.forEach(el => {
		el.addEventListener('click', (e) => {
			if (e.target.closest('.proposal-content__nav li')) {
				const input = e.target.closest('.proposal-content').querySelector('input[data-val]');

				e.target.closest('ul').querySelectorAll('li').forEach(el => el.classList.remove('_active'));
				e.target.classList.add('_active');

				input.classList.remove('_phone', '_email');

				if (e.target.getAttribute('data-type') === 'email') {
					input.classList.add('_email');

					input.setAttribute('placeholder', emailText);
					input.setAttribute('data-error', e.target.getAttribute('data-msg'));
				} else {
					input.classList.add('_phone');

					input.setAttribute('placeholder', phoneText);
					input.setAttribute('data-error', e.target.getAttribute('data-msg'));
				}
			}
		});
	})

	let center = [55.746294, 37.659030];
	let markerWidth = 79;
	let markerHeight = 100;
	if (window.matchMedia("(max-width: 1440.98px)").matches) {
		markerWidth = 40;
		markerHeight = 51;
	}

	function init() {
		let map = new ymaps.Map('map', {
			center: center,
			zoom: 17
		});

		let placemark = new ymaps.Placemark(center, {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/location.png',
			iconImageSize: [markerWidth, markerHeight],
			// iconImageOffset: [-19, -55]
		});

		map.controls.remove('geolocationControl'); // удаляем геолокацию
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
		// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

		map.geoObjects.add(placemark);
	}

	// ymaps.ready(init);
}

const moreBtns = document.querySelectorAll('.documents__more');
moreBtns.forEach(el => el.addEventListener('click', () => {
	setTimeout(function () {
		el.remove();
	}, 10);
}));
