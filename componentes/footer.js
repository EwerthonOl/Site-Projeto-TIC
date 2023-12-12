const footer = document.createElement("footer")
footer.setAttribute("id","footer")
footer.setAttribute("class","section")

body.append(footer)

const containerGrid = 
"<div class='container grid'>"+
  "<div class='brand'>"+
    "<a class='logo logo-alt' href='../index.html#home'>A<span> TIC</span> no combate à desinformação.</a>"+
    "<p>©2023 TICs.</p>"+
    "<p>Todos os direitos reservados.</p>"+
  "</div>"+

  "<div class='social grid'>"+
    "<a href='https://instagram.com' target='_blank'>"+
      "<i class='icon-instagram'></i>"+
    "</a>"+
  "<a href='https://facebook.com' target='_blank'>"+
    "<i class='icon-facebook'></i></a>"+
  "<a href='https://youtube.com' target='_blank'><i class='icon-youtube'></i></a>"+
"</div>"

footer.innerHTML += containerGrid