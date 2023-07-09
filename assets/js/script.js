// Swipers 
const swiper = new Swiper('.projects .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
      pagination: {
      el: '.projects .swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.projects .swiper-button-next',
      prevEl: '.projects .swiper-button-prev',
    },
  });

  const swiper_new = new Swiper('.review .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
      pagination: {
      el: '.review .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: false,
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
      nextEl: '.review .swiper-button-next',
      prevEl: '.review .swiper-button-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,  
        },
        550: {
            slidesPerView: 1.5,  
        },
        1023: {
            slidesPerView: 2,  
        },
    }
  });


// Header menu 

const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu nav ul li a');
menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('active'));
menuLinks.forEach((item) => item.addEventListener('click' , () =>  document.querySelector('html').classList.toggle('active')));

// Behavior Scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
