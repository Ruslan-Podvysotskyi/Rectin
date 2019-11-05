// $('.multiple-items').slick({
//   draggable: false,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   dots: false,
//   nav: true,
//   focusOnSelect: true,
//   variableWidth: true,
//   speed: 0,
//   responsive: [
//     {
//       breakpoint: 1023,
//       settings: {
//         slidesToShow: 1,
//       }
//     }
//   ]
// });

$('.slider-for').slick({
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true
});

$('#js_preview-prev').click(function (e) {
  e.preventDefault();
  $('.slider-for').slick("slickPrev");
  let current = $('.slider-for').slick("slickCurrentSlide");
  let a = 0, b = 0;

  if (current == 0) {
    a = 2;
    b = 1;
  }
  if (current == 1) {
    a = 0;
    b = 2;
  }
  if (current == 2) {
    a = 1;
    b = 0;
  }

  let wrapP = document.querySelectorAll('.slide')[a];

  let nameP = wrapP.querySelector('.name').innerHTML;
  $('#js_preview-prev .full-name').html(nameP);

  let imgP = wrapP.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-prev .imgP').html('<img src="'+imgP+'" alt="">');

  let wrapN = document.querySelectorAll('.slide')[b];

  let nameN = wrapN.querySelector('.name').innerHTML;
  $('#js_preview-next .full-name').html(nameN);

  let imgN = wrapN.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-next .imgP').html('<img src="'+imgN+'" alt="">');

});

$('.slick-prev').click(function () {
  let current = $('.slider-for').slick("slickCurrentSlide");
  let a = 0, b = 0;

  if (current == 0) {
    a = 2;
    b = 1;
  }
  if (current == 1) {
    a = 0;
    b = 2;
  }
  if (current == 2) {
    a = 1;
    b = 0;
  }

  let wrapP = document.querySelectorAll('.slide')[a];

  let nameP = wrapP.querySelector('.name').innerHTML;
  $('#js_preview-prev .full-name').html(nameP);

  let imgP = wrapP.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-prev .imgP').html('<img src="'+imgP+'" alt="">');

  let wrapN = document.querySelectorAll('.slide')[b];

  let nameN = wrapN.querySelector('.name').innerHTML;
  $('#js_preview-next .full-name').html(nameN);

  let imgN = wrapN.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-next .imgP').html('<img src="'+imgN+'" alt="">');

});

$('#js_preview-next').click(function (e) {
  e.preventDefault();
  $('.slider-for').slick("slickNext");
  let current = $('.slider-for').slick("slickCurrentSlide");
  let a = 0, b = 0;

  if (current == 0) {
    a = 1;
    b = 2;
  }
  if (current == 1) {
    a = 2;
    b = 0;
  }
  if (current == 2) {
    a = 0;
    b = 1;
  }

  let wrapP = document.querySelectorAll('.slide')[b];

  let nameP = wrapP.querySelector('.name').innerHTML;
  $('#js_preview-prev .full-name').html(nameP);

  let imgP = wrapP.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-prev .imgP').html('<img src="'+imgP+'" alt="">');

  let wrapN = document.querySelectorAll('.slide')[a];

  let nameN = wrapN.querySelector('.name').innerHTML;
  $('#js_preview-next .full-name').html(nameN);

  let imgN = wrapN.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-next .imgP').html('<img src="'+imgN+'" alt="">');
});

$('.slick-next').click(function () {
  let current = $('.slider-for').slick("slickCurrentSlide");
  let a = 0, b = 0;

  if (current == 0) {
    a = 1;
    b = 2;
  }
  if (current == 1) {
    a = 2;
    b = 0;
  }
  if (current == 2) {
    a = 0;
    b = 1;
  }

  let wrapP = document.querySelectorAll('.slide')[b];

  let nameP = wrapP.querySelector('.name').innerHTML;
  $('#js_preview-prev .full-name').html(nameP);

  let imgP = wrapP.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-prev .imgP').html('<img src="'+imgP+'" alt="">');

  let wrapN = document.querySelectorAll('.slide')[a];

  let nameN = wrapN.querySelector('.name').innerHTML;
  $('#js_preview-next .full-name').html(nameN);

  let imgN = wrapN.querySelector('.doc-img').getAttribute('src');
  $('#js_preview-next .imgP').html('<img src="'+imgN+'" alt="">');
});







// var sliderReviews = $('.slider-for');
// var slidesCount = 0;
// var prevSlideIndex = 0;
// var nextSlideIndex = 0;
// var previewPrev = $("#js_preview-prev");
// var previewNext = $("#js_preview-next");


// sliderReviews.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
//   $(".slide-content").removeClass("slide-content-active");
// });


// sliderReviews.on("init", function (event, slick) {
//   slidesCount = slick.$slides.length;
//   prevSlideIndex = slidesCount - 1;
//   nextSlideIndex = 1;
// });

// sliderReviews.slick({
//   center: true,
//   dots: true,
//   arrows: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });

// previewPrev.click(function (e) {
//   e.preventDefault();
//   sliderReviews.slick('slickPrev');
// });

// previewNext.click(function (e) {
//   e.preventDefault();
//   sliderReviews.slick('slickNext');
// });

// sliderReviews.on("afterChange", function (event, slick, currentSlide) {
//   prevSlideIndex = currentSlide - 1;
//   nextSlideIndex = currentSlide + 1;

//   if (currentSlide === slidesCount - 1) {
//     nextSlideIndex = 0;
//   }
//   if (currentSlide === 0) {
//     prevSlideIndex = slidesCount - 1;
//   }
//   previewPrev.html(getPreview(prevSlideIndex));
//   previewNext.html(getPreview(nextSlideIndex));
// });

// function getPreview(index) {
//   var slide = $("#slick-slide0" + index);

//   if (slide.length) {
//     var name = slide.find(".slide__img .name").attr("title");
//     var nameHtml = '<p class="name">' + name + "</p>";
//     var photoSrc = slide.find(".slide__img .review").attr("src");
//     var photoHtml = '<img src="' + photoSrc + '" alt="review" class="review">';
//   }
//   return (
//     '<div class="preview-item__content">' + photoHtml + nameHtml + "</div>"
//   );
// }
