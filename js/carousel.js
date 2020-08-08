$(document).ready(function() {
 

  // $('.slick-center').slick({
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   focusOnSelect: false,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '60px',
  //         focusOnSelect: false,
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '60px',
  //         focusOnSelect: false,
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
  
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000,
    breakpoints: {
      600: {
        perView: 1,
      },
      400: {
      perView: 1,
      }
    }
  }).mount()


});