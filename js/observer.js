<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            } else {
                entry.target.classList.remove('visible')
            }
        })
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    // biome-ignore lint/complexity/noForEach: <explanation>
    elements.forEach(element => {
        observer.observe(element)
    })

    //Get a Year for the footer
    const date = new Date()
    const year = date.getFullYear()
    document.querySelector('.year').textContent = year
})

//page up button
const pageUp = document.querySelector('.page-up')
pageUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
// Swiper

const swiper = new Swiper('.structure', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pauseOnMouseEnter: true,
    paginationClickable: true,
    speed: 2000,
    autoplay: {
        delay: 2000,
    },
    lazy: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

   // Novo Swiper para people-swiper
    const peopleSwiper = new Swiper('.people-swiper', {
        direction: 'horizontal',
        loop: true,
        pauseOnMouseEnter: true,
        paginationClickable: true,
        speed: 2000,
        lazyLoading: true,
        spaceBetween: 10,
        
        breakpoints: {
            180: {
                slidesPerGroup: 1,
                slidesPerView: 1,
            },
            320: {
                slidesPerGroup: 1, 
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
                pagination: {
                    el: '.hidden',
                },
            },
        },
        autoplay: {
            delay: 1500,
        },
        pagination: {
            el: '.swiper-pagination2',
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

=======
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            } else {
                entry.target.classList.remove('visible')
            }
        })
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    // biome-ignore lint/complexity/noForEach: <explanation>
    elements.forEach(element => {
        observer.observe(element)
    })

    //Get a Year for the footer
    const date = new Date()
    const year = date.getFullYear()
    document.querySelector('.year').textContent = year
})

//page up button
const pageUp = document.querySelector('.page-up')
pageUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
// Swiper

const swiper = new Swiper('.structure', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pauseOnMouseEnter: true,
    paginationClickable: true,
    speed: 2000,
    autoplay: {
        delay: 2000,
    },
    lazy: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

   // Novo Swiper para people-swiper
    const peopleSwiper = new Swiper('.people-swiper', {
        direction: 'horizontal',
        loop: true,
        pauseOnMouseEnter: true,
        paginationClickable: true,
        speed: 2000,
        lazyLoading: true,
        spaceBetween: 10,
        
        breakpoints: {
            180: {
                slidesPerGroup: 1,
                slidesPerView: 1,
            },
            320: {
                slidesPerGroup: 1, 
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
                pagination: {
                    el: '.hidden',
                },
            },
        },
        autoplay: {
            delay: 1500,
        },
        pagination: {
            el: '.swiper-pagination2',
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

>>>>>>> 5e73afa18aafebdf6cb4466b16617213989468f0
    