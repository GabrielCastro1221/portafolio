let $ = document;
let menuBtn = $.querySelector(".menu-btn");
let menu = $.querySelector(".nav-links");
let menuLinks = $.querySelectorAll(".nav-links li a");
let homeSection = $.querySelector(".home");
let sortBtn = $.querySelector(".filter-menu").children;
let sortItem = $.querySelector(".filter-item").children;
let btn = $.getElementById("button");

const projectsData = [
  {
    img: "https://www.esic.edu/sites/default/files/rethink/ba73d6a3-ecommerce.jpg",
    dataItem: "back",
    title: "Ecommerce Skateshop",
    desc: "Proyecto final de la carrera de programacion Full Stack en CoderHouse, Este proyecto es una tienda virtual desarrollada con Node JS - Express - MongoDB y como motor de plantillas se uso express-handlebars. Esta tienda tiene autenticacion de usuario desarrollada con jsonwebtoken para crear el inicio unico de sesion, tambien cuenta con administrador de productos y usuarios desarrollados con WebSockets para que los paneles de adminstracion de la pagina sean en tiempo real, fuera de eso la tienda tiene un chat de la comunidad donde los usuarios podran chatear entre ellos. en la parte de la tienda online los productos se filtran por categoria, por precios y por paginas para hacer eso se uso la libreria de node mongoose-paginate-v2. Una vez se va a realizar la compra del producto la pagina genera una orden de compra para su pago posterior. Cuando un usuario tiene cierto periodo de inactividad en la pagina automaticamente sera eliminado.",
    repo: "https://github.com/GabrielCastro1221/tpFinalBackend-GabrielCastroRamirez.git",
    deploy: "https://skateshop-788h.onrender.com/",
  },
  {
    img: "https://www.sanitanova.it/wp-content/uploads/2022/07/intelligenza-artificiale-in-medicina.jpg",
    dataItem: "data",
    title: "Simulacion Cardiopatia",
    desc: "Modelo Desarrollado con python en google Colab el predice enfermedades cardiacas en una persona, para lograr esto se obtuvieron los datos de un conjunto de datos donde se aloja la información de varias métricas de salud de pacientes cardíacos a la cual se le realizo una limpieza de datos para poder hacer calculos precisos para una prediccion optima, fuera de eso se implementaron las tecnicas de analisis exploratorio las cuales ayudaron a analizar los datos de una manera visual para entender los datos mas facil, luego se selecciono el algoritmo de regresion el cual permitio entrenar el modelo de datos y de acuerdo a los resultados de las metricas calculadas por el modelo se analizo cual de los modelos fue el mas acertivo en la precicción. Luego se hizo una simulación donde se le pasaron por parametro cada uno de los valores de las metricas de cada paciente, dichos valores son los campos que contiene el conjunto de datos y de acuerdo a dichas metricas el sistema dira si esa persona tiene o no problemas cardiacos.",
    repo: "https://github.com/GabrielCastro1221/Simulacion_Cardiopatia_jupyter_notebook.git",
    deploy: "https://github.com/GabrielCastro1221/Simulacion_Cardiopatia_jupyter_notebook/blob/main/simulacion_cardiopatia.ipynb",
  },
  {
    img: "https://i.ytimg.com/vi/SqhT2a4Yi2A/maxresdefault.jpg",
    dataItem: "front",
    title: "Calculadora Cientifica",
    desc: "Calculadora cientifica con botones que permiten realizar varias operaciones matemáticas, desde simples sumas y restas hasta funciones más complejas como factoriales y potencias. Además, maneja ángulos en radianes o grados y tiene funciones trigonométricas.",
    repo: "https://github.com/GabrielCastro1221/Calculadora_cientifica.git",
    deploy: "#",
  }
];

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
}

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.add("active");
  }
}

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }
    this.classList.add("current");

    let targetData = this.getAttribute("data-target");

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove("active");
      sortItem[k].classList.add("delete");
      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
    }
  });
}
