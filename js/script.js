'use strict';

(function () {


  var link = document.querySelector(".contacts-btn");
  var popup = document.querySelector(".modal-write-us");
  var close = document.querySelector(".modal-close");
  var linkmap = document.querySelector(".map-link");
  var popupmap = document.querySelector(".map-popup");
  var closemap = document.querySelector(".map-close");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    popup.classList.remove("modal-show");
  });

  linkmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.add("map-show");
  });

  closemap.addEventListener("click", function (evt) {
    popupmap.classList.remove("map-show");
  });

  var secondSliderBtnFirstBlock = document.querySelector('#r-1 + label');
  // var thirdSliderBtnFirstBlock = document.querySelector('#r_1 + label');
  //
  // var firstSliderBtnSecondBlock = document.querySelector('#r2 + label');
  // var secondSliderBtnSecondBlock = document.querySelector('#r-2 + label');
  // var thirdSliderBtnSecondBlock = document.querySelector('#r_2 + label');
  //
  // var firstSliderBtnThirdBlock = document.querySelector('#r3 + label');
  // var secondSliderBtnThirdBlock = document.querySelector('#r-3 + label');

  var firstSlider = document.querySelector('.slider-1');
  var secondSlider = document.querySelector('.slider-2');
  // var thirdSlider = document.querySelector('.slider-3');


  // firstSliderBtnSecondBlock.addEventListener('click', function () {
  //   firstSlider.classList.add('active-slide');
  //   secondSlider.classList.remove('active-slide');
  //   thirdSlider.classList.remove('active-slide');
  // });
  // firstSliderBtnThirdBlock.addEventListener('click', function () {
  //   firstSlider.classList.add('active-slide');
  //   secondSlider.classList.remove('active-slide');
  //   thirdSlider.classList.remove('active-slide');
  // });


  secondSliderBtnFirstBlock.addEventListener('click', function (evt) {
    firstSlider.classList.remove('active-slide');
    secondSlider.classList.add('active-slide');
    // thirdSlider.classList.remove('active-slide');
  });
  // secondSliderBtnSecondBlock.addEventListener('click', function () {
  //   firstSlider.classList.remove('active-slide');
  //   secondSlider.classList.add('active-slide');
  //   thirdSlider.classList.remove('active-slide');
  // });
  // secondSliderBtnThirdBlock.addEventListener('click', function () {
  //   firstSlider.classList.remove('active-slide');
  //   secondSlider.classList.add('active-slide');
  //   thirdSlider.classList.remove('active-slide');
  // });
  //
  //
  // thirdSliderBtnFirstBlock.addEventListener('click', function () {
  //   firstSlider.classList.remove('active-slide');
  //   secondSlider.classList.remove('active-slide');
  //   thirdSlider.classList.add('active-slide');
  // });
  // thirdSliderBtnSecondBlock.addEventListener('click', function () {
  //   firstSlider.classList.remove('active-slide');
  //   secondSlider.classList.remove('active-slide');
  //   thirdSlider.classList.add('active-slide');
  // });


})();
