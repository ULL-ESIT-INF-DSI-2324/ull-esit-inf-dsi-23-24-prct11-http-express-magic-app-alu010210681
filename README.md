[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sNC2m9MU)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7bX30zK4)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu010210681)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu010210681/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu010210681/actions/workflows/node.js.yml)

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu010210681/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu010210681/actions/workflows/coveralls.yml)

# <span style="color: #7253ed;">Introducción </span>

En esta práctica, el objetivo es desarrollar un servidor utilizando Express, un framework de JavaScript para aplicaciones web, que permita gestionar una colección de cartas del juego Magic. Esto implicará crear un sistema donde los usuarios puedan añadir, modificar, eliminar, listar y consultar detalles de sus cartas a través de peticiones HTTP, es decir, utilizando las mismas técnicas que usa internet para cargar páginas web y enviar datos.

# Objetivos

Los objetivos esperados de la aplicación de gestión de colecciones de cartas se pueden describir de la siguiente manera:

- **Estructurar un servidor web** que responda adecuadamente a diferentes tipos de peticiones de los usuarios.
- **Implementar operaciones CRUD** (Crear, Leer, Actualizar, Eliminar) para manejar las cartas de cada usuario, asegurándote de que el servidor pueda procesar estas solicitudes de manera eficiente y segura.
- **Documentar** y explicar las decisiones tomadas durante el diseño.
- **Testear** tu aplicación para asegurarte de que funciona correctamente bajo diferentes circunstancias.


# <span style="color: #7253ed;">Herramientas Utilizadas</span>
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,nodejs,vim,npm,vscode,typescript"/>
  </a>
</p>

# <span style="color: #7253ed;">Aplicación cliente-servidor de cartas Magic</span>

## Clases Diseñadas

1. **`Carta`**: Clase base que representa una carta genérica de Magic, contiene propiedades comunes a todos los tipos de cartas como `id`, `name`, `cost`, `color`, `type`, `rarity` y `rules`.
2. **`CartaCriatura`**: Derivada de Carta, añade las propiedades específicas `power` y `resistance`, relevantes para las cartas de tipo `criatura`.
3. **`CartaPlaneswalker`**: Otra especialización de Carta que introduce la propiedad `loyalty`, exclusiva de las cartas tipo Planeswalker.

## Métodos Implementados en GestorCartas

1. `construirDirectorio` y `construirRutaArchivo`: Métodos estáticos que generan rutas al sistema de archivos basadas en el usuario y el ID de la carta, respectivamente, para organizar las cartas de cada usuario en directorios separados.

2. `addCarta`: Añade una nueva carta a la colección del usuario, guardándola como un archivo JSON. Implementa una verificación para evitar duplicados.

3. `modificarCarta`: Actualiza la información de una carta existente, reescribiendo el archivo JSON correspondiente.

4. `eliminarCarta`: Remueve una carta de la colección, borrando el archivo JSON asociado.

5. `listarCartas` y `mostrarCarta`: Listan todas las cartas de un usuario y muestran los detalles de una carta específica, respectivamente, leyendo la información desde el sistema de archivos.

## Configuración del Servidor Express




# <span style="color: #7253ed;">Referencias</span>

- [NodeJS](https://nodejs.org/docs/latest/api/)
- [NPM](https://www.npmjs.com/)
- [Yargs](https://www.npmjs.com/package/yargs)
- [Chalk](https://www.npmjs.com/package/chalk)
- [API Sincrona Ficheros](https://nodejs.org/docs/latest/api/fs.html)
- [c8 Cobertura de código](https://www.npmjs.com/package/c8)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Sonar Cloud](https://www.sonarsource.com/products/sonarcloud/)
- [Documentación de la Asignatura](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/)
- [Informe de la práctica](https://ull-esit-inf-dsi-2324.github.io/prct10-fs-proc-sockets-magic-app/)

# <span style="color: #7253ed;">Conclusion</span>

La práctica de crear una aplicación cliente/servidor me ha servido para adquirir un mayor conocimiento de las comunicaciones de red mediante sockets y he aprendido más sobre la gestión de eventos en un entorno asíncrono. El uso de patrones de callback para interactuar con la clase gestora de Cartas me resultó un desafío, especialmente al integrarlos con el código existente, pude solucionarlo leyendo más en detalle la documentación y como se implementan. 