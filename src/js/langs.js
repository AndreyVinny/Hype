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
