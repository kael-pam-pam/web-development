function moveCarouselLeft() {
  let lastFilm = filmCollection.pop();
  filmCollection.unshift(lastFilm);
  refreshHTML('left');
}

function moveCarouselRight() {
  let firstFilm = filmCollection.shift();
  filmCollection.push(firstFilm);
  refreshHTML('right');
}

function refreshHTML(direction) {
  if ((direction !== 'left') && (direction !== 'right')) {
    console.log('ошибка!');
    return;
  }
  
  let films = document.querySelectorAll('.film');
  if (direction === 'left') {
    films[films.length - 1].remove();
    const film = createFilm(filmCollection[0]);
    insertFilm(film, 'first');
  }
  
  if (direction === 'right') {
    films[0].remove();
    const film = createFilm(filmCollection[3]);
    insertFilm(film, 'last')
  }     
}

function createFilm(filmData) {
  const film = document.createElement('div');
  film.classList.add('film');
  film.innerHTML = `
    <div class="film_pic">
      <img class="film_pic_content" src="${filmData.pathToPic}" alt="${filmData.name}">
    </div>
    <h3 class="third_title">${filmData.name}</h3>
    <p class="film_about">
      ${filmData.description}
    </p>`;
  return film;
}

function insertFilm(film, position) {
  if ((position !== 'first') && (position !== 'last')) {
    console.log('ошибка!');
    return;
  }
  
  if (position === 'first') {
    document.querySelector('.film_list').prepend(film)
  }  
  if (position === 'last') {
    document.querySelector('.film_list').append(film)
  }
}

function run() {
  const seePreviousFilmBtn = document.getElementById('carousel_left');
  seePreviousFilmBtn.addEventListener('click', moveCarouselLeft);
  
  const seeNextFilmBtn = document.getElementById('carousel_right');
  seeNextFilmBtn.addEventListener('click', moveCarouselRight);
}

window.onload = run;