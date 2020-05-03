const LEFT = 'left';
const RIGHT = 'right';
const FIRST = 'first';
const LAST = 'last';


function moveCarouselLeft() {
  let lastFilm = filmCollection.pop();
  filmCollection.unshift(lastFilm);
  refreshHTML(LEFT);
}

function moveCarouselRight() {
  let firstFilm = filmCollection.shift();
  filmCollection.push(firstFilm);
  refreshHTML(RIGHT);
}

function refreshHTML(direction) {
  if ((direction !== LEFT) && (direction !== RIGHT)) {
    console.log('ошибка!');
    return;
  }
  
  let films = document.querySelectorAll('.film');
  if (direction === LEFT) {
    films[films.length - 1].remove();
    const film = createFilm(filmCollection[0]);
    insertFilm(film, FIRST);
  }
  
  if (direction === RIGHT) {
    films[0].remove();
    const film = createFilm(filmCollection[3]);
    insertFilm(film, LAST)
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
  if ((position !== FIRST) && (position !== LAST)) {
    console.log('ошибка!');
    return;
  }
  
  if (position === FIRST) {
    document.querySelector('.film_list').prepend(film)
  }  
  if (position === LAST) {
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