'use strict';
document.addEventListener('DOMContentLoaded', function () {

  // Front Page Destination Slides
  var swiper = new Swiper(".dtnSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });


  // Page About us : page-about us slides
  var swiper = new Swiper(".aboutSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop: true
  });

  // Page Destination background slides
  var swiper = new Swiper(".pageDtnSwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });


  // Page Destination video slides (no swiper)
  let mainVideo = document.querySelector('.mainVideo');

  const videoList = document.querySelectorAll('.video__lists > li');



  videoList.forEach((list) => {
    list.addEventListener('click', () => {
      videoList.forEach(vid => vid.classList.remove('active'));
      list.classList.add('active');
      if (list.classList.contains('active')) {
        let src = list.children[0].getAttribute('src');
        mainVideo.src = src;
      }

    });

  });


  // page - destination attractions slider
  var swiper = new Swiper(".attrSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
      }

    }
  });

});