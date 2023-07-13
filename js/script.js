{
	const searchInput = document.querySelector('.search');
	const books = document.querySelectorAll('.book-list li');
	const searchBtn = document.querySelector('.searchBtn');

	const startSearch = function () {
		const text = searchInput.value.toLocaleLowerCase();

		for (let book of books) {
			const item = book.textContent.toLocaleLowerCase();
			if (item.indexOf(text) === -1) {
				book.classList.add('hide');
			} else {
				book.classList.remove('hide');
			}
		}
	};

	searchBtn.addEventListener('click', startSearch);
}
