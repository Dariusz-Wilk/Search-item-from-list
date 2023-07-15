{
	const searchInput = document.querySelector('.search');
	const books = document.querySelectorAll('.book-list li');

	const startSearch = function () {
		const text = searchInput.value.toLocaleLowerCase();
		let booksArr = [];
		const message = document.querySelector('.message');
		for (let book of books) {
			const item = book.textContent.toLocaleLowerCase();
			if (item.indexOf(text) === -1) {
				book.classList.add('hide');
			} else {
				book.classList.remove('hide');
				booksArr.push(book);
				book.innerHTML = item.replace(
					text,
					`<span class="light-green">${text}</span>`
				);
			}
		}
		if (booksArr.length == 0) {
			message.textContent = `Brak książki w bazie!`;
		} else {
			message.textContent = '';
		}
	};

	searchInput.addEventListener('keyup', startSearch);
}
