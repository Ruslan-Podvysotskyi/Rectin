var sliderSelector = '.swiper-container',
    options = {
        loop: true,
        speed:700,
        slidesPerView: 'auto', // or 'auto'
        centeredSlides : true,
        effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 1160, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            slideShadows: false,
        },
        grabCursor: true,
        // parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1189: {
                coverflowEffect: {
                    depth: 1160, // Depth offset in px (slides translate in Z axis)
                }
            },
            1023: {
                coverflowEffect: {
                    depth: 950, // Depth offset in px (slides translate in Z axis)
                }
            },
            767: {
                coverflowEffect: {
                    depth: 700, // Depth offset in px (slides translate in Z axis)
                }
            },
            320: {
                coverflowEffect: {
                    depth: 0, // Depth offset in px (slides translate in Z axis)
                }
            }
        },
        // Events
        on: {
            imagesReady: function(){
                this.el.classList.remove('loading');
            }
        }
    };
var mySwiper = new Swiper(sliderSelector, options);

function blur (e){
    let target = e.target;

    if(target.classList.contains('shock__slide-btn')){
        if (!target.parentNode.classList.contains('notBlur')){
            target.parentNode.classList.add('notBlur');
            target.innerHTML = 'Скрыть';
        } else {
            target.parentNode.classList.remove('notBlur');
            target.innerHTML = 'Шок-контент';
        }
    }
}

function addBlur (e){
    let target = e.target;
    const notBlur = document.querySelectorAll('.shock__slide');

    if(target.classList.contains('addBlur')){
        for(let i = 0; i < notBlur.length; i++){
            notBlur[i].classList.remove('notBlur');
        }
    }
    
}
const shockWrap = document.querySelector('.shock__wrap');
const shockArrow = document.querySelector('.shock-arrow__wrap');

shockWrap.addEventListener('click', blur);
shockArrow.addEventListener('click', addBlur);