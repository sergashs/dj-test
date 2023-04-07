document.addEventListener('DOMContentLoaded', () => {
	cardSpoilers();
});

window.addEventListener('resize', () => {
	// cardSpoilers();
});


function cardSpoilers() {
	const spoilers = document.querySelectorAll('.card-spoiler');

	spoilers.forEach((item) => {
		const textHolder = item.querySelector(".card-text"),
			paragraphs = item.querySelectorAll('p'),
			btn = item.querySelector('.btn-more');
		let height = 0,
			btnState = false,
			textLength = 0;


		paragraphs.forEach((p) => {
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
				btn.innerHTML = 'Show less';
				btnState = true;
			} else {
				textHolder.classList.remove('show-full');
				textHolder.style.height = `${height}px`;
				btn.innerHTML = 'Show more';
				btnState = false;
			}
		});

	})
}
