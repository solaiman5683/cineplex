// import displayMovie from "./display";

const searchMovie = async pages => {
	const search = document.getElementById('search');
	const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=9fb8030a8c19fae8a81114c9a07939c5&query='${search.value}'&page=${pages}`;
	const error = document.getElementById('error');
	if (search.value !== '') {
		toggleSpinner('block');
		toggleResult('none');
		const response = await fetch(searchUrl);
		const data = await response.json();
		displayMovie(data.results);
	} else {
		error.innerHTML = `
            <h2 class="text-warning text-center">Please enter something to search!</h2>
        `;
	}
};

const toggleSpinner = (displayStatus) => {
	// document.getElementById('spinner').style.display = displayStatus + '!important';
	const spinner = document.getElementById('spinner');
	if (displayStatus === 'block') {
		spinner.classList.add('d-block');
		spinner.classList.remove('d-none');
	} else {
		spinner.classList.remove('d-block');
		spinner.classList.add('d-none');
	}
}
const toggleResult = (displayStatus) => {
	// document.getElementById('spinner').style.display = displayStatus + '!important';
	const container = document.getElementById('container')
	if (displayStatus === 'block') {
		container.classList.add('d-flex');
		container.classList.remove('d-none');
	} else {
		container.classList.remove('d-flex');
		container.classList.add('d-none');
	}
}

let page = 1;
document.getElementById('next').addEventListener('click', () => {
	page++;
	searchMovie(page);
});
document.getElementById('prev').addEventListener('click', () => {
	page--;
	searchMovie(page);
});

document.getElementById('search').addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		searchMovie(page);
	}
})