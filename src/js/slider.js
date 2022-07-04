  const swiper_gallery = new Swiper('.gallery-slider', {
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    pagination: {
      el: '.swiper-pagination-gallery',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1720: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  })
  
  // const swiper = new Swiper('.brand-slider', {
  //     pagination: {
  //       el: '.swiper-pagination-brand',
  //       clickable: true,
  //     },
  //     autoplay: {
  //       delay: 5000,
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //         spaceBetween: 10,
  //       },
  //       480: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       720: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },
  //       900: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },
  //       1440: {
  //         slidesPerView: 5,
  //         spaceBetween: 20,
  //       },
  //       1720: {
  //         slidesPerView: 6,
  //         spaceBetween: 30,
  //       },
  //     },
  //   });