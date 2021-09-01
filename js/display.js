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
    document.getElementById('error').innerHTML = '';
    const button = document.getElementById('button');
    button.classList.remove('d-none');
	button.classList.add('d-block');
};