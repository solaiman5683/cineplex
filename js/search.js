// import displayMovie from "./display";

const searchMovie = async pages => {
	const search = document.getElementById('search');
	console.log(search.value);
	const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=9fb8030a8c19fae8a81114c9a07939c5&query='${search.value}'&page=${pages}`;
    const error = document.getElementById('error')
	if (search.value !== '') {
		const response = await fetch(searchUrl);
		const data = await response.json();
		displayMovie(data.results);
    } else {
        error.innerHTML = `
            <h2 class="text-warning text-center">Please enter something to search!</h2>
        `;
    }
    
};

let page = 1;
document.getElementById('next').addEventListener('click', () => {
	page++;
	searchMovie(page);
});
document.getElementById('prev').addEventListener('click', () => {
	page--;
	searchMovie(page);
});
