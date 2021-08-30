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

const header = document.querySelector("#header");
const navHeigth = header.offsetHeight;

window.addEventListener("scroll", () => {
    //console.log(navHeigth);
    console.log();
  if (window.scrollY >= navHeigth) {
    //SCROLL É MAIOR QUE A ALTURA DO HEADER
    header.classList.add("scroll");
  } else {
    //SCROLL MENOR QUE A ALTURA DO HEADER
    header.classList.remove("scroll");
  }
});
