<br />
<div align="center">
  <a href="/url">
    <img src="./src/assets/Wizstack Title.png" alt="Logo" height="200">
  </a>

  <h3 align="center">Wizstack - Student Management System</h3>

  <p>
    Application build with students in mind, to help manage courses, track grades, and more.
    <br />
    <br />
    <a href="/url">View Demo</a>
    ✧
    <a href="https://github.com/Hi-kue/Wizstack/issues">Report Bug</a>
    ✧
    <a href="https://github.com/Hi-kue/Wizstack/issues">Request Feature</a>
    ✧
    <a href="/url">Documentation</a>
  </p>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/radix_ui-%23AC4EA4.svg?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI">
</div>
<br />

## Table of Contents
- [Table of Contents](#table-of-contents)
- [About Wizstack](#about-wizstack)
- [Documentation and Understanding the Application](#documentation-and-understanding-the-application)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Navigating the Repo](#navigating-the-repo)
- [Built With](#built-with)
- [License](#license)


## About Wizstack

Wizstack is a student management system that provides a solution for students who are looking for a way to manage their courses, track their grades, and more. Wizstack is a web application that is built with a MERN stack, and uses Vite as the build tool. The application is built with students in mind, and is designed to be easy to use and navigate. The application is also designed to be responsive, and can be used on any device.

## Documentation and Understanding the Application

Please refer to  our [Documentation]() to learn more about the application and how to use it. Alongside the documentation, we will provide a video tutorial on how to use the application after the application is complete.

## Getting Started

### Prerequisites
To get started with the application, you will need to have the following installed on your local machine:
1. [Node.js](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/)
3. [Git](https://git-scm.com/)
4. [npm](https://www.npmjs.com/)

### Installation
1. Clone the Repository:
   ```sh
   git clone <repo_url>
   ```
2. Install all NPM Packages:
   ```sh
   npm install
   or
   npm i
   ```
3. Start the Server:
   ```sh
   npm run dev
   ```
4. View the Application at `http://localhost:4173`

## Navigating the Repo

To get started with navigating the repository, please refer to the following model layout of the repository:

```bash
.
├── node_modules
├── public
├── server/
│   ├── config/
│   │   └── ...
│   ├── controllers/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   ├── node_modules/
│   │   └── ...
│   ├── routes/
│   │   └── api/
│   │       └── ...
│   ├── util/
│   │   └── ...
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── hooks/
│   │   └── ...
│   ├── layout/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── util/
│   │   └── ...
│   ├── app.css
│   ├── app.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitattributes
├── .gitignore
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

As the project becomes more complex, we will provide an updated project structure to help with navigating and understanding the repository at a glance. For now, please refer to the following table to understand the purpose of each folder in the repository:

<table style="align:center">
  <tr>
    <th width="500px">Folder</th>
    <th width="500px">Description</th>
  </tr>
  <tr>
    <td><code>node_modules</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>public</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>server/</code></td>
    <td>Root for backend side logic</td>
  </tr>
  <tr>
    <td><code>server/config</code></td>
    <td>Config directory for database connection</td>
  </tr>
  <tr>
    <td><code>server/controllers</code></td>
    <td>Controller logic for each api route</td>
  </tr>
  <tr>
    <td><code>server/models</code></td>
    <td>Models for each collection in database</td>
  </tr>
   <tr>
    <td><code>server/routes/api</code></td>
    <td>API routes</td>
  </tr>
   <tr>
    <td><code>server/util</code></td>
    <td>Utility functions and classes for backend logic</td>
  </tr>
  <tr>
    <td><code>src/</code></td>
    <td>Root for frontend side logic</td>
  </tr>
  <tr>
    <td><code>src/assets/</code></td>
    <td>Assets used in the project</td>
  </tr>
  <tr>
    <td><code>src/components/</code></td>
    <td>Components used in the project</td>
  </tr>
  <tr>
    <td><code>src/layout/</code></td>
    <td>Layout-related code</td>
  </tr>
  <tr>
    <td><code>src/utils/</code></td>
    <td>Utility functions and modules</td>
  </tr>
  <tr>
    <td><code>src/utils/constants/</code></td>
    <td>Constants used in utility functions</td>
  </tr>
  <tr>
    <td><code>src/utils/helpers/</code></td>
    <td>Helper functions used in utility functions</td>
  </tr>
  <tr>
    <td><code>.env</code></td>
    <td>Environment variables configuration file</td>
  </tr>
  <tr>
    <td><code>.env.local</code></td>
    <td>Local environment variables configuration</td>
  </tr>
  <tr>
    <td><code>.eslintrc.cjs</code></td>
    <td>ESLint configuration file</td>
  </tr>
  <tr>
    <td><code>.gitignore</code></td>
    <td>Git ignore file</td>
  </tr>
  <tr>
    <td><code>index.html</code></td>
    <td>Main HTML file</td>
  </tr>
  <tr>
    <td><code>package-lock.json</code></td>
    <td>NPM package lock file</td>
  </tr>
  <tr>
    <td><code>package.json</code></td>
    <td>NPM package configuration file</td>
  </tr>
  <tr>
    <td><code>README.md</code></td>
    <td>Project documentation file</td>
  </tr>
  <tr>
    <td><code>vite.config.js</code></td>
    <td>Vite configuration file</td>
  </tr>
</table>

## Built With

Wizstack - Student Management System was built with the following technologies:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)
- [ESLint](https://eslint.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [colors](https://www.npmjs.com/package/colors)

among many other packages. To view the full list of dependencies, check out the `package.json` file or use the command `npm list`.

Plugins used:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.