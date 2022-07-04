// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	if (window.innerWidth > 768) {
// 		document.querySelectorAll('.section').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('ul').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('ul li').forEach((el) => {
// 					if (el.classList.contains('active')) {
// 						el.classList.remove('active');
// 					}
// 				});

// 				document.querySelectorAll('ul li').classList.add('active');
// 			}
// 		});
// 	}
// });

// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	if (window.innerWidth > 768) {
// 		document.querySelectorAll('.section').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('.nav a').forEach((el) => {
// 					if (el.classList.contains('active')) {
// 						el.classList.remove('active');
// 					}
// 				});

// 				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
// 			}
// 		});
// 	}
// });
let menu = document.querySelector('.nav_cont'),
    burger = document.querySelector('.ham_menu'),
    nav_logo = document.querySelector('.nav_logo'),
    body = document.querySelector('body');

    
burger.addEventListener('click', AddActive)

function AddActive () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
    nav_logo.classList.toggle('active');

}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.toggle('active');
    nav_logo.classList.toggle('active');
}

const animItems = document.querySelectorAll('._anim_items');

window.addEventListener('load', () => {
    
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let i=0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim_no_hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;

         return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    setTimeout(() => {
        animOnScroll()
    }, 700);
}
})


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
const loader = document.querySelector('.load');

window.addEventListener('load', () => {
    loader.classList.add('hidden');
})
const selcet = document.querySelector('select');
const allLangs = ['ru', 'ua'];

const langArr = {
    'barber-1' : {
        'ua': 'це цирюлня',
        'ru': 'это барбершоп',
    },
    'barber-2' : {
        'ua': 'це цирюлня',
        'ru': 'это барбершоп',  
    },
    'langs' : {
        'ua': 'Мова:',
        'ru': 'Язык:',
    },
}

selcet.addEventListener('change', ()=> {
    let lang = selcet.value;
    location.href = window.location.pathname + `#${lang}`;
    location.reload();
});

function changeLang(){
    let hash = window.location.hash;
    hash = hash.substring(1);

    if(!allLangs.includes(hash)){
        location.href = window.location.pathname + '#ru';
    }
    selcet.value = hash;

    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }
}

changeLang();







