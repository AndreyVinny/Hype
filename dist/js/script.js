const observer = new IntersectionObserver((entries)=> {
    entries.forEach((enrty)=>{
        if(enrty.isIntersecting){
            document.querySelectorAll('.nav_item-link').forEach((link)=>{
                link.classList.toggle(
                    'active-link', link.getAttribute('href').replace('#', '') === enrty.target.id
                );
            })
        }
    });
}, {
    threshold: 1,
})

document.querySelectorAll('.section').forEach((section)=> {observer.observe(section)});

document.querySelector('.nav-list').addEventListener('click', (event) => {
    if(event.target.classList.contains('nav_item-link')) {
        event.preventDefault();
        const id = event.target.getAttribute('href').replace('#', '');

        window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: 'smooth',
        })
    }
})
let menu = document.querySelector('.nav_cont'),
    burger = document.querySelector('.ham_menu'),
    body = document.querySelector('body');

    
burger.addEventListener('click', AddActive)

function AddActive () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.classList.remove('active');
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








