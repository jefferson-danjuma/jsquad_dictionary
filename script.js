const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const definitionContainer = document.getElementById('definition-container');

searchBtn.addEventListener('click', () => {
	const searchTerm = searchInput.value.toLowerCase();
	const definition = dictionary[searchTerm];
	if (definition) {
		definitionContainer.innerHTML = `<p>${definition}</p>`;
	} else {
		definitionContainer.innerHTML = `<p>Word not found.</p>`;
	}
});