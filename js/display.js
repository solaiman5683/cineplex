const displayMovie = movies => {
	const container = document.getElementById('container');
	const modal = document.getElementById('modal');
	if (page < 1) {
		alert('Page not Available');
		page = 1;
	} else {
		container.textContent = '';
	}
	movies.forEach(movie => {
		const imgLink = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
		const div = document.createElement('div');
		const m = document.createElement('m');
		div.classList.add('col');
		div.innerHTML = `
				<div class="content item">
					<div class="wrapper" style="background-image:url(${imgLink || 'placeholder.png'} );">
						<div class="header">
							<div class="date ${movie.vote_average > 7
								? 'bg-success'
								: movie.vote_average <= 4 ? 'bg-danger':  'bg-primary'
							} p-2">
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
								<a type="button" class="button" data-bs-toggle="modal"
									data-bs-target="#m${movie.id}" onclick="console.log('${movie.id}')">
									Read more
								</a>
							</div>
						</div>
					</div>
				</div>
		`;
		container.appendChild(div);
		m.innerHTML = `
			<!-- Modal -->
			<div class="modal fade" id="m${movie.id}" tabindex="-1" aria-labelledby="${movie.id}lLabel"
				aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content text-light rounded shadow-lg p-2">
						<div class="modal-header">
							<h6 class="modal-title" id="${movie.id}Label">Released: ${movie.release_date}</h6>
							<button type="button" class="btn-close bg-danger" data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<h3 class='py-2'>${movie.title}</h3>
							<p class='py-2'>${movie.overview}</p>
							<div class="row text-light">
								<div class="col-5 text-center mx-auto p-1 rounded ${!movie.adult ? "bg-success" : "bg-warning"}">Adult: ${!movie.adult ? "No" : "Yes"}</div>
								<div class="col-5 text-center mx-auto p-1 rounded ${movie.vote_average > 7 ? 'bg-success' : movie.vote_average <= 4 ? 'bg-danger':  'bg-primary'
								}">Rattings: ${movie.vote_average} </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		modal.appendChild(m)
	});
	document.getElementById('error').innerHTML = '';
	const button = document.getElementById('button');
	button.classList.remove('d-none');
	button.classList.add('d-block');
};