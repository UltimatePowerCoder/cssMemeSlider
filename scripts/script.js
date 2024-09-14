const images = document.querySelectorAll('.slider__image');
const controls = document.querySelectorAll('.slider__control');
const caption = document.querySelector('.slider__caption');
const slider = document.querySelector('.slider');

const captions = [
  "Тоже самое и с вёрсткой",
  "Или думает, что вкатился",
  "А хотелось бы идеально",
  "Когда не разглаядел стек",
  "Или не получил...",
  "А потом ты просыпаешься",
  "Я просто оставлю это здесь",
  "История одного студента",
  "Когда успел до дедлайна",
  "Быстрый это сколько???",
];

let currentSlide = 0;

function updateSliderHeight() {
  const activeImage = document.querySelector('.slider__image.active');
  if (activeImage) {
    slider.style.height = activeImage.offsetHeight + 'px';
  }
}

function showSlide(index) {
  // Удаляем активные классы
  images.forEach((img, i) => {
    img.classList.remove('active');
    controls[i].classList.remove('active');
  });

  // Добавляем активный класс к нужному слайду
  images[index].classList.add('active');
  controls[index].classList.add('active');

  // Плавное изменение высоты слайдера
  updateSliderHeight();

  // Обновляем подпись с задержкой для плавного исчезновения предыдущей
  caption.classList.remove('active');
  setTimeout(() => {
    caption.textContent = captions[index];
    caption.classList.add('active');
  }, 500);
}

// Добавляем обработчик для каждого контрола
controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    showSlide(index);
  });
});

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);

// Обновляем высоту слайдера при изменении размера окна
window.addEventListener('resize', updateSliderHeight);
