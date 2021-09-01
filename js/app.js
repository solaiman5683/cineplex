// import displayMovie from "./display";

const searchMovie = async pages => {
	const baseLink = `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=9fb8030a8c19fae8a81114c9a07939c5&page=${pages}`;

	const response = await fetch(baseLink);
	const data = await response.json();
	displayMovie(data.results);
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
