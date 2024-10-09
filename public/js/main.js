let $ = document;
let menuBtn = $.querySelector(".menu-btn");
let menu = $.querySelector(".nav-links");
let menuLinks = $.querySelectorAll(".nav-links li a");
let homeSection = $.querySelector(".home");
let btn = $.getElementById("button");
let nav = $.getElementById("navBar");
let social = $.getElementById("social");
let educationDiv = $.getElementById("education");
let skillsDiv = $.getElementById("skills");
let menuP = $.getElementById("menuProjects");
let portfolio = $.getElementById("portfolio");
const btnC = $.getElementById("button-contact");

const socialData = [
  {
    link: "https://github.com/GabrielCastro1221",
    title: "Acceso directo a GitHUb",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.linkedin.com/in/gabriel-castro-ramirez-937142332/",
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
  },
  {
    id: "edu-2",
    startingDate: "sept 2023",
    endingDate: "",
    school: "CoderHouse",
    degree: "Carrera Desarrollo FrontEnd React Js",
    desc: "La carrera de Frontend con React.js se enfoca en el desarrollo de interfaces de usuario (UI) para aplicaciones web modernas utilizando tecnologías del lado del cliente.",
  },
  {
    id: "edu-3",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "Carrera Desarrollo Full Stack",
    desc: "La carrera de Desarrollo Full Stack abarca tanto el desarrollo frontend (del lado del cliente) como el backend (del lado del servidor), lo que significa que como desarrollador full stack puedes trabajar en todas las capas de una aplicación web.",
  },
  {
    id: "edu-4",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "Carrera Data Science",
    desc: "La carrera en Data Science (Ciencia de Datos) sirve para trabajar con grandes volúmenes de datos, utilizando herramientas y técnicas estadísticas, matemáticas y computacionales para extraer conocimiento y obtener insights útiles para la toma de decisiones.",
  },
  {
    id: "edu-5",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "SQL",
    desc: "El curso de SQL (Structured Query Language) está diseñado para saber cómo interactuar con bases de datos relacionales.",
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

function actualizarEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  $.getElementById("edad").textContent = edad + " años";
}
actualizarEdad("1988-09-14");

socialData.forEach((item) => {
  let a = $.createElement("a");
  a.href = item.link;
  a.title = item.title;
  a.target = "_blank";
  let i = $.createElement("i");
  i.className = item.icon;
  a.appendChild(i);
  social.appendChild(a);
});

let educationContentHTML = "";
education.forEach((edu) => {
  educationContentHTML += `
    <div class="box-resume" id="${edu.id}">
      <h3 class="fw-bold">${edu.degree}</h3>
      <p><strong>Institución:</strong> ${edu.school}</p>
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
      <h3 class="fw-bold">${skill.degree}</h3>
      <p><strong>Fechas:</strong> ${skill.startingDate} - ${skill.endingDate}</p>
      <p><strong>Habilidades:</strong> ${skill.skills}</p>
    </div>
  `;
});
skillsDiv.innerHTML = skillsContentHTML;

const getProjects = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/projects");
    const data = await response.json();
    if (data.status) {
      renderProjects(data.proyectos);
    } else {
      console.error(data.message);
    }
  } catch (err) {
    console.error("Error al obtener los proyectos:", err);
  }
};

const renderProjects = (projects) => {
  const container = $.getElementById("projects");
  container.innerHTML = "";
  projects.forEach((project) => {
    const projectElement = $.createElement("div");
    projectElement.classList.add("project-card");
    projectElement.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src=${project.img} class="card-img-top" alt=${project.title}>
      <div class="card-body">
        <h5 class="card-title text-center sub border-bottom">${project.title}</h5>
        <div class="modal-category d-flex align-items-center justify-content-center mb-2">
          <span class="badge bg-warning-subtle text-success border border-success text-capitalize">
            ${project.category}
          </span>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="btn-card" data-bs-toggle="modal" data-bs-target="#modal-${project._id}">Detalle del proyecto</button>
        </div>
      </div>
  </div>

  <div class="modal fade" id="modal-${project._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg"> <!-- Cambié a modal-lg para tamaño mayor -->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title sub">${project.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body row"> <!-- Usar row para layout de Bootstrap -->
        <div class="col-md-6">
          <img src="${project.img}" alt="${project.title}" class="img-fluid rounded shadow-sm" />
        </div>
        <div class="col-md-6">
          <div class="modal-category mb-2">
            <span class="badge bg-warning-subtle text-success border border-success text-capitalize">${project.category}</span>
          </div>
          <p>${project.description}</p>
        </div>
      </div>
      <div class="modal-footer">
        <a href="${project.repository_link}" target="_blank" class="btn-card">Código fuente</a>
        <a href="${project.deploy_link}" target="_blank" class="btn-card">Ver Página Web</a>
      </div>
    </div>
  </div>
</div>
    `;
    container.appendChild(projectElement);
  });
};
window.onload = getProjects;

async function fetchEmailJSKeys() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/keys");
    const keys = await response.json();
    emailjs.init(keys.userID);
    return keys;
  } catch (error) {
    console.error("Error fetching EmailJS keys:", error);
  }
}

$.getElementById("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  btnC.value = "Enviando Mensaje...";
  try {
    const keys = await fetchEmailJSKeys();
    const serviceID = keys.serviceID;
    const templateID = keys.templateID;
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btnC.value = "Enviar Email";
        alert("Mensaje enviado con éxito!");
      },
      (err) => {
        btnC.value = "Enviar Email";
        alert(JSON.stringify(err));
      }
    );
  } catch (error) {
    btnC.value = "Enviar Email";
    alert("Error al enviar el mensaje");
  }
});
