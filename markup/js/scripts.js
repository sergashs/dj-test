document.addEventListener('DOMContentLoaded', () => {
	cardSpoilers();
});

window.addEventListener('resize', () => {
	cardSpoilers();
});


function cardSpoilers() {
	const spoilers = document.querySelectorAll('.card-spoiler');

	spoilers.forEach((item) => {
		const textHolder = item.querySelector(".card-text");
		const paragraps = item.querySelectorAll('p');
		const btn = item.querySelector('.btn-more');
		let height = 0;
		let btnState = false;
		let textLength = 0;


		paragraps.forEach((p) => {
			textLength += p.innerHTML.length;
		})

		if (textLength > 86) {
			item.classList.add('show-btn');
		}

		height = textHolder.offsetHeight;
		textHolder.style.height = `${height}px`;

		if (height === textHolder.scrollHeight) {
			item.classList.remove('show-btn');
		}

		btn.addEventListener('click', function (event) {
			event.preventDefault();
			if (!btnState) {
				textHolder.classList.add('show-full');
				textHolder.style.height = `${textHolder.scrollHeight}px`;
				btnState = true;
			} else {
				textHolder.classList.remove('show-full');
				textHolder.style.height = `${height}px`;
				btnState = false;
			}
		});

	})
}



// mobile menu
function mobileMenu() {
	const openBtn = document.querySelector('.open-menu');

	openBtn.addEventListener('click', function (event) {
		event.preventDefault();
		if (document.body.classList.contains('menu-opened')) {
			document.body.classList.remove('menu-opened');
		} else {
			document.body.classList.add('menu-opened');
		}
	});
};
