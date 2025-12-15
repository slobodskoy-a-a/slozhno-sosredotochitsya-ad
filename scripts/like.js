/* ============================================================
СКРИПТ УПРАВЛЕНИЯ ФУНКЦИОНАЛЬНОСТЬЮ ЛАЙКОВ
============================================================

Этот скрипт обеспечивает интерактивность системы лайков на странице.
Он позволяет пользователям "лайкить" карточки через кнопки с иконками сердец.

КРИТИЧЕСКИЕ КЛАССЫ CSS:
  ✦ like-icon — для SVG-иконки анимированного сердца
  ✦ card__like-button — для кнопки "Like" рядом с иконкой
  ✦ card__icon-button — для кнопки, оборачивающей иконку сердца
  ✦ is-liked — для обозначения состояния "лайкнулась" иконки сердца
  ✦ button__text — для текстового элемента внутри кнопки

⚠️  ВАЖНО: Если изменить эти названия классов в HTML, 
    скрипт перестанет работать. Проверяйте внимательно!
============================================================ */

// Получаем все SVG-иконки сердец на странице
const likeHeartArray = document.querySelectorAll('.like-icon');

// Получаем все кнопки "Like" на странице
const likeButtonArray = document.querySelectorAll('.card__like-button');

// Получаем все кнопки с иконками сердец
const iconButtonArray = document.querySelectorAll('.card__icon-button');

// Добавляем обработчик клика для каждой кнопки иконки
// При клике переключаем состояние лайка и обновляем текст кнопки
iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

// Добавляем обработчик клика для каждой кнопки "Like"
// При клике переключаем состояние лайка и обновляем её текст
likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

/**
 * Переключает состояние лайка для иконки сердца
 * Добавляет или удаляет класс is-liked
 * 
 * @param {Element} heart - SVG-иконка сердца
 * @param {Element} button - Кнопка для обновления текста
 */
function toggleIsLiked(heart, button) {
  // Переключаем класс is-liked (добавляет, если его нет; удаляет, если есть)
  heart.classList.toggle('is-liked');
  
  // Обновляем текст кнопки в зависимости от нового состояния
  setButtonText(heart, button);
}

/**
 * Устанавливает текст кнопки в зависимости от состояния лайка
 * Если сердце "лайкнулось" → выводит "Unlike"
 * Если лайк отменён → выводит "Like"
 * 
 * @param {Element} heart - SVG-иконка сердца
 * @param {Element} button - Кнопка, текст которой нужно обновить
 */
function setButtonText(heart, button) {
  // Проверяем, есть ли у сердца класс is-liked
  if ([...heart.classList].includes('is-liked')) {
    // Сердце лайкнулось — меняем текст на "Unlike" с задержкой 500ms
    // Задержка даёт время на анимацию
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    // Лайк отменён — меняем текст на "Like" с задержкой 500ms
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}
