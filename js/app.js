// import displayMovie from "./display";


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

const searchMovie = pages => {
	const baseLink = `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=9fb8030a8c19fae8a81114c9a07939c5&page=${pages}`;
	toggleSpinner('block');
	toggleResult('none');
	// const response = await fetch(baseLink);
	// const data = await response.json();
	// displayMovie(data.results);
	fetch(baseLink)
		.then(res => res.json())
		.then(data => displayMovie(data.results));

};

let page = 1;
searchMovie(page);
document.getElementById('next').addEventListener('click', () => {
	page++;
	searchMovie(page);
});
document.getElementById('prev').addEventListener('click', () => {
	page--;
	searchMovie(page);
});
