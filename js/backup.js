// const baseLink = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9fb8030a8c19fae8a81114c9a07939c5`;
// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=9fb8030a8c19fae8a81114c9a07939c5&query=${search.value}`;

// const imgLink = `https://image.tmdb.org/t/p/w1280/`;

const loadData = async url => {
	const response = await fetch(url);
	const data = await response.json();
	displayMovie(data.results);
};
// const loadData = url => {
// 	fetch(url)
// 		.then(res => res.json())
// 		.then(data => displayMovie(data.results));
// };

const searchMovie = () => {
	const search = document.getElementById('search');
	console.log(search.value);
	const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=9fb8030a8c19fae8a81114c9a07939c5&query='${search.value}'&page=2`;

	console.log(searchUrl);
	loadData(searchUrl);
};

const loadMovie = pages => {
	const baseLink = `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=9fb8030a8c19fae8a81114c9a07939c5&page=${pages}`;

	loadData(baseLink);
};

let page = 1;
loadMovie(page);
document.getElementById('next').addEventListener('click', () => {
	page++;
	loadMovie(page);
});
document.getElementById('prev').addEventListener('click', () => {
	page--;
	loadMovie(page);
});

const displayMovie = movies => {
	const container = document.getElementById('container');
	if (page < 1) {
		alert('Page not Available');
		page = 1;
	} else {
		container.textContent = '';
	}
	movies.forEach(movie => {
		// console.log(movie);
		const imgLink = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
		const div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `
		<div class="content item">
					<div class="wrapper" style="background-image:url(${
						imgLink || 'placeholder.png'
					} );">
						<div class="header">
							<div class="date">
								<span title="release date">${movie.vote_average}</span>
							</div>
						</div>
						<div class="data">
							<div class="content">
								<span class="author">${movie.release_date}</span>
								<h1 class="title">
									<a href="#">${movie.title}</a>
								</h1>
								<p class="text">
									${movie.overview.slice(0, 100)}
								</p>
								<a href="#" class="button">Read more</a>
							</div>
						</div>
					</div>
				</div>
		`;

		container.appendChild(div);
	});
};
