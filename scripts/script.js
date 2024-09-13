const images = document.querySelectorAll('.slider__image');
const controls = document.querySelectorAll('.slider__control');
const caption = document.querySelector('.slider__caption');

const captions = [
  "Lorem ipsum dolor 1",
  "Lorem ipsum dolor 2",
  "Lorem ipsum dolor 3",
  "Lorem ipsum dolor 4",
  "Lorem ipsum dolor 5",
  "Lorem ipsum dolor 6",
  "Lorem ipsum dolor 7",
  "Lorem ipsum dolor 8",
  "Lorem ipsum dolor 9",
  "Lorem ipsum dolor 10",
];

let currentSlide = 0;

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
  caption.classList.remove('active');
  
  // Используем setTimeout для плавной анимации
  setTimeout(() => {
    caption.classList.add('active');
  }, 0);
}

// Добавляем обработчик для каждого контрола
controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    showSlide(index);
  });
});

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);
