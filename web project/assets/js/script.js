// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//       items: 1
//     });
//   });

//   $("#slider-area").owlCarousel({
//     loop: true,
//     // margin: 10,
//     nav: true,
//     autoplay: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       1000: {
//         items: 1,
//       },
//     },
//   });

// *********************

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
  });
});

$("#slider-area").owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  dots: false,
  autoplay: true,
  // autoplayTimeout:2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#news-slider").owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  dots: true,
  autoplay: false,
  // autoplayTimeout:2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
