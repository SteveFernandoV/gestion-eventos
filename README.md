# Sistema Web de Gestión de Eventos

## Producto Académico Final

**Universidad Continental**  
Carrera Profesional de Ingeniería de Sistemas e Informática

---

## Autor

**Steve Fernando Salas Velarde**

---

# Descripción

El Sistema Web de Gestión de Eventos es una aplicación web desarrollada con React que permite administrar eventos y participantes mediante una interfaz moderna e intuitiva.

El sistema permite registrar, editar, eliminar y consultar eventos, así como registrar participantes e inscribirlos en los eventos disponibles. Para el almacenamiento de la información se emplea JSON Server como API REST simulada y Axios para el consumo de datos.

---

# Objetivo

Desarrollar una aplicación web que facilite la gestión de eventos y participantes mediante el uso de React, React Router, Context API, Axios y JSON Server, aplicando buenas prácticas de desarrollo Frontend.

---

# Funcionalidades

## Gestión de Eventos

- Registrar eventos.
- Visualizar eventos.
- Buscar eventos.
- Editar eventos.
- Eliminar eventos.

## Gestión de Participantes

- Registrar participantes.
- Visualizar participantes.
- Eliminar participantes.

## Gestión de Inscripciones

- Inscribir participantes en eventos.
- Consultar participantes inscritos.
- Eliminar inscripciones.

## Dashboard

- Visualizar información general del sistema.

---

# Tecnologías Utilizadas

- React
- React Router DOM
- Axios
- Bootstrap 5
- JSON Server
- Context API
- Hooks Personalizados
- Vitest
- React Testing Library
- Git
- GitHub
- Visual Studio Code

---

# Arquitectura del Proyecto

```text
gestion-eventos/

├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
├── vite.config.js
└── README.md
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/SteveFernandoV/gestion-eventos.git
```

Ingresar a la carpeta del proyecto:

```bash
cd gestion-eventos
```

Instalar las dependencias:

```bash
npm install
```

---

# Ejecución del Proyecto

Iniciar JSON Server:

```bash
npm run server
```

Iniciar la aplicación React:

```bash
npm run dev
```

Abrir el navegador en:

```text
http://localhost:5173
```

---

# Ejecución de Pruebas

Ejecutar las pruebas unitarias:

```bash
npm test
```

---

# Herramientas Utilizadas

- Visual Studio Code
- GitHub
- Node.js
- npm
- JSON Server

---

# Conclusiones

- Se desarrolló una aplicación web utilizando React y React Router para la navegación.
- Se implementó un CRUD completo para la gestión de eventos.
- Se desarrolló un módulo para el registro de participantes e inscripción a eventos.
- Se utilizó Axios junto con JSON Server para consumir una API REST simulada.
- Se implementaron pruebas unitarias mediante Vitest y React Testing Library.
- Se aplicó Context API para la administración del estado global de la aplicación.

---

# Repositorio

Actualizar el siguiente enlace con la URL del repositorio del proyecto una vez publicado en GitHub:

`https://github.com/SteveFernandoV/gestion-eventos`

---

# Licencia

Proyecto desarrollado exclusivamente con fines académicos para el Producto Académico Final del curso de Desarrollo de Aplicaciones Web de la Universidad Continental.