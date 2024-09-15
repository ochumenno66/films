const films = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

// Создаем общий контейнер
const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);

const header = document.createElement("h2");
header.textContent = "Любимые режиссёры";
header.classList.add("header");
mainContainer.appendChild(header);

//Создаем стили
//mainContainer.style.cssText = "display: flex; align-items: center; jestify-content: space-between;";

films.forEach((elem) => {
  //Создаем контейнер для элементов
  const containerElem = document.createElement("div");
  containerElem.classList.add("element");
  mainContainer.appendChild(containerElem);

  //Создаем и выводим элементы
  const filmsName = document.createElement("h2");
  filmsName.textContent = elem.name;
  containerElem.appendChild(filmsName);

  const filmsCareer = document.createElement("p");
  filmsCareer.textContent = elem.career.toUpperCase();
  containerElem.appendChild(filmsCareer);

  //Стили для career
  filmsCareer.style.cssText = "font-family: Trebuchet MS;";

  //Создаем контейнер для ссылки
  const containerLink = document.createElement("div");
  containerLink.classList.add("link");
  containerElem.appendChild(containerLink);

  const filmsLink = document.createElement("a");
  filmsLink.textContent = "Фильмография";
  filmsLink.href = elem.films;
  filmsLink.target = "_blank";

  filmsLink.addEventListener("click", (event) => {
    console.log("Пользователь нажал на ссылку");
  });
  containerLink.appendChild(filmsLink);

  //Стили для ссылки
  filmsLink.style.cssText =
    "text-decoration: none; color: #967db8; font-size: 15px; font-family: Comic Sans MS";
});

const topFilmsList = films.map((film) => {
  return film.top_rated_film;
});

// Создаем контейнер и класс для выравнивания по центру
let container = document.createElement("div");
container.classList.add("centered");
// Добавляем контейнер на страницу
document.body.appendChild(container);
// Создаем элемент
const textBestFilms = document.createElement("h2");
const textBestFilm = document.createElement("p");
// Устанавливаем текст
textBestFilms.textContent = "Лучшие фильмы режиссёров:";
textBestFilm.textContent = topFilmsList.join(", ");
// Добавляем созданный элемент в контейнер
container.appendChild(textBestFilms);
container.appendChild(textBestFilm);
//Стили для элементов
textBestFilms.style.cssText =
  "font-Size: 20px; font-style: italic; font-family: Lucida Sans Unicode";
textBestFilm.style.cssText = "font-size: 17px; font-family: Trebuchet MS";
