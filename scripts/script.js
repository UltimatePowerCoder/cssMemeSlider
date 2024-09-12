const images = document.querySelectorAll('.slider__image');
const controls = document.querySelectorAll('.slider__control');
const caption = document.querySelector('.slider__caption');

const captions = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
];

let currentSlide = 0;

// Функция для показа слайда
function showSlide(index) {
  // Удаляем активные классы
  images.forEach((img, i) => {
    img.classList.remove('active');
    controls[i].classList.remove('active');
  });

  // Добавляем активный класс к нужному слайду
  images[index].classList.add('active');
  controls[index].classList.add('active');

  // Обновляем подпись
  caption.textContent = captions[index];
}

// Добавляем обработчик для каждого контрола
controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    showSlide(index);
  });
});

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);
