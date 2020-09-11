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
