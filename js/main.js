let $ = document;
let menuBtn = $.querySelector(".menu-btn");
let menu = $.querySelector(".nav-links");
let menuLinks = $.querySelectorAll(".nav-links li a");
let homeSection = $.querySelector(".home");
let sortBtn = $.querySelector(".filter-menu").children;
let sortItem = $.querySelector(".filter-item").children;
let btn = $.getElementById("button");
let nav = $.getElementById("navBar");
let social = $.getElementById("social");
let educationDiv = $.getElementById("education");
let skillsDiv = $.getElementById("skills");
let menuP = $.getElementById("menuProjects");
let portfolio = $.getElementById("portfolio");

const socialData = [
  {
    link: "https://github.com/GabrielCastro1221",
    title: "Acceso directo a GitHUb",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.linkedin.com/in/gabriel-castro-ramirez-b5b590252/",
    title: "Acceso directo a Linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://api.whatsapp.com/send/?phone=3146381395",
    title: "Contacto via WhatsApp",
    icon: "fa-brands fa-whatsapp",
  },
];

const education = [
  {
    id: "edu-1",
    startingDate: "sept 2023",
    endingDate: "",
    school: "Instituto Argentino de Computacion (IAC)",
    degree: "Desarrollo web",
    desc: "El curso de desarrollo web cubre HTML, CSS y JavaScript, enseña los fundamentos de cómo construir sitios web interactivos y estilizados. Al final del curso se debe ser capaz de crear sitios web completos que no solo tengan una estructura y estilo atractivo, sino que también interactúen con el usuario de manera dinámica.",
    certificate: ["#"],
  },
  {
    id: "edu-2",
    startingDate: "sept 2023",
    endingDate: "",
    school: "CoderHouse",
    degree: "Carrera Desarrollo FrontEnd React Js",
    desc: "La carrera de Frontend con React.js se enfoca en el desarrollo de interfaces de usuario (UI) para aplicaciones web modernas utilizando tecnologías del lado del cliente.",
    certificate: [
      /*"../assets/images/DesarrolloWebTop10.png",
      "../assets/images/JavaScriptTop10.png",
      "../assets/images/ReactJsTop10.png",
      "../assets/images/CarreraReactJsTop10.png",*/
    ],
  },
  {
    id: "edu-3",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "Carrera Desarrollo Full Stack",
    desc: "La carrera de Desarrollo Full Stack abarca tanto el desarrollo frontend (del lado del cliente) como el backend (del lado del servidor), lo que significa que como desarrollador full stack puedes trabajar en todas las capas de una aplicación web.",
    certificate: ["#"],
  },
  {
    id: "edu-4",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "Carrera Data Science",
    desc: "La carrera en Data Science (Ciencia de Datos) sirve para trabajar con grandes volúmenes de datos, utilizando herramientas y técnicas estadísticas, matemáticas y computacionales para extraer conocimiento y obtener insights útiles para la toma de decisiones.",
    certificate: [
      /*"../assets/images/DataAnalytics.png",
      "../assets/images/DataScienceITop10.png",
      "../assets/images/DataScienceIITop10.png",*/
    ],
  },
  {
    id: "edu-5",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "SQL",
    desc: "El curso de SQL (Structured Query Language) está diseñado para saber cómo interactuar con bases de datos relacionales.",
    certificate: [
      /*"../assets/images/SQLTop10.png"*/
    ],
  },
];

const skills = [
  {
    id: "exp-1",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Desarrollo Web",
    skills:
      "El desarrollo web abarca una amplia gama de habilidades que permiten crear y mantener aplicaciones y sitios web: HTML, CSS, JavaScript, Bootstrap, Tailwind, Fetch Api, Git, GitHub, Sass",
  },
  {
    id: "exp-2",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Carrera Desarrollo FrontEnd React Js",
    skills:
      "En la carrera de desarrollo frontend se estudiaron una amplia gama de habilidades que permiten crear y mantener aplicaciones y sitios web: JSX, Componentes, Props, States, Hooks, React Router, Context, Firebase",
  },
  {
    id: "exp-3",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Carrera Desarrollo Full Stack",
    skills:
      "Estas habilidades están orientadas a la creación de la lógica y funcionalidad de una aplicación web en el servidor: Node Js, Express, RestFul Api, Autenticacion y autorizacion(JWT, OAuth), MongoDB, cookies, session storage, patrones de diseño, patrones de arquitectura.",
  },
  {
    id: "exp-4",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Carrera Data Science",
    skills:
      "Estas habilidades están orientadas a la creación de modelos de aprendizaje automatico:  Matematica, estadistica, Python, Pandas, Numpy, MatplotLib, Sklearn, Data Wrangling(Limpieza de datos), EDA(analisis exploratorio de datos), Machine Learning(Regresion lineal y logistica, Arboles de decision y bosques aleatorios, Maquinas de soporte vectorial, K-NN), Deep Learning(Redes Neuronales(ANN), Redes neuronales convolucionales(CNN), Redes neuronales recurrentes(RNN)), Procesamiento de lenguaje natural(NLP).",
  },
  {
    id: "exp-5",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "SQL",
    skills:
      "El esquema de habilidades enseñadas en el curso de SQL es el siguiente: Consultas, subconsultas, Operadores y funciones, Consultas avanzadas, Manipulacion de datos(DML), Definicion de datos (DDL), Funciones y procedimientos almacenados, Vistas, Trigger, Backups",
  },
];

const projectMenu = [
  {
    display: "Todos los proyectos",
    target: "all",
  },
  {
    display: "Frontend",
    target: "front",
  },
  {
    display: "Backend",
    target: "back",
  },
  {
    display: "Data Science",
    target: "data",
  },
];

const projectsData = [
  {
    id: "pro-1",
    img: "/assets/images/ecommerce.jpg",
    dataItem: "back",
    title: "Ecommerce Skateshop",
    desc: "Proyecto final de la carrera de programacion Full Stack en CoderHouse, Este proyecto es una tienda virtual desarrollada con Node JS - Express - MongoDB y como motor de plantillas se uso express-handlebars. Esta tienda tiene autenticacion de usuario desarrollada con jsonwebtoken para crear el inicio unico de sesion, tambien cuenta con administrador de productos y usuarios desarrollados con WebSockets para que los paneles de adminstracion de la pagina sean en tiempo real, fuera de eso la tienda tiene un chat de la comunidad donde los usuarios podran chatear entre ellos. en la parte de la tienda online los productos se filtran por categoria, por precios y por paginas para hacer eso se uso la libreria de node mongoose-paginate-v2. Una vez se va a realizar la compra del producto la pagina genera una orden de compra para su pago posterior. Cuando un usuario tiene cierto periodo de inactividad en la pagina automaticamente sera eliminado.",
    repo: "https://github.com/GabrielCastro1221/tpFinalBackend-GabrielCastroRamirez.git",
    deploy: "https://skateshop-788h.onrender.com/",
  },
  {
    id: "pro-2",
    img: "/assets/images/cardiopatia.jpg",
    dataItem: "data",
    title: "Simulacion Cardiopatia",
    desc: "Modelo Desarrollado con python en google Colab el predice enfermedades cardiacas en una persona, para lograr esto se obtuvieron los datos de un conjunto de datos donde se aloja la información de varias métricas de salud de pacientes cardíacos a la cual se le realizo una limpieza de datos para poder hacer calculos precisos para una prediccion optima, fuera de eso se implementaron las tecnicas de analisis exploratorio las cuales ayudaron a analizar los datos de una manera visual para entender los datos mas facil, luego se selecciono el algoritmo de regresion el cual permitio entrenar el modelo de datos y de acuerdo a los resultados de las metricas calculadas por el modelo se analizo cual de los modelos fue el mas acertivo en la precicción. Luego se hizo una simulación donde se le pasaron por parametro cada uno de los valores de las metricas de cada paciente, dichos valores son los campos que contiene el conjunto de datos y de acuerdo a dichas metricas el sistema dira si esa persona tiene o no problemas cardiacos.",
    repo: "https://github.com/GabrielCastro1221/Simulacion_Cardiopatia_jupyter_notebook.git",
    deploy:
      "https://github.com/GabrielCastro1221/Simulacion_Cardiopatia_jupyter_notebook/blob/main/simulacion_cardiopatia.ipynb",
  },
  {
    id: "pro-3",
    img: "/assets/images/calculadora.jpg",
    dataItem: "front",
    title: "Calculadora Cientifica",
    desc: "Calculadora cientifica con botones que permiten realizar varias operaciones matemáticas, desde simples sumas y restas hasta funciones más complejas como factoriales y potencias. Además, maneja ángulos en radianes o grados y tiene funciones trigonométricas.",
    repo: "https://github.com/GabrielCastro1221/Calculadora_cientifica.git",
    deploy: "#",
  },
  {
    id: "pro-4",
    img: "/assets/images/nba.jpeg",
    dataItem: "data",
    title: "Simulacion Juegos NBA",
    desc: "Simulacion de partidos entre 2 equipos de la NBA, este notebook recibe una funcion que ejecuta la simulacion del juego, para esto recibira dos parametros los cuales seran los nombres de los equipos a los cuales se desea enfrentar en la simulacion dando como resultado el posible ganador del partido.",
    repo: "https://github.com/GabrielCastro1221/Simulacion_Partidos_NBA_jupyter_notebook.git",
    deploy:
      "https://github.com/GabrielCastro1221/Simulacion_Partidos_NBA_jupyter_notebook/blob/main/ProyectoDS_GabrielCastroRamirez.ipynb",
  },
  {
    id: "pro-5",
    img: "/assets/images/bookingMedico.jpg",
    dataItem: "back",
    title: "Booking Medico",
    desc: "Booking medico desarrollado con MongoDB, Express, React Js, Node Js (MERN STACK), en esta pagina el usuario podra ingresar y solicitar una cita medica con el medico especialista de su preferencia, navegando entre todos los medicos hasta encontrar el indicado para diagnosticar su salud, esta pagina cuanta con paneles de administrador de usuarios y pacientes, tambien cuanta con un formulario donde etara la informacion de los horarios de las citas disponibles de cada doctor y en este se podra agendar la cita que quedara registrada en la base de datos.",
    repo: "https://github.com/GabrielCastro1221/booking_medico_MERN.git",
    deploy: "#",
  },
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

socialData.forEach((item) => {
  let a = document.createElement("a");
  a.href = item.link;
  a.title = item.title;
  a.target = "_blank";
  let i = document.createElement("i");
  i.className = item.icon;
  a.appendChild(i);
  social.appendChild(a);
});

let educationContentHTML = "";
education.forEach((edu) => {
  educationContentHTML += `
    <div class="box-resume" id="${edu.id}">
      <h3>${edu.degree}</h3>
      <p><strong>Escuela:</strong> ${edu.school}</p>
      <p><strong>Fechas:</strong> ${edu.startingDate} - ${
    edu.endingDate || "Actualidad"
  }</p>
      <p>${edu.desc}</p>
    </div>
  `;
});
educationDiv.innerHTML = educationContentHTML;

let skillsContentHTML = "";
skills.forEach((skill) => {
  skillsContentHTML += `
    <div class="box-resume" id="${skill.id}">
      <h3>${skill.degree}</h3>
      <p><strong>Fechas:</strong> ${skill.startingDate} - ${skill.endingDate}</p>
      <p><strong>Habilidades:</strong> ${skill.skills}</p>
    </div>
  `;
});
skillsDiv.innerHTML = skillsContentHTML;

projectMenu.forEach((item) => {
  let li = document.createElement("li");
  li.setAttribute("data-target", item.target);
  li.textContent = item.display;
  menuP.appendChild(li);
});

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

projectsData.forEach((project) => {
  const li = document.createElement("li");
  li.setAttribute("data-item", project.dataItem);
  li.setAttribute("data-bs-toggle", "modal");
  li.setAttribute("data-bs-target", `#${project.id}`);
  const img = document.createElement("img");
  img.src = project.img;
  img.alt = project.title;
  li.appendChild(img);
  portfolio.appendChild(li);
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = project.id;
  modal.tabIndex = -1;
  modal.setAttribute("aria-labelledby", `${project.id}Label`);
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="${project.id}Label">${project.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <img src="${project.img}" class="card-img-top" alt="${project.title}" />
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.desc}</p>
              <div class="d-flex align-items-center justify-content-around">
                <a href="${project.repo}" class="btn btn-primary">Repositorio</a>
                <a href="${project.deploy}" class="btn btn-primary">Deploy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
});
