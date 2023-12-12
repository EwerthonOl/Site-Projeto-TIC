const head = document.head
const body = document.body

const estilo = "<link rel='stylesheet' type='text/css' href='../style.css' />"
head.innerHTML+=estilo

const header = document.createElement("header")
header.setAttribute("id","header")

body.prepend(header)

const navHeader = 
"<nav class='container'>"+
  "<a class='logo' href='#'>A <span>TIC</span> no combate à desinformação.</a>"+
  "<div class='menu'>"+
    "<ul class='grid'>"+
      "<li><a class='title' href='../index.html#home'>Início</a></li>"+
      "<li><a class='title' href='../index.html#testimonials'>Notícias</a></li>"+
      "<li><a class='title' href='../index.html#services'>Pesquisas</a></li>"+
      "<li><a class='title' href='../index.html#about'>Sobre</a></li>"+
      "<li><a class='title' href='../index.html#contact'>Contato</a></li>"+
    "</ul>"+
  "</div>"+
"<div class='toggle icon-menu'></div>"+
"<div class='toggle icon-close'></div>"+
"</nav>"

header.innerHTML += navHeader

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}