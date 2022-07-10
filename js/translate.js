const selcet = document.querySelector('select');
const allLangs = ['ua', 'ru'];

const langArr = {
    'barber-1' : {
        'ua': 'це цирюлня',
        'ru': 'это парихмахерская',
    },
    'barber-2' : {
        'ua': 'це цирюлня',
        'ru': 'это парихмахерская',  
    },
    'langs' : {
        'ua': 'Мова:',
        'ru': 'Язык:',
    },
    'nav-about' : {
        'ua': 'Про нас',
        'ru': 'Про нас',
    },
    'nav-price' : {
        'ua': 'Послуги',
        'ru': 'Услуги',
    },
    'nav-gallery' : {
        'ua': 'Галеря',
        'ru': 'Галлеря',
    },
    'nav-feedback' : {
        'ua': 'Записатись',
        'ru': 'Записаться',
    },
    'nav-address' : {
        'ua': 'просп. Павла Тичини 7',
        'ru': 'просп. Павла Тичины 7',
    },
    'nav-phone' : {
        'ua': 'Телефон для запису:',
        'ru': 'Телефон для записи:',
    },
    'header-text' : {
        'ua': 'Ми створимо твій унікальний стиль',
        'ru': 'Мы создадим твой уникальны стиль',
    },
    'header-text-2' : {
        'ua': 'Хочеш підкреслити свою індивідуальність.<br> Ми на тебе чекаємо!',
        'ru': 'Хочещь подчеркунть свою индивыдуальность.<br> Мы тебя ждем!',
    },
    'about-h2' : {
        'ua': 'Що є у нашому закладі',
        'ru': 'Что есть в нашем заведении',
    },
    'about-title-1' : {
        'ua': 'Затишна атмосфера',
        'ru': 'Уютная атмосфера',
    },
    'about-title-2' : {
        'ua': 'Якісна продукція',
        'ru': 'Качественная продукция',
    },
      'about-text-1' : {
        'ua': 'Наша цирюльня це місце, де ви можете відпочити, поки про вас піклуються професіонали.',
        'ru': 'Наш парихмахерская это место, где вы можете отдохнуть пока о вас заботятся профессионалы.',
    },
    'about-text-2' : {
        'ua': 'Використовуємо лише перевірену професійну продукцію.',
        'ru': 'Используем только проверенную профессиональную продукцию.',
    },
    'about-text-3' : {
        'ua': 'Даруємо пиво за стрижку. Ми маємо повний бар напоїв на Ваш смак, але пива у нас дуже багато.',
        'ru': 'Дарим пиво за стрижку. У нас полный бар напитков на Ваш вкус, но пива у нас очень много.',
    },
    'price-h2' : {
        'ua': 'Послуги та ціни',
        'ru': 'Услуг и цены',
    },
    'price-title-1' : {
        'ua': 'Стрижка',
        'ru': 'Стрижка',
    },
    'price-title-2' : {
        'ua': 'Манікюр',
        'ru': 'Маникюр',
    },
    'price-title-3' : {
        'ua': 'Педикюр',
        'ru': 'Педикюр',
    },
    'price-title-4' : {
        'ua': 'Гель-лак',
        'ru': 'Гель-лак',
    },
    'price-title-5' : {
        'ua': 'Прокол вух',
        'ru': 'Прокол ух',
    },
    'price-title-6' : {
        'ua': 'Фарбування',
        'ru': 'Покраска',
    },
    'gallery-h2' : {
        'ua': 'Галерея',
        'ru': 'Галлерея',
    },
    'gallery-h4' : {
        'ua': 'Завжди раді бачити у нас',
        'ru': 'Всегда рады видеть у нас',
    },
    'insta-h2' : {
        'ua': 'Наш Instagram',
        'ru': 'Наш Instagram',
    },
    'insta-h4' : {
        'ua': 'В інстаграмі ми ділимося своїми роботами, життям студії. Приєднуйтесь.',
        'ru': 'В инстаграме мы делимся своими работами, жизнью студии. Присоединяйтесь.',
    },
    'insta-btn' : {
        'ua': 'Підписуйтесь',
        'ru': 'Подписывайтесь',
    },
    'feedback-h2' : {
        'ua': 'Записатися',
        'ru': 'Записаться',
    },
    'feedback-h4' : {
        'ua': "Залишіть свій номер телефону і ми обов'язково Вам передзвонимо.",
        'ru': 'Оставте свой номер телефон и мы обязательно Вам перезвоним.',
    },
    'feedback-name' : {
        'ua': "Ім'я:<input class='input_name' type='text'>",
        'ru': 'Имя:<input class="input_name" type="text">',
    },
    'feedback-phone' : {
        'ua': 'Номер телефону:<input class="input_phone" type="number">',
        'ru': 'Номер телефонa:<input class="input_phone" type="number">',
    },
    'footer-time' : {
        'ua': 'Щодня<br>з 10:00 до 20:00',
        'ru': 'Каждый день<br>c 11:00 до 20:00',
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
        location.href = window.location.pathname + '#ua';
    }
    selcet.value = hash;

    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }
}

changeLang();