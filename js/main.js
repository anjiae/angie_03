'use strict';
document.addEventListener('DOMContentLoaded', function () {

  // Header : Show sub-menu
  const mainMenu = document.querySelectorAll('.main-menu');
  const nav = document.querySelector('.nav');

  mainMenu.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
    });
    nav.addEventListener('mouseleave', function () {
      btn.classList.remove('active');
    });
    btn.addEventListener('mouseleave', function () {
      btn.classList.remove('active');
    });
  });

  // Header : Toggle button event
  const toggleBtn = document.querySelector('.toggleBtn');
  const mobileMenu = document.querySelector('.mobile--container');
  toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  // ARROW UP BUTTON
  const arrowUp = document.querySelector('#arrow-up');
  const home = document.querySelector('#main');
  const homeHeight = home.getBoundingClientRect().height;

  document.addEventListener('scroll', function () {
    if (window.scrollY > homeHeight / 5) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

  arrowUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // About : Location event -  tap for view a map
  const targetLink = document.querySelectorAll('.tabBtn');
  const maps = document.querySelectorAll('.map--lists > li');
  const mapLists = document.querySelector('.map--lists');


  for (let i = 0; i < targetLink.length; i++) {
    targetLink[i].addEventListener('click', function (e) {
      e.preventDefault();
      const orgTarget = e.target.getAttribute('href');
      const mapTarget = orgTarget.replace('#', '');

      for (let a = 0; a < maps.length; a++) {
        maps[a].style.display = 'none';
      }
      document.getElementById(mapTarget).style.display = 'block';
      mapLists.scrollIntoView({ behavior: "smooth" });
    });
  }
  document.getElementById('map01').style.display = 'block';






});