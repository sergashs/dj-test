document.addEventListener('DOMContentLoaded', () => {
	cardSpoilers();
});

window.addEventListener('resize', () => {
	// cardSpoilers();
});


function cardSpoilers() {
	const textSpoilers = document.querySelectorAll('.card-spoiler');

	textSpoilers.forEach((item) => {
		const cardText = item.querySelector(".card-text"),
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

		height = cardText.offsetHeight;
		cardText.style.height = `${height}px`;

		if (height === cardText.scrollHeight) {
			item.classList.remove('show-btn');
		}

		btn.addEventListener('click', function (event) {
			event.preventDefault();
			if (!btnState) {
				cardText.classList.add('show-full');
				cardText.style.height = `${cardText.scrollHeight}px`;
				btn.innerHTML = 'Show less';
				btnState = true;
			} else {
				cardText.classList.remove('show-full');
				cardText.style.height = `${height}px`;
				btn.innerHTML = 'Show more';
				btnState = false;
			}
		});

	})
}
