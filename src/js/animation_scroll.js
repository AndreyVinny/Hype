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