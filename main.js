/* ABRE E FECHA O MENU */

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
    /* A função 'toggle' neste exemplo adiciona a classe 'show' se ela não existir,
        caso ela exita o toggle remove */
  });
}

/* Quando Clicar em um link do menu, esconder menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* MUDAR O HEADER DA PAGINA QUANDO DER SCROLL */
function changeHeaderWhenScroll(){
  const header = document.querySelector("#header");
  const navHeigth = header.offsetHeight;

  if (window.scrollY >= navHeigth) {
    //SCROLL É MAIOR QUE A ALTURA DO HEADER
    header.classList.add("scroll");
  } else {
    //SCROLL MENOR QUE A ALTURA DO HEADER
    header.classList.remove("scroll");
  }
}

/* TESTIMONIALS CAROCEL */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});

/* SCROLREVEAL: MOSTRAR ELEMENTOS NA PAGINA QUANDO DER SCROLL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #sercices .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* BUTTON BACK TO TOP */
function backToTop () {
  const backToTopButton = document.querySelector('.back-to-top');
  if( window.scrollY >= 560) backToTopButton.classList.add('show');
  else backToTopButton.classList.remove('show');
}

/* WHEN SCROLL*/
window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backToTop();
});

