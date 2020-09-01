'use strict';

(function () {

  var link = document.querySelector('.contacts-btn');
  var popup = document.querySelector('.modal-write-us');
  var close = document.querySelector('.modal-close');
  var linkmap = document.querySelector('.map-link');
  var popupmap = document.querySelector('.map-popup');
  var closemap = document.querySelector('.map-close');


  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
  });

  close.addEventListener('click', function (evt) {
    popup.classList.remove('modal-show');
  });

  linkmap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupmap.classList.add('map-show');
  });

  closemap.addEventListener('click', function (evt) {
    popupmap.classList.remove('map-show');
  });

  var firstSliderBtn = document.querySelector('#r1 + label');
  var secondSliderBtn = document.querySelector('#r2 + label');
  var thirdSliderBtn = document.querySelector('#r3 + label');

  var firstSlider = document.querySelector('.slider-1');
  var secondSlider = document.querySelector('.slider-2');
  var thirdSlider = document.querySelector('.slider-3');

  firstSliderBtn.addEventListener('click', function () {
     firstSlider.classList.add('active-slide');
     secondSlider.classList.remove('active-slide');
     thirdSlider.classList.remove('active-slide');
   });
  secondSliderBtn.addEventListener('click', function () {
     firstSlider.classList.remove('active-slide');
     secondSlider.classList.add('active-slide');
     thirdSlider.classList.remove('active-slide');
   });
  thirdSliderBtn.addEventListener('click', function () {
    firstSlider.classList.remove('active-slide');
    secondSlider.classList.remove('active-slide');
    thirdSlider.classList.add('active-slide');
  });

})();
