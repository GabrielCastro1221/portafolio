# Portafilio programador web

Portafolio de un programador full stack desarrollado con Node.js, MongoDB, HTML, CSS y JavaScript presenta una solución integral y moderna para mostrar sus habilidades y proyectos. El backend está construido con Node.js, manejando todas las operaciones del servidor, mientras que MongoDB se encarga de almacenar la información de los proyectos y los detalles del currículum educativo.

## Características del Portafolio:

`Tecnología Backend:`

Node.js se utiliza para crear el servidor que conecta con la base de datos y gestiona las rutas de las diferentes secciones del portafolio.

MongoDB almacena los proyectos que se muestran en la página del portafolio. Cada proyecto tiene información como título, descripción, tecnologías utilizadas y enlaces de demostración o repositorios.
CORS (Cross-Origin Resource Sharing) se configura para permitir el acceso y la renderización de los proyectos desde el servidor al frontend.

`Frontend:`

+ `HTML` proporciona la estructura básica de las dos páginas principales del portafolio: una que lista los proyectos y otra que muestra el currículum del desarrollador.

+ `CSS` se utiliza para el diseño visual, proporcionando un estilo moderno y responsive que se adapta a diferentes dispositivos.

+ `JavaScript` maneja la interacción del usuario, como la visualización de proyectos, el cambio entre secciones y la validación del formulario de contacto.

`Páginas del Portafolio:`

+ `Página del Portafolio:` Lista los proyectos almacenados en MongoDB, los cuales son renderizados dinámicamente en el frontend.

+ `Página del Currículum:` Muestra los títulos educativos y la experiencia del programador, organizados de manera cronológica. Esta página también incluye habilidades técnicas y certificaciones.

`Formulario de Contacto:`

Implementado con EmailJS, el formulario permite a los usuarios enviar mensajes directamente al programador. EmailJS facilita el envío de correos electrónicos sin necesidad de un backend adicional, ya que maneja el proceso desde el cliente.