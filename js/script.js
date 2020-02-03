const MenuButton = document.querySelector('.header-nav__toggle');
const MobileMenu = document.querySelector('.nav-list');
const DocBody = document.querySelector('.body');

document.querySelector('.header-nav__toggle').onclick = function(){
	MenuButton.classList.toggle('open');
	MobileMenu.classList.toggle('active');
	DocBody.classList.toggle('active');
}


$(".intro-slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'ease',
  pauseOnHover: true,
  speed: 1000,
  prevArrow: '<div class="prev-1"></div>',
  nextArrow: '<div class="next-1"></div>',
});

$(".clients-slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  prevArrow: '<div class="prev-2"></div>',
  nextArrow: '<div class="next-2"></div>',
  responsive: [
    {
      breakpoint: 9999,
      settings: {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: false,
        dots: false,
        arrows: true,
        speed: 200,
        prevArrow: '<div class="prev-2"></div>',
        nextArrow: '<div class="next-2"></div>'
      }
    },
    {
      breakpoint: 1200,
      settings: {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: false,
        dots: false,
        arrows: true,
        speed: 200,
        prevArrow: '<div class="prev-2"></div>',
        nextArrow: '<div class="next-2"></div>'
      }
    }
  ]
});
/*Слайдер логотипов*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".header-channel__list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1280){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.header-channel__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 200,
        prevArrow: '<div class="ch-prev"></div>',
        nextArrow: '<div class="ch-next"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.header-channel__list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер логотипов*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".footer-channel__list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1152){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.footer-channel__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 200,
        prevArrow: '<div class="ch-prev"></div>',
        nextArrow: '<div class="ch-next"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.footer-channel__list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер кооперации*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".coop-list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1280){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.coop-list').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 200,
        prevArrow: '<div class="coop-prev"></div>',
        nextArrow: '<div class="coop-next"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.coop-list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер новостей*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".news-list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1280){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.news-list').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 200,
        prevArrow: '<div class="news-prev"></div>',
        nextArrow: '<div class="news-next"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.news-list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер преимуществ*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".advantages-list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1024){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.advantages-list').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 200,
        prevArrow: '<div class="advant-prev"></div>',
        nextArrow: '<div class="advant-next"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.advantages-list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер мультиков 1*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".ani-item__list--1").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1024){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.ani-item__list--1').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 200,
				fade: true,
        prevArrow: '<div class="ani-prev-1"></div>',
        nextArrow: '<div class="ani-next-1"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.ani-item__list--1').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер мультиков 2*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".ani-item__list--2").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1024){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.ani-item__list--2').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 200,
				fade: true,
        prevArrow: '<div class="ani-prev-2"></div>',
        nextArrow: '<div class="ani-next-2"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.ani-item__list--2').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

/*Слайдер мультиков 3*/
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".ani-item__list--3").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1024){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.ani-item__list--3').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 200,
				fade: true,
        prevArrow: '<div class="ani-prev-3"></div>',
        nextArrow: '<div class="ani-next-3"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.ani-item__list--3').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');
