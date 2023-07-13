{
	const searchInput = document.querySelector('.search');
	const books = document.querySelectorAll('.book-list li');
	const messageContainer = document.querySelector('.book-list ul');
	const msg = document.createElement('p');

	const showMessage = function () {
		msg.textContent = 'Brak książki w bazie!';
		messageContainer.appendChild(msg);
	};

	const startSearch = function () {
		const text = searchInput.value.toLocaleLowerCase();
		let booksArr = [];
		for (let book of books) {
			const item = book.textContent.toLocaleLowerCase();
			if (item.indexOf(text) === -1) {
				book.classList.add('hide');
				console.log('znalezione ksiazki' + booksArr.length);
			} else {
				book.classList.remove('hide');
				booksArr.push(book);
				console.log('znalezione ksiazki' + booksArr.length);
			}
		}
		if (booksArr.length == 0) {
			showMessage();
		} else {
			msg.remove();
		}
		console.log(books.length);
	};

	searchInput.addEventListener('keyup', startSearch);
}
