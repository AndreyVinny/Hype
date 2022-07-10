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
const _0x4e76=['onclick','171145sMzLWH','return\x20(function()\x20','Дякуємо\x20за\x20звернення.\x20З\x20Вами\x20звяжуться\x20найближчим\x20часом.','.btn_feedback','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','warn','trace','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','1whtyIi','table','open','https://api.telegram.org/bot5515807388:AAE3E_p-sUiUST2plhf5z30H283d4Zke-ko/sendMessage?chat_id=-1001539915139&text=','prototype','reload','console','info','value','GET','__proto__','exception','915555hNYTnv','451gtDPBd','1578XUCwTJ','toString','log','constructor','9mrFIYt','721241aVhnNt','querySelector','643651ICYGHM','4651tWrIiq','test','error','bind','5ibYCeS','1osenMh','Имя:\x20','324733hZQGtK','.\x20Телефон:\x20'];const _0x4e8c=function(_0x4079d8,_0x4ad48d){_0x4079d8=_0x4079d8-0x1aa;let _0x4c537d=_0x4e76[_0x4079d8];return _0x4c537d;};const _0xfd684b=_0x4e8c;(function(_0x27b6c0,_0x3caa34){const _0x2d5220=_0x4e8c;while(!![]){try{const _0x4a778c=-parseInt(_0x2d5220(0x1ce))+-parseInt(_0x2d5220(0x1c7))*-parseInt(_0x2d5220(0x1ad))+parseInt(_0x2d5220(0x1d0))*-parseInt(_0x2d5220(0x1bb))+parseInt(_0x2d5220(0x1d1))*parseInt(_0x2d5220(0x1cd))+parseInt(_0x2d5220(0x1c9))*-parseInt(_0x2d5220(0x1c8))+parseInt(_0x2d5220(0x1b2))+-parseInt(_0x2d5220(0x1ac))*-parseInt(_0x2d5220(0x1af));if(_0x4a778c===_0x3caa34)break;else _0x27b6c0['push'](_0x27b6c0['shift']());}catch(_0x27d5e1){_0x27b6c0['push'](_0x27b6c0['shift']());}}}(_0x4e76,0xa4f46));const _0x2b02c6=function(){let _0x4b3b28=!![];return function(_0x3e3750,_0x56bf08){const _0xfa3da8=_0x4b3b28?function(){const _0xe86964=_0x4e8c;if(_0x56bf08){const _0x2094a5=_0x56bf08[_0xe86964(0x1ba)](_0x3e3750,arguments);return _0x56bf08=null,_0x2094a5;}}:function(){};return _0x4b3b28=![],_0xfa3da8;};}(),_0x52dadb=_0x2b02c6(this,function(){const _0x1dae12=function(){const _0x4b1526=_0x4e8c,_0x14bdf9=_0x1dae12['constructor'](_0x4b1526(0x1b9))()[_0x4b1526(0x1cc)](_0x4b1526(0x1b6));return!_0x14bdf9[_0x4b1526(0x1d2)](_0x52dadb);};return _0x1dae12();});_0x52dadb();const _0x597f0c=function(){let _0x4d16e0=!![];return function(_0x594ec5,_0x3dc108){const _0x2c6bcc=_0x4d16e0?function(){const _0x21880a=_0x4e8c;if(_0x3dc108){const _0x8d62a2=_0x3dc108[_0x21880a(0x1ba)](_0x594ec5,arguments);return _0x3dc108=null,_0x8d62a2;}}:function(){};return _0x4d16e0=![],_0x2c6bcc;};}(),_0x8c9cfc=_0x597f0c(this,function(){const _0x3ecc64=_0x4e8c,_0x562f69=function(){const _0x2ba5d6=_0x4e8c;let _0x286e02;try{_0x286e02=Function(_0x2ba5d6(0x1b3)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5e7dad){_0x286e02=window;}return _0x286e02;},_0x1893e3=_0x562f69(),_0x41e69d=_0x1893e3[_0x3ecc64(0x1c1)]=_0x1893e3[_0x3ecc64(0x1c1)]||{},_0x582d8e=[_0x3ecc64(0x1cb),_0x3ecc64(0x1b7),_0x3ecc64(0x1c2),_0x3ecc64(0x1aa),_0x3ecc64(0x1c6),_0x3ecc64(0x1bc),_0x3ecc64(0x1b8)];for(let _0x5ae6b3=0x0;_0x5ae6b3<_0x582d8e['length'];_0x5ae6b3++){const _0x21f73a=_0x597f0c[_0x3ecc64(0x1cc)][_0x3ecc64(0x1bf)]['bind'](_0x597f0c),_0x157224=_0x582d8e[_0x5ae6b3],_0x44e4ae=_0x41e69d[_0x157224]||_0x21f73a;_0x21f73a[_0x3ecc64(0x1c5)]=_0x597f0c['bind'](_0x597f0c),_0x21f73a[_0x3ecc64(0x1ca)]=_0x44e4ae['toString'][_0x3ecc64(0x1ab)](_0x44e4ae),_0x41e69d[_0x157224]=_0x21f73a;}});_0x8c9cfc(),document[_0xfd684b(0x1cf)](_0xfd684b(0x1b5))[_0xfd684b(0x1b1)]=function(){const _0x4e9d8a=_0xfd684b;let _0x265df0=document['querySelector']('.input_name')['value'],_0x54f4cb=document[_0x4e9d8a(0x1cf)]('.input_phone')[_0x4e9d8a(0x1c3)];const _0x52fe86=_0x4e9d8a(0x1be);let _0x356ab5=new XMLHttpRequest();_0x356ab5[_0x4e9d8a(0x1bd)](_0x4e9d8a(0x1c4),_0x52fe86+(_0x4e9d8a(0x1ae)+_0x265df0+_0x4e9d8a(0x1b0)+_0x54f4cb+'.'),!![]),_0x356ab5['send'](),setTimeout(function(){const _0x5525f7=_0x4e9d8a;location[_0x5525f7(0x1c0)](),alert(_0x5525f7(0x1b4));},0x1f4);};







