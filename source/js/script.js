//menu-burger
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//map
ymaps.ready(function () {

  var myMap = new ymaps.Map('map', {
    center: [59.938781, 30.321761],
    zoom: 17,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark([59.938606, 30.322981], {
    hintContent: '«Кэт энерджи»',
    balloonContent: '«Кэт энерджи» магазин функционального питания для котов<br>Санкт-Петербург ул. Большая Конюшенная, д. 19/8'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map-pin.png',
    // Размеры метки.
    iconImageSize: [124, 106],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-60, -100]
  });

  myMap.geoObjects
  .add(myPlacemark);
});


// slider

var exampleSlider = document.querySelector('.example__wrapper-image');
var beforeButton = document.querySelector('.example__slider-button--before');
var afterButton = document.querySelector('.example__slider-button--after');

var beforeSlide = document.querySelector('.example__item--before');
var afterSlide = document.querySelector('.example__item--after');
var rangeSlider = document.querySelector('.example__range-slider');

beforeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (beforeSlide.classList.contains("example__item--hidden")) {
    beforeSlide.classList.remove('example__item--hidden');
    afterSlide.classList.add('example__item--hidden');
  }

  if (rangeSlider.classList.contains("example__range-slider--after")) {
    rangeSlider.classList.remove('example__range-slider--after');
    rangeSlider.classList.add('example__range-slider--before');
  }
});

afterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (afterSlide.classList.contains('example__item--hidden')) {
    afterSlide.classList.remove('example__item--hidden');
    beforeSlide.classList.add('example__item--hidden');
  }

  if (rangeSlider.classList.contains("example__range-slider--before")) {
    rangeSlider.classList.remove('example__range-slider--before');
    rangeSlider.classList.add('example__range-slider--after');
  }
});
