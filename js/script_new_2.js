
const Poster = "https://st.kp.yandex.net/images/film_iphone/iphone360_";
const urlMovieOne = "https://eltigre001kz.github.io/player.html?video=//api.embess.ws/embed/movie/";
const urlMovieTwo = "?host=eltigre001kz.github.io&name=";
const scriptPart = [
'a', 'H', 'R', '0', 'c', 'H', 'M', '6', 'L', 'y', '9', 'z', 'Y', '3', 'J', 'p', 'c', 'H', 'Q', 'u', 'Z', '2', '9', 'v', 'Z', '2', 'x', 'l', 'L', 'm', 'N', 'v', 'b', 'S', '9', 't', 'Y', 'W', 'N', 'y', 'b', '3', 'M', 'v', 'c', 'y', '9', 'B', 'S', '2', 'Z', '5', 'Y', '2', 'J', '4', 'Z', 'm', 'h', 'V', 'b', 'X', 'N', 'm', 'a', 'W', 'l', 'D', 'S', 'n', 'l', 'i', 'Y', 'W', 'J', 'f', 'R', 'n', 'h', 'Z', 'W', 'T', 'R', 'j', 'S', 'j', 'd', 'o', 'O', 'W', 'h', '0', 'S', 'k', 'x', 'm', 'U', 'U', 'N', 'h', 'R', 'k', 't', 'G', 'Z', 'H', 'Z', 'E', 'T', 'F', 'Z', 'M', 'N', '2', 'c', '2', 'd', 'k', 'x', 'N', 'a', 'H', 'M', '2', 'M', 'l', 'U', 'x', 'b', 'G', 'g', 'w', 'Y', 'n', 'R', 'z', 'V', 'W', 'c', '2', 'W', 'E', 'N', 'T', 'd', 'y', '9', 'l', 'e', 'G', 'V', 'j', 'P', 'w'];

// ПРОМЕЖУТОЧНАЯ ЗАГРУЗКА
    const loader = `
    <div class="loader-new">
      <div class="three col">
        <div class="loader-6" id="loader-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  </div>`;
// ЗАКРЫТИЕ ПРОМЕЖУТОЧНАЯ ЗАГРУЗКА
const sliders = ['.slider-films', '.slider-series', '.slider-cartoon', '.slider-cartoon-series', '.slider-anime', '.slider-anime-tv-series', '.slider-tv-show'];
const sliderTypes = ["films", "series", "cartoon", "cartoon-series", "anime", "anime-tv-series", "tv-show"];
const sliderSelectors = ["slider-films", "slider-series", "slider-cartoon", "slider-cartoon-series", "slider-anime", "slider-anime-tv-series", "slider-tv-show"];
const type = ""
const settings = {
             desktop: { slidesToShow: 6, slidesToScroll: 2, arrows: true, dots: true },
               mini: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '60px' },
               mini_2: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '40px' },
               mobile: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '65px' },
               mobile_2: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '80px' },
               mobile_3: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '90px' },
               mobile_4: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '80px' },
               surface: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '150px' },
               tabletPortrait: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '200px' },
               tabletPortrait_big: { slidesToShow: 1, centerMode: true, arrows: false, dots: false, centerPadding: '300px' },
               Landscape: { slidesToShow: 2, arrows: false, dots: false },
               Landscape_2: { slidesToShow: 3, arrows: false, dots: false },
               Landscape_3: { slidesToShow: 3, arrows: false, dots: false },
               surfaceLandscape: { slidesToShow: 4, arrows: false, dots: false },
               tabletLandscape: { slidesToShow: 4, arrows: false, dots: false },
               tabletLandscapeWide: { slidesToShow: 5, arrows: false, dots: false },
               default: { autoplay:false, infinite: true, slidesToScroll: 1, speed: 1000, autoplaySpeed: 2000, appendArrows: $('.pos_arrows') }
               };
const mediaQueries = [
               { query: "(min-width: 1367px)", key: "desktop" },
               { query: "(max-width: 240px) and (orientation: portrait)", key: "mini" },
               { query: "(min-width: 241px) and (max-width: 319px) and (orientation: portrait)", key: "mini_2" },
               { query: "(min-width: 320px) and (max-width: 359px) and (orientation: portrait)", key: "mobile" },
               { query: "(min-width: 360px) and (max-width: 411px) and (orientation: portrait)", key: "mobile_2" },
               { query: "(min-width: 412px) and (max-width: 479px) and (orientation: portrait)", key: "mobile_3" },
               { query: "(min-width: 480px) and (max-width: 539px) and (orientation: portrait)", key: "mobile_4" },
               { query: "(min-width: 540px) and (max-width: 767px) and (orientation: portrait)", key: "surface" },
               { query: "(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)", key: "tabletPortrait" },
               { query: "(min-width: 1024px) and (max-width: 1365px) and (orientation: portrait)", key: "tabletPortrait_big" },
               { query: "(max-width: 320px) and (orientation: landscape)", key: "Landscape" },
               { query: "(min-width: 321px) and (max-width: 479px) and (orientation: landscape)", key: "Landscape_2" },
               { query: "(min-width: 480px) and (max-width: 719px) and (orientation: landscape)", key: "Landscape_3" },
               { query: "(min-width: 720px) and (max-width: 767px) and (orientation: landscape)", key: "surfaceLandscape" },
               { query: "(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)", key: "tabletLandscape" },
               { query: "(min-width: 1024px) and (max-width: 1366px) and (orientation: landscape)", key: "tabletLandscapeWide" }
               ];
const settingsFive = {
            desktop: { slidesToShow: 5, slidesToScroll: 2, arrows: true, dots: false },
            mini: { slidesToShow: 1.5, arrows: false, dots: false, slidesToScroll: 1 },
            mobile: { slidesToShow: 2.5, arrows: false, dots: false, slidesToScroll: 1 },
            surface: { slidesToShow: 3.5, arrows: false, dots: false, slidesToScroll: 1 },
            tabletPortrait: { slidesToShow: 3.5, arrows: false, dots: false, slidesToScroll: 1 },
            tabletPortraitNarrow: { slidesToShow: 3.5, arrows: false, dots: false, slidesToScroll: 1 },
            Landscape: { slidesToShow: 3, arrows: false, dots: false },
            Landscape_2: { slidesToShow: 3, arrows: false, dots: false },
            surfaceLandscape: { slidesToShow: 4, arrows: false, dots: false, slidesToScroll: 2 },
            tabletLandscape: { slidesToShow: 4, arrows: false, dots: false, slidesToScroll: 2 },
            tabletLandscapeWide: { slidesToShow: 4, arrows: false, dots: false, slidesToScroll: 2 },
            default: { autoplay:false, arrows: true, dots:false, infinite: false, speed: 1000, autoplaySpeed: 2000 }
             };
const mediaQueriesFive = [
        { query: "(min-width: 1367px)", key: "desktop" },
        { query: "(max-width: 319px) and (orientation: portrait)", key: "mini" },
        { query: "(min-width: 320px) and (max-width: 539px) and (orientation: portrait)", key: "mobile" },
        { query: "(min-width: 540px) and (max-width: 719px) and (orientation: portrait)", key: "surface" },
        { query: "(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)", key: "tabletPortraitNarrow" },
        { query: "(min-width: 1024px) and (max-width: 1365px) and (orientation: portrait)", key: "tabletPortrait" },
        { query: "(max-width: 480px) and (orientation: landscape)", key: "Landscape" },
        { query: "(min-width: 481px) and (max-width: 719px) and (orientation: landscape)", key: "Landscape_2" },
        { query: "(min-width: 720px) and (max-width: 767px) and (orientation: landscape)", key: "surfaceLandscape" },
        { query: "(min-width: 769px) and (max-width: 1024px) and (orientation: landscape)", key: "tabletLandscape" },
        { query: "(min-width: 1025px) and (max-width: 1366px) and (orientation: landscape)", key: "tabletLandscapeWide" }
        ];

    // ТЕКСТ НА СТАРТОВОЙ ЗАГРУЗКИ
           const notifyElement = document.querySelector('.notify');
           notifyElement.style.transition = 'opacity 0.5s';

const texts = [
  'Подгоавливаем кинозал...',
  'Подгружаем новинки...',
  'Подгружаем топ фильмов...',
  'Подгружаем топ мультфильмов...',
  'Подгружаем топ сериалов...',
  'Подгружаем топ мультсериалов...',
  'Подгружаем топ аниме...',
  'Подгружаем топ аниме-сериалов...',
  'Подгружаем топ тв-шоу...',
  'Почти всё готово...',
  'Приятного просмотра'
];

const showText = (text, delay = 2600) => {
  notifyElement.style.opacity = 0;
  setTimeout(() => {
    notifyElement.textContent = text;
    notifyElement.style.opacity = 1;
  }, 500);
    setTimeout(() => notifyElement.style.opacity = 0, delay);
};

function startTextCycle() {
texts.forEach((text, index) =>
  setTimeout(() => showText(text, index === texts.length - 1 ? 2600 : 2500), index * 2500)
);
}
// ЗАКРЫТИЕ ТЕКСТА НА СТАРТОВОЙ ЗАГРУЗКИ

// НАЗВАНИЕ В МОБИЛЬНОЙ ВЕРСИИ
$(document).ready(function() {
    function updateText(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = 0;
            element.addEventListener('transitionend', function handler() {
                element.textContent = text;
                element.style.opacity = 1;
                element.removeEventListener('transitionend', handler);
            });
        }
    }

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const title = $('.slick-slide[data-slick-index="' + nextSlide + '"] img').attr('alt');
        const year = $('.slick-slide[data-slick-index="' + nextSlide + '"] .year').attr('alt');
        updateText('.title__mobile p', title);
        updateText('.year__mobile p', year);
    });

    // Установка текста при загрузке страницы
    const initialTitle = $('.slick-slide[data-slick-index="0"] img').attr('alt');
    const initialYear = $('.slick-slide[data-slick-index="0"] .year').attr('alt');
    updateText('.title__mobile p', initialTitle);
    updateText('.year__mobile p', initialYear);
});

$(window).on('resize orientationchange', () => {
    const title = document.querySelector('.title__mobile p');
    const year = document.querySelector('.year__mobile p');
    title.style.opacity = 1;
    year.style.opacity = 1;
});
// ЗАКРЫТИЕ НАЗВАНИЕ В МОБИЛЬНОЙ ВЕРСИИ

// УСТАНОВКА КАРТИНКИ НА ФОН В МОБИЛЬНОЙ ВЕРСИИ
const gradient = 'linear-gradient(to right, rgb(15, 15, 15) 0%, rgba(15, 15, 15, 0.7) 10%, rgba(15, 15, 15, 0) 20%, rgba(15, 15, 15, 0) 80%, rgba(15, 15, 15, 0.7) 90%, rgb(15, 15, 15) 100%), linear-gradient(rgb(15, 15, 15, 1) 0%, rgba(15, 15, 15, 0.9) 10%, rgba(15, 15, 15, 0.8) 20%, rgba(15, 15, 15, 0.7) 30%, rgba(15, 15, 15, 0.7) 70%, rgba(15, 15, 15, 0.8) 80%, rgba(15, 15, 15, 0.9) 90%, rgb(15, 15, 15, 1) 100%)';
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    if (window.matchMedia("(max-width: 1024px) and (orientation: portrait)").matches) {
        const nextSlideImage = $('.slider .slick-track .slick-slide:nth-child(' + (nextSlide + 3) + ') img').attr('src');
        $('.wrapper-slider').css('background-image', nextSlideImage ? `${gradient}, url(${nextSlideImage})` : 'none');
        $('.wrapper-slider').css({
            'object-fit': 'cover',
            'background-size': 'cover'
        });
    } else {
        $('.wrapper-slider').css('background-image', 'none');
    }
});

// Инициализация фоновой картинки при загрузке страницы (только для мобильных)
let checkForSlider = setInterval(function() {
    if (window.matchMedia("(max-width: 1024px) and (orientation: portrait)").matches) {
        const firstImage = $('.slider .slick-center img');
        if (firstImage.length > 0) {
            const firstImageSrc = firstImage.attr('src');
            if (firstImageSrc) {
                $('.wrapper-slider').css({
                    'background-image': `${gradient}, url(${firstImageSrc})`,
                    'object-fit': 'cover',
                    'background-size': 'cover'
                });
            }
            return; // Выходим из функции, если фон установлен
        }
    } else {
        $('.wrapper-slider').css('background-image', 'none');
    }
}, 100);
// ЗАКРЫТИЕ УСТАНОВКИ КАРТИНКИ НА ФОН В МОБИЛЬНОЙ ВЕРСИИ

  // СВАЙПЫ НАЗАД В МОБИЛЬНОМ ВЕРСИИ 
  $(document).ready(function() {
      let touchstartX = 0;
      let touchendX = 0;

      document.addEventListener('touchstart', function(event) {
          if (window.innerWidth <= 1024 && window.matchMedia("(orientation: portrait)").matches) { // Проверка на мобильную версию
              touchstartX = event.changedTouches[0].screenX;
          }
      });

      document.addEventListener('touchend', function(event) {
          if (window.innerWidth <= 1024 && window.matchMedia("(orientation: portrait)").matches) {
              touchendX = event.changedTouches[0].screenX;
              handleGesture();
          }
      });

      function handleGesture() {
          const diffX = touchendX - touchstartX;
          const threshold = 50; // Порог для определения свайпа

          if (Math.abs(diffX) > threshold) {
              if (diffX > 0) { // Свайп слева направо
                  // Проверяем видимость элементов
                  const backButton = $('#btn-back-mobile');
                  const navBack = $('.nav-btn-back-mobile');
                  const genreResults = $('.genre-results-container');
                  const SearchResults = $('.search-results-container');
                  const CollectionResults = $('.collections-results-container');
                  if (navBack.hasClass('visible') && genreResults.hasClass('visible') || navBack.hasClass('visible') && SearchResults.hasClass('visible') || navBack.hasClass('visible') && CollectionResults.hasClass('visible')) {
                      backButton.click();
                  }
              }
          }
      }
  });
  // ЗАКРЫТИЕ СВАЙПОВ НАЗАД В МОБИЛЬНОМ ВЕРСИИ 

// ЭФФЕТ ЗАТЕМНЕНИЯ ПРИ НАЖАТИИ НА МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ
$('#home-toggle, #search-toggle, #collection-toggle').on('click', () => {
    const overlay = $('#overlay');
    overlay.css('opacity', 1).css('display', 'block'); // Устанавливаем сначала видимость
    // Плавно анимируем opacity затемнения
    overlay.animate({
        opacity: 1
    }, 10, () => {
        // Прокручиваем страницу к верху
        $("html, body").animate({
            scrollTop: 0
        }, 0, () => {
            // Плавно скрываем затемнение
            overlay.animate({
                opacity: 0
            }, 10, () => {
                overlay.css('display', 'none'); // Скрываем элемент
            });
        });
    });
});

$('#home-toggle, #search-toggle, #collection-toggle').on('click', () => $("html, body").animate({
    scrollTop: 0
}, 0));
// ЗАКРЫТИЕ ЭФФЕКТА ЗАТЕМНЕНИЯ ПРИ НАЖАТИИ НА МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ

// ЛОГИКА ДЛЯ КНОПОК МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ
// НАЖАТИЯ НА ДОМОЙ
$('#home-toggle').on('click', function() {
    // Скрытие элементов
    $(' .collection-name, .collect-name, .nav-btn-back, .nav-btn-back-mobile, .search-results-container, .collections-results-container, .collections, .genre-results-container, .genres').removeClass('visible').addClass('hidden').css('opacity', 0);
    $('.search_form').css('display', 'none').css('opacity', 0);
    // Очистка содержимого
    $('.search-results-container, .collections-results-container, .genre-results-container').empty();
    // Показать элементы
    $('#ppb-1, .wrapper-slider, .ppb-4, .top-content, .info__mobile').removeClass('hidden').addClass('visible').css('display', 'flex').css('opacity', 1);
});

// НАЖАТИЕ НА ПОИСК
$('#search-toggle').on('click', function() {
    $('.search-results-container, .collections-results-container, .genre-results-container').empty();
    // Скрытие элементов
    $('.wrapper-slider, #ppb-1, .info__mobile, .nav-btn-back-mobile, #ppb-4, .nav-btn-back, .collections-results-container, .top-content, .collection-name, .collections').removeClass('visible').addClass('hidden').css('opacity', 0);
    $(".collection-name .name").text("ПО ЖАНРАМ (случайная подборка)");
    // Показать элементы
    $('.search_form, .genres, .collection-name').removeClass('hidden').addClass('visible').css('display', 'flex').css('opacity', 1);
});

// НАЖАТИЕ НА ПОДБОРКИ
$('#collection-toggle').on('click', function() {
    $(".collection-name .name").text("ПОДБОРКИ");
    $('.search-results-container, .collections-results-container, .genre-results-container').empty();
    // Скрытие элементов
    $('.ppb-1, .wrapper-slider, .search_form, .ppb-4, .nav-btn-back-mobile, .search-results-container, .collections-results-container, .top-content, .genre-results-container, .genres').removeClass('visible').addClass('hidden').css('opacity', 0);
    // Показать элементы
    $('.collection-name, .collections').removeClass('hidden').addClass('visible').css('opacity', 1);
});

// НАЖАТИЕ НА КНОПКУ НАЗАД В МОБИЛЬНОЙ ВЕРСИИ
$('#btn-back-mobile').on('click', function() {
    // Очищаем содержимое
    $('.search-results-container, .collections-results-container, .genre-results-container').empty();
    if ($('.collections-results-container').hasClass('visible')) {
        $(".collection-name .name").text("ПОДБОРКИ");
        // Скрытие элементов
        $('.nav-btn-back-mobile, .collections-results-container').removeClass('visible').addClass('hidden').css('opacity', 0);
        // Показать элементы
        $('.collections, .collection-name').removeClass('hidden').addClass('visible').css('display', 'flex').css('opacity', 1);
    };

    if ($('.genre-results-container, .search-results-container').hasClass('visible')) {
        $(".collection-name .name").text("ПО ЖАНРАМ (случайная подборка)");
        // Скрытие элементов
        $('.nav-btn-back-mobile, .genre-results-container, .search-results-container').removeClass('visible').addClass('hidden').css('opacity', 0);
        // Показать элементы
        $('.genres, .collection-name').removeClass('hidden').addClass('visible').css('display', 'flex').css('opacity', 1);
    };
});
// ЗАКРЫТИЕ ЛОГИКИ ДЛЯ КНОПОК МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ

// КНОПКИ МЕНЮ В ВЕБ ВЕРСИИ
$(document).ready(function() {
    function checkHidden() {
        console.log('Тугл');
        $('#search-results, #collections-results, #genre-results').empty();
        $('#search-results, .nav-btn-back, #collections-results, .collect-name, #genre-results').not('.hidden').animate({
            opacity: 1
        }, 50, function() {
            $(this).addClass('hidden').removeClass('visible').css('opacity', 0);
        });
    }

    $('#btn-home').on('click', function() {
        checkHidden(); // Проверка и скрытие элементов
        $('.top-content').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
            opacity: 1
        }, 700);
        $('.collection-name, .collections, .genres').animate({
            opacity: 10
        }, 0, function() {
            $(this).addClass('hidden').removeClass('visible').css('opacity', 1);
        });
    });

    $('#btn-collections').on('click', function() {
        $(".collection-name .name").text("ПОДБОРКИ");
        checkHidden(); // Проверка и скрытие элементов
        $('#search-results, #collections-results, #genre-results,.top-content, .genres, .collect-name, .nav-btn-back').css('opacity', 1).animate({
            opacity: 0
        }, 50).addClass('hidden').removeClass('visible');
        $('.collection-name, .collections').css('opacity', 0).animate({
            opacity: 1
        }, 50).removeClass('hidden').addClass('visible');
    });

    $('#btn-genres').on('click', function() {
        $(".collection-name .name").text("ПО ЖАНРАМ (случайная подборка)");
        checkHidden(); // Проверка и скрытие элементов
        // Скрываем
        $('#search-results, #collections-results, #genre-results,.top-content, .collections, .collect-name, .nav-btn-back').css('opacity', 1).animate({
            opacity: 0
        }, 50).addClass('hidden').removeClass('visible');
        // Показываем
        $('.collection-name, .genres').css('opacity', 0).animate({
            opacity: 1
        }, 50).removeClass('hidden').addClass('visible');
    });

    // Обработка нажатия кнопки возврата
    $('#btn-back').on('click', function() {
        // Проверяем, есть ли visible
        if ($('.collections-results-container').hasClass('visible')) {
            $('#collections-results').empty();
            $(".collection-name .name").text("ПОДБОРКИ");
            $('.collections-results-container, .nav-btn-back, .collect-name').removeClass('visible').addClass('hidden').css('opacity', 1).animate({
                opacity: 0
            }, 200);
            $('.collections, .collection-name').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                opacity: 1
            }, 200);
        }

        if ($('#search-results').hasClass('visible')) {
            $('#search-results').empty();
            $('.nav-btn-back, #search-results, .collection-name, .collect-name').removeClass('visible').addClass('hidden').css('opacity', 1).animate({
                opacity: 0
            }, 200);
            $('.top-content').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                opacity: 1
            }, 200);
        }
        if ($('#genre-results').hasClass('visible')) {
            // $(".collection-name .name").text("ПО ЖАНРАМ (случайная подборка)");
            $('#genre-results').empty();
            $('#genre-results, .collect-name, .nav-btn-back').removeClass('visible').addClass('hidden').css('opacity', 1).animate({
                opacity: 0
            }, 200);
            $('.genres, .collection-name').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                opacity: 1
            }, 200);
        }

    });
});
// ЗАКРЫТИЕ КНОПКИ МЕНЮ В ВЕБ ВЕРСИИ

      // ПОДГРУЗКА В СЛАЙДЕР
      // УСТАНОВКИ РАЗМЕРА ПОСТЕРОВ В СЛАЙДЕРЕ
                 function setSliderHeight() {
                    const containerWidth = $('.slider .poster').width();
                    const aspectRatio = 2 / 3;
                    const maxHeight = containerWidth / aspectRatio;
                    // Удаляем старые стили высоты перед установкой новых
                    $('.slider .poster img:not(.rating img)').css('height', '');
                    $('.slider .poster img:not(.rating img)').each(function() {
                      $(this).css({
                           height: maxHeight + 'px',
                          width: containerWidth + 'px',
                      'object-fit': 'cover'
                   });
                  });
                 }

               // Обработчики событий для изменения размера окна и ориентации
                $(window).on('resize orientationchange', function() {
                 // Небольшая задержка для того, чтобы браузер успел перерисовать layout
                 setTimeout(setSliderHeight, 100); 
                 });
                  // ЗАКРЫТИЕ УСТАНОВКИ РАЗМЕРА ПОСТЕРОВ В СЛАЙДЕРЕ

      function topMovie(response) {
        if (response.data && Array.isArray(response.data)) {
          let html = '';
          for (let key in response.data) {
            const id = response.data[key][0];
            const id_kp = response.data[key][1];
            const movieTitle = response.data[key][3];
            const year = response.data[key][4];
            const quality = response.data[key][5];
            const kpRating = response.data[key][6];
            const imdbRating = response.data[key][7];
            const genre = response.data[key][8];
            // const imageUrl = Poster + id_kp + ".jpg";
            const imageUrl = id_kp === "null" ? "img/no_poster.png" : Poster + id_kp + ".jpg";
            const urlMovie = urlMovieOne +id+urlMovieTwo + movieTitle + "&year=" + year;
            const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1)}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1)}</span></div>` : '');
            // const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : '');
                  html += `
                    <div class="slider__item">
                        <div class="poster">
                            <a href="${urlMovie}" target="_blank">
                                <img src="${imageUrl}" alt="${movieTitle}">
                                ${rating}
                            </a>
                        </div>
                        <div class="title"><a href="${urlMovie}" target="_blank"><p>${movieTitle}</p></a></div>
                        <div class="year" alt="${year}">${year}</div>
                    </div>`;
                   }
                  document.getElementById('slider').innerHTML = html;

               function initializeSlider() {
               // Удаляем предыдущий инициализированный слайдер, если он существует
              if ($('.slider').hasClass('slick-initialized')) {
                  $('.slider').slick('unslick');
                   }
                  let slickSettings = { ...settings.default }; // Создаем копию default настроек
                  // Находим соответствующие настройки на основе медиа-запроса
                  const matchedQuery = mediaQueries.find(item => window.matchMedia(item.query).matches);
                if (matchedQuery) {
                 // Объединяем default настройки с настройками из найденного медиа-запроса
                   slickSettings = { ...slickSettings, ...settings[matchedQuery.key] };
                    }

                $('.slider').slick(slickSettings);
                   console.log(matchedQuery.key);
                 }

                $(document).ready(() => {
                    initializeSlider();
                   });

                  // Обработка изменения размеров окна
                     $(window).on('resize orientationchange', () => {
                            initializeSlider();
                          });

                 // Удаление анимации загрузки
                 setTimeout(function() {
                    setSliderHeight();
                    // Сразу заменяем текст при загрузке страницы
                    const title = $('.slick-slide[data-slick-index="0"] img').attr('alt');
                    const year = $('.slick-slide[data-slick-index="0"] .year').attr('alt');
                    const altTitle = document.querySelector('.title__mobile p');
                    const altYear = document.querySelector('.year__mobile p');
                    altTitle.textContent = title;
                    altYear.textContent = year;
                             }, 100);
                     } else {
                        console.error('Invalid data format:', response.data);
                      }
                    }

            // ЗАПРОС ТОП КОНТЕНТА В ГЛАВНЫЙ СЛАЙДЕР
         function makeRequestTopMovie() {
          scriptUrl = decoder(scriptPart.join('')) + `topMovie=Случайная новинка&callback=topMovie`;
                  $.getScript(scriptUrl);
                  }
           // ЗАКРЫТИЕ ЗАПРОСА ТОП КОНТЕНТА В ГЛАВНЫЙ СЛАЙДЕР
           // ИНЦИЛИЩАЦИЯ ТЕКСТА СТАРТОВОЙ ЗАГРУЗКИ, ЗАПУСКА ФУНКЦИЙ В ГЛАВНЫЙ СЛАДЙЕР И В 5 СЛАЙДЕРОВ
              window.onload = function() {
                  startTextCycle()
                  makeRequestTopMovie();
                  makeRequestFiveSliders();
                  };
           // ЗАКРЫТИЕ ИНЦИЛИЩАЦИИ ТЕКСТА СТАРТОВОЙ ЗАГРУЗКИ, ЗАПУСКА ФУНКЦИЙ В ГЛАВНЫЙ СЛАДЙЕР И В 5 СЛАЙДЕРОВ

     // ЗАКРЫТИЕ ПОДГРУЗКА В СЛАЙДЕР

    // УСТАНОВКИ РАЗМЕРА ПОСТЕРОВ В РЕЗУЛЬТАТЕ ПОИСКА
                function setSearchHeight() {
                    const containerWidth = $('.search-result-row .poster').width();
                     const aspectRatio = 2 / 3;
                    const maxHeight = containerWidth / aspectRatio;
                // Удаляем старые стили высоты перед установкой новых
                  $('.search-result-row .poster img:not(.rating img)').css('height', '');
                  $('.search-result-row .poster img:not(.rating img)').each(function() {
                    $(this).css({
                     'height': maxHeight + 'px',
                      'width': containerWidth + 'px',
                      'object-fit': 'cover'
                       });
                     });
                    }

                // Обработчики событий для изменения размера окна и ориентации
                $(window).on('resize orientationchange', function() {
                  // Небольшая задержка для того, чтобы браузер успел перерисовать layout
                   setTimeout(setSearchHeight, 100); 
                });
                // ЗАКРЫТИЕ УСТАНОВКИ РАЗМЕРА ПОСТЕРОВ В РЕЗУЛЬТАТЕ ПОИСКА

      // РЕЗУЛЬТАТ ПОИСКА
      $(document).ready(function() {
          $('#search-form').on('submit', function(event) {
              event.preventDefault(); // Предотвращаем стандартное поведение формы
              var searchValue = $('#search-input').val(); // Получаем значение из поля ввода
              console.log(searchValue);
              $('#search-results, #collections-results, #genre-results').empty();
              $('.genres, .top-content, .genres, .collections, .collections-results-container, .genre-results-container').removeClass('visible').addClass('hidden').css('opacity', 1).animate({
                  opacity: 0
              }, 200);

              if (!searchValue) {
                  console.log("Поле ввода пустое");
                  // Если ничего не найдено, выводим сообщение
                  $('#search-results').html('<div class="msg" style="text-align: center; margin: 10px; display: flex; flex-direction: column;"><h2>Введите название</h2></div>');

                  // Плавно показываем результаты поиска и кнопку назад
                  $('.search-results-container').css('opacity', 0).animate({
                      opacity: 1
                  }, 200).removeClass('hidden').addClass('visible');

                  if (window.innerWidth > 719 && window.matchMedia("(orientation: landscape)").matches) {
                      // console.log("Ширина экрана больше 1024px");
                      $(".collect-name  .name").text("РЕЗУЛЬТАТ ПОИСКА");
                      $('.collect-name').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                          opacity: 1
                      }, 200);
                      $('.collection-name').removeClass('visible').addClass('hidden').css('opacity', 1).animate({
                          opacity: 0
                      }, 200);
                      $('.search-results-container, .nav-btn-back').css('opacity', 0).animate({
                          opacity: 1
                      }, 200).removeClass('hidden').addClass('visible');
                  } else {
                      // console.log("Ширина экрана 1024px или меньше");
                      $(".nav-btn-back-mobile .name").text("РЕЗУЛЬТАТ ПОИСКА");
                      $('.search-results-container, .nav-btn-back-mobile').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                          opacity: 1
                      }, 200);
                      $('.collection-name, .genres').removeClass('visible').addClass('hidden').css('opacity', 0).animate({
                          opacity: 1
                      }, 200);
                  }
                  // Прокручиваем к результатам
                  var scrollToPosition = $('#search-results').offset().top - ($(window).height() / 2) + ($('#search-results').outerHeight() / 2);
                  $('html, body').animate({
                      scrollTop: scrollToPosition
                  }, 1000);
                  return;
              }

              var searchName = encodeURIComponent(searchValue); // Кодируем имя списка для передачи в URL
              $('#search-input').val('');

              // Удаляем предыдущие результаты поиска
              $('#search-results, #collections-results, #genre-results').empty();
              var $resultsContainer = $('.search-results-container');
              var $navBack = $('.nav-btn-back');
              if ($resultsContainer.hasClass('hidden')) {

                  if (window.innerWidth > 419 && window.matchMedia("(orientation: landscape)").matches) {
                      // console.log("Ширина экрана больше 1024px");
                      $(".collect-name  .name").text("РЕЗУЛЬТАТ ПОИСКА");
                      $('.collect-name').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                          opacity: 1
                      }, 200);
                      $('.collection-name').removeClass('visible').addClass('hidden').css('opacity', 1).animate({
                          opacity: 0
                      }, 200);
                      $('.search-results-container, .nav-btn-back').css('opacity', 0).animate({
                          opacity: 1
                      }, 200).removeClass('hidden').addClass('visible');
                  } else {
                      // console.log("Ширина экрана 1024px или меньше");
                      $(".nav-btn-back-mobile .name").text("РЕЗУЛЬТАТ ПОИСКА");
                      $('.search-results-container, .nav-btn-back-mobile').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                          opacity: 1
                      }, 200);
                      $('.collection-name, .genres').removeClass('visible').addClass('hidden').css('opacity', 0).animate({
                          opacity: 1
                      }, 200);
                  }
                  $('.genre-results-container').css('opacity', 1).animate({
                      opacity: 0
                  }, 200).removeClass('visible').addClass('hidden');
              }
              // Вставляем анимацию загрузки в контейнер
              $('#search-results').html(loader);

              // Прокручиваем к результатам
              var scrollToPosition = $('#search-results').offset().top - ($(window).height() / 2) + ($('#search-results').outerHeight() / 2);
              $('html, body').animate({
                  scrollTop: scrollToPosition
              }, 700);

              // Создаем URL для запроса
              scriptUrl = decoder(scriptPart.join('')) + `searchName=${searchName}&callback=searchTitle`;
              // Создаем элемент скрипта
              $.getScript(scriptUrl); // Используем jQuery для получения скрипта
          });
      });


      function searchTitle(response) {
          console.log(response);
          $('#search-results').empty();
          if (!response.data.length) {
              $('#search-results').html('<div class="msg" style="text-align: center; margin: 10px; display: flex; flex-direction: column;"><h2>НИЧЕГО НЕ НАЙДЕНО</h2><p>Возможно, вы ввели название с ошибкой, или контент отсутствует в базе.</p></div>');
              if (window.innerWidth > 419 && window.matchMedia("(orientation: landscape)").matches) {
                  // console.log("Ширина экрана больше 1024px");
                  $(".collect-name  .name").text("РЕЗУЛЬТАТ ПОИСКА");
                  $('.collection-name').css('opacity', 1).animate({
                      opacity: 0
                  }, 200).addClass('hidden').removeClass('visible');
                  $('.search-results-container, .nav-btn-back, .collect-name').css('opacity', 0).animate({
                      opacity: 1
                  }, 200).removeClass('hidden').addClass('visible');
              } else {
                  // console.log("Ширина экрана 1024px или меньше");
                  $(".nav-btn-back-mobile .name").text("РЕЗУЛЬТАТ ПОИСКА");
                  $('.search-results-container, .nav-btn-back-mobile').removeClass('hidden').addClass('visible').css('opacity', 0).animate({
                      opacity: 1
                  }, 200);
                  $('.collection-name, .genres').removeClass('visible').addClass('hidden').css('opacity', 0).animate({
                      opacity: 1
                  }, 200);
              }
              return;
          }

          const createMovieHTML = (item) => {
              const [id, id_kp, type, movieTitle, year, quality, kpRating, imdbRating, genre] = item;
              const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1)}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1)}</span></div>` : '');
              // const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : '');
              const imageUrl = id_kp === "null" ? "img/no_poster.png" : Poster + id_kp + ".jpg";
              // const imageUrl = Poster + id_kp + ".jpg";
              const urlMovie = urlMovieOne +id+urlMovieTwo + movieTitle + "&year=" + year;

              return `
            <div class="search-result-row">
                <div class="poster">
                    <a href="${urlMovie}" target="_blank">
                        <img src="${imageUrl}" alt="${movieTitle}">
                        ${rating}
                        <div class="play"><i class="fas fa-play"></i></div>
                    </a>
                </div>
                <div class="info">
                    <div class="title"><a href="${urlMovie}" target="_blank"><p>${movieTitle}</p></a></div>
                    <div class="year"><p>${year}</p></div>
                    <div class="genre"><p>${genre}</p></div>
                </div>
            </div>
        `;
          };

          response.data.forEach(item => $('#search-results').append(createMovieHTML(item)));
          setSearchHeight()
          $('#search-results .loader-new').remove();
      }
      // ЗАКРЫТИЕ РЕЗУЛЬТАТА ПОИСКА

            // 5 СЛАЙДЕРОВ
     function makeRequestFiveSliders() {
      scriptUrl = decoder(scriptPart.join('')) + 'fiveSliders=топ контент&callback=fiveSliders';
        $.getScript(scriptUrl);
      }
           

      function fiveSliders(response) {
           const sliderData = {
           "films": response.movies.data,
           "series": response.series.data,
           "cartoon": response.cartoon.data,
           "cartoon-series": response.cartoonSeries.data,
           "anime": response.anime.data,
           "anime-tv-series": response.animeSeries.data,
           "tv-show": response.tvShows.data
             };
           for (let i = 0; i < sliderTypes.length; i++) {
                const type = sliderTypes[i];
                const selector = sliderSelectors[i];
                 const data = sliderData[type];
                 let sliderHTML = ``;
                data.forEach(item => {
                 const id = item[0];
                 const id_kp = item[1];
                 const movieTitle = item[3];
                 const year = item[4];
                 const kpRating = item[6];
                 const imdbRating = item[7];
                 const genre = item[8]; // Добавлено genre
                 // const imageUrl = Poster + id_kp + ".jpg";
                 const imageUrl = id_kp === "null" ? "img/no_poster.png" : Poster + id_kp + ".jpg";
                 const urlMovie = urlMovieOne +id+urlMovieTwo + movieTitle + "&year=" + year;
                 const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1)}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1)}</span></div>` : '');
                 // const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : '');
                 sliderHTML += `
                 <div class="slider-${type}__item">
                   <div class="poster">
                    <a href="${urlMovie}" target="_blank">
                     <img src="${imageUrl}" alt="${movieTitle}">
                     ${rating}
                    <div class="play" ><i class="fas fa-play"></i></div>
                   </a>
                  </div>
                 <div class="title"><a href="${urlMovie}" target="_blank"><p>${movieTitle}</p></a></div>
                 <div class="year">${year}</div>
                 <div class="genre">${genre}</div> </div>`;
            });
                    var sel = document.getElementById(`${selector}`)
                    document.getElementById(`${selector}`).innerHTML = sliderHTML;
              $(`#${selector}`).html(sliderHTML); // Используем # для ID селектора
                 initializeAllSliders(`#${selector}`);
        };

          setFiveSlidersHeight()
          // УДАЛЕНИЕ ПЕРВОНАЧАЛЬНОЙ АНИМАЦИИ ПОСЛЕ ЗАГРУЗКИ ВСЕГО КОНТЕНТА
          setTimeout(function() {
            var firstLoader = document.querySelector('.firstLoader');
              if (firstLoader) {
              firstLoader.style.opacity = '0';
              setTimeout(function() {
                firstLoader.remove();
              }, 1200);
            }
        }, 1000);
 };
// ЗАКРЫТИЕ 5 СЛАЙДЕРОВ

             // ИНИЦИЛИЗАЦИЯ 5 СЛАЙДЕРОВ И ИЗМЕНЕНИЕ РАЗМЕРА ПОСТЕРОВ ПРИ ИЗМЕНЕНИИ РАЗМЕРА
          // Вызываем функцию при изменении размера окна и ориентации
           $(window).on('resize orientationchange', function() {
            for (let i = 0; i < sliderTypes.length; i++) {
                const type = sliderTypes[i];
                const selector = sliderSelectors[i];
                initializeAllSliders(`#${selector}`);
              }
             setFiveSlidersHeight()
            });
// ЗАКРЫТИЕ ИНИЦИЛИЗАЦИЯ 5 СЛАЙДЕРОВ И ИЗМЕНЕНИЕ РАЗМЕРА ПОСТЕРОВ ПРИ ИЗМЕНЕНИИ РАЗМЕРА

// ИНИЦИЛИЗАЦИЯ 5 СЛАЙДЕРОВ
   function initializeAllSliders() {
        sliderSelectors.forEach((selector, index) => {
        const type = sliderTypes[index];
        const $slider = $(`#${selector}`);

        // Unslick if already initialized
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }

        let matchedSettings = settingsFive.default;
        mediaQueriesFive.forEach(item => {
            if (window.matchMedia(item.query).matches) {
                matchedSettings = { ...settingsFive.default, ...settingsFive[item.key] };
            }
        });

        matchedSettings.appendArrows = $(`.arrows_${type}`);
        $slider.slick(matchedSettings);
    });
}
// ЗАКРЫТИЕ ИНИЦИЛИЗАЦИИ 5 СЛАЙДЕРОВ

// ИЗМЕНЕНИЕ РАЗМЕРА ПОСТЕРОВ В 5 СЛАЙДЕРАХ
         function setFiveSlidersHeight() {

       sliders.forEach(sliderClass => {
          const $posterImages = $(sliderClass + ' .poster img:not(.rating img)');
          const containerWidth = $(sliderClass + ' .poster').width();
          const aspectRatio = 2 / 3;
          const maxHeight = containerWidth / aspectRatio;

    // Удаляем старые стили высоты перед установкой новых -  более эффективно
    $posterImages.css('height', ''); // устанавливаем высоту в пустую строку

    $posterImages.css({
      height: maxHeight + 'px',
      width: containerWidth + 'px',
      'object-fit': 'cover'
    });
  });
}
// ЗАКРЫТИЕ ИЗМЕНЕНИЕ РАЗМЕРА ПОСТЕРОВ В 5 СЛАЙДЕРАХ
// ЗАКРЫТИЕ 5 СЛАЙДЕРОВ

      // ПОДБОРКИ
     function loadCollection(response) {
      var html = '';
      if (response.data.length === 0) {
        $('#collections-results').html('<h2 style="text-align: center; margin: 10px;">НИЧЕГО НЕ НАЙДЕНО</h2>');
        return;
    }
    
    $.each(response.data, function (key, value) {
        var id = value[0];
        var id_kp = value[1];
        var movieTitle = value[3];
        var year = value[4];
        var quality = value[5];
        var kpRating = value[6];
        var imdbRating = value[7];
        var genre = value[8];
        // const imageUrl = Poster + id_kp + ".jpg";
        const imageUrl = id_kp === "null" ? "img/no_poster.png" : Poster + id_kp + ".jpg";
        const urlMovie = urlMovieOne +id+urlMovieTwo + movieTitle + "&year=" + year;
        const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1)}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1)}</span></div>` : '');
        // const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : '');

  html += `
            <div class="collections-result-row">
        <div class="poster">
          <a href="${urlMovie}" target="_blank">
            <img src="${imageUrl}" alt="${movieTitle}">
            ${rating} 
            <div class="play" ><i class="fas fa-play"></i></div>
          </a>
        </div>
        <div class="info">
          <div class="title">
            <a href="${urlMovie}" target="_blank"><p>${movieTitle}</p></a>
          </div>
          <div class="year">
            <p>${year}</p>
          </div>
          <div class="genre">
            <p>${genre}</p>
          </div>
        </div>
      </div>`;
    });

$('#search-results .loader-new').remove();

    $('#collections-results').html(html);
    setCollectionsHeight()
    var scrollToPosition = $('.collect-name').offset().top - 20; // 50 пикселей от верхней части страницы
        $('html, body').animate({
            scrollTop: scrollToPosition
        }, 1000);
}

// УСТАНОВКА РАЗМЕРА ПОСТЕРОВ В ПОДБОРКАХ
function setCollectionsHeight() {
    const containerWidth = $('.collections-result-row .poster').width();
    const aspectRatio = 2 / 3;
    const maxHeight = containerWidth / aspectRatio;
// Удаляем старые стили высоты перед установкой новых
    $('.collections-result-row .poster img:not(.rating img)').css('height', '');
    $('.collections-result-row .poster img:not(.rating img)').each(function() {
        $(this).css({
            'height': maxHeight + 'px',
            'width': containerWidth + 'px',
            'object-fit': 'cover'
        });
    });
}
// ЗАКРЫТИЕ УСТАНОВКА РАЗМЕРА ПОСТЕРОВ В ПОДБОРКАХ

// ИЗМЕНЕНИЕ РАЗМЕРА ПОСТЕРОВ В ПОБОРКАХ ПРИ ИЗМЕНЕНИЕ РАЗМЕРА ОКНА
$(window).on('resize orientationchange', function() {
    setCollectionsHeight()
});
// ЗАКРЫТИЕ ИЗМЕНЕНИЕ РАЗМЕРА ПОСТЕРОВ В ПОБОРКАХ ПРИ ИЗМЕНЕНИЕ РАЗМЕРА ОКНА



// ПОЛУЧИТЬ ДАННЫЕ ПОДБОРОК
function makeRequestCollection(listName) {
$('#collections-results').html(loader);
    scriptUrl = decoder(scriptPart.join('')) + 'listName=' + listName + '&callback=loadCollection';
    $.getScript(scriptUrl);
    listName = decodeURI(listName);
    // document.title = listName + ' - смотреть онлайн';
    // $(".collection-name > h2").text(listName.toUpperCase());

if (window.innerWidth > 419 && window.matchMedia("(orientation: landscape)").matches) {
    console.log("Ширина экрана больше 719px");
    $(".collect-name .name").text("ПРО " + listName.toUpperCase());
    $('.collect-name, .nav-btn-back').removeClass('hidden').addClass('visible').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('.collection-name').removeClass('visible').addClass('hidden').css('opacity', 1).animate({ opacity: 0 }, 200);
} else {
    console.log("Ширина экрана 719px или меньше");
    $(".nav-btn-back-mobile .name").text("ПРО " + listName.toUpperCase());
    $('.nav-btn-back-mobile').removeClass('hidden').addClass('visible').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('.collection-name').removeClass('visible').addClass('hidden').css('opacity', 0).animate({ opacity: 1 }, 200);
}

    
    $('.collections-results-container').removeClass('hidden').addClass('visible').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('.collections').removeClass('visible').addClass('hidden').css('opacity', 1).animate({ opacity: 0 }, 200);

}
// ЗАКРЫТИЕ ПОЛУЧИТЬ ДАННЫЕ ПОДБОРОК

// НАЖАТИЯ НА ОДНУ ИЗ ПОДБДОРОК
$(document).on('click', '.collections-row .poster, .collections-row .title', function () {
    var listName = $(this).closest('.collections-row').find('.poster, .title').data('list-name');
    makeRequestCollection(listName);
});
// ЗАКРЫТИЕ НАЖАТИЯ НА ОДНУ ИЗ ПОДБДОРОК
// ЗАКРЫТИЕ ПОДБОРКИ

// ПОИСК ПО ЖАНРАМ
$(document).on('click', '.genre__item', function() {
  var genreName = $(this).attr('alt');
  console.log(genreName);
  makeRequestGenres(genreName);
});

function makeRequestGenres(genreName) {
    $('#genre-results').html(loader);

    scriptUrl = decoder(scriptPart.join('')) + 'genre=' + genreName + '&callback=loadGenres';
    $.getScript(scriptUrl);
    genreName = decodeURI(genreName);

    // document.title = listName + ' - смотреть онлайн';
    // $(".collection-name > h2").text(listName.toUpperCase());

if (window.innerWidth > 419 && window.matchMedia("(orientation: landscape)").matches) {
    console.log("Ширина экрана больше 719px");
    $(".collect-name  .name").text(genreName.toUpperCase());
    $('.collect-name, .nav-btn-back').removeClass('hidden').addClass('visible').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('.collection-name').removeClass('visible').addClass('hidden').css('opacity', 1).animate({ opacity: 0 }, 200);
} else {
    console.log("Ширина экрана 719px или меньше");
    $(".nav-btn-back-mobile .name").text(genreName.toUpperCase());
    $('.nav-btn-back-mobile').removeClass('hidden').addClass('visible').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('.collection-name').removeClass('visible').addClass('hidden').css('opacity', 0).animate({ opacity: 1 }, 200);
}

    $('.genre-results-container').removeClass('hidden').addClass('visible').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('.genres').removeClass('visible').addClass('hidden').css('opacity', 1).animate({ opacity: 0 }, 200);

}

function loadGenres(response) {
    var html = '';
    console.log(response);
    if (response.data.length === 0) {
        $('#genre-results').html('<h2 style="text-align: center; margin: 10px;">НИЧЕГО НЕ НАЙДЕНО</h2>');
        return;
    }
    
    $.each(response.data, function (key, value) {
        var id = value[0];
        var id_kp = value[1];
        var movieTitle = value[3];
        var year = value[4];
        var quality = value[5];
        var kpRating = value[6];
        var imdbRating = value[7];
        var genre = value[8];
        // const imageUrl = Poster + id_kp + ".jpg";
        const imageUrl = id_kp === "null" ? "img/no_poster.png" : Poster + id_kp + ".jpg";
        const urlMovie = urlMovieOne +id+urlMovieTwo + movieTitle + "&year=" + year;
        const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1)}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1)}</span></div>` : '');
        // const rating = kpRating ? `<div class="rating"><span class="r_kp">${parseFloat(kpRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : (imdbRating ? `<div class="rating"><span class="r_imdb">${parseFloat(imdbRating).toFixed(1).replace(/\.0$/, '')}</span></div>` : '');
  html += `
            <div class="genre-result-row">
        <div class="poster">
          <a href="${urlMovie}" target="_blank">
            <img src="${imageUrl}" alt="${movieTitle}">
            ${rating} 
            <div class="play" ><i class="fas fa-play"></i></div>
          </a>
        </div>
        <div class="info">
          <div class="title">
            <a href="${urlMovie}" target="_blank"><p>${movieTitle}</p></a>
          </div>
          <div class="year">
            <p>${year}</p>
          </div>
          <div class="genre">
            <p>${genre}</p>
          </div>
        </div>
      </div>`;
    });
$('#genre-results .loader-new').remove();

    $('#genre-results').html(html);
    setGenreHeight()
    var scrollToPosition = $('.collect-name').offset().top - 20; // 50 пикселей от верхней части страницы
        $('html, body').animate({
            scrollTop: scrollToPosition
        }, 1000);
}
function setGenreHeight() {
    const containerWidth = $('.genre-result-row .poster').width();
    const aspectRatio = 2 / 3;
    const maxHeight = containerWidth / aspectRatio;
    $('.genre-result-row .poster img:not(.rating img)').css('height', '');
    $('.genre-result-row .poster img:not(.rating img)').each(function() {
        $(this).css({
            'height': maxHeight + 'px',
            'width': containerWidth + 'px',
            'object-fit': 'cover'
        });
    });
}

$(window).on('resize orientationchange', function() {
    // Небольшая задержка для того, чтобы браузер успел перерисовать layout
    setTimeout(setGenreHeight, 100); 
});
// ЗАКРЫТИЕ ПОИСК ПО ЖАНРАМ

      // УСТАНАВЛИВАЕМ ГОД
     document.addEventListener("DOMContentLoaded", function() {
       const yearSpan = document.getElementById('current-year');
       const currentYear = new Date().getFullYear();
       yearSpan.textContent = currentYear;
    });
// ЗАКРЫТИЕ УСТАНАВЛИВАЕМ ГОД

// ПОЯВЛЕНИЯ ИСЧЕЗНОВЕНИЯ DMCA И СОЦ СЕТЕЙ В МОБИЛЬНОЙ ВЕРСИИ
$(document).ready(function() {
    $('#dmca-mobile-button, #dmca-button').click(function(event) {
        // console.log('Клик!');
        event.stopPropagation();
        $('.dmca-info').toggleClass('show');
    });

    $('.dmca-info').click(function(event) {
        event.stopPropagation();
    });

    $('#social-menu-button').click(function(event) {
        event.stopPropagation();
        $('.mobile-social_icons').toggleClass('show');
    });

    $('.mobile-social_icons').click(function(event) {
        event.stopPropagation();
    });

    $(document).click(function(event) {
        if ($('.dmca-info').hasClass('show') && !$(event.target).is('.dmca-info, #dmca-menu-button, #dmca-button *')) {
            $('.dmca-info').removeClass('show');
        }
        if ($('.mobile-social_icons').hasClass('show') && !$(event.target).is('.mobile-social_icons, #social-menu-button *')) {
            $('.mobile-social_icons').removeClass('show');
        }
    });
});
// ЗАКРЫТИЕ ПОЯВЛЕНИЯ ИСЧЕЗНОВЕНИЯ DMCA И СОЦ СЕТЕЙ В МОБИЛЬНОЙ ВЕРСИИ

// ДЕКОДИРОВАТЬ ССЫЛКИ
function decoder(scriptPart) {
    // Замените `-` на `+` и `_` на `/`
    let str = scriptPart.replace(/-/g, '+').replace(/_/g, '/');

    // Добавьте padding, если необходимо
    switch (str.length % 4) {
        case 1:
            str += '===';
            break;
        case 2:
            str += '==';
            break;
        case 3:
            str += '=';
            break;
    }

    // Декодируем строку
    return atob(str);
}
// ЗАКРЫТИЕ ДЕКОДИРОВАТЬ ССЫЛКИ

      document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Запретить контекстное меню
});

document.addEventListener('keydown', function(event) {
    // Запретить сочетания клавиш для открытия меню разработчика
    if (event.ctrlKey && (event.key === 'Shift' && event.keyCode === 73) || // Ctrl + Shift + I
        (event.key === 'I' && event.ctrlKey) || // Ctrl + I
        (event.ctrlKey && event.key === 'U') || // Ctrl + U
        (event.key === 'F12') || // F12
        (event.ctrlKey && event.key === 'J') // Ctrl + J
    ) {
        event.preventDefault(); // Запретить действие по умолчанию
    }
});

// Также можно добавить запрет на использование правых кнопок мыши в некоторых элементах
document.addEventListener('keydown', function(event) {
    // Запретить сочетание Alt + F12 для открытия меню разработчика
    if (event.altKey && (event.key === 'F12')) {
        event.preventDefault();
    }
});
