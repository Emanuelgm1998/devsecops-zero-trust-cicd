🔐 DevSecOps Zero Trust CI/CD Pipeline

DevSecOps Zero Trust CI/CD Pipeline es una demostración production-ready de cómo implementar una pipeline segura siguiendo principios Zero Trust, combinando prácticas de seguridad, automatización y control continuo de calidad.

Está construida con Node.js, Express, GitHub Actions, Trivy, ESLint, gitleaks, y configurada para correr en GitHub Codespaces.






🚀 Objetivos del proyecto

Mostrar un ejemplo realista y reutilizable de un pipeline DevSecOps.

Integrar controles de seguridad automatizados dentro del ciclo de vida del software.

Servir como base para proyectos profesionales de Cloud, SysOps y Seguridad.

✨ Características principales

🔒 Express API con seguridad reforzada: helmet, CSP, XSS protection.

⚙️ CI/CD con GitHub Actions: build, test, linting y despliegue automatizado.

🕵️ Secret scanning: gitleaks detecta llaves/API tokens en commits.

🛡️ Container scanning: Trivy analiza imágenes Docker para vulnerabilidades.

🔍 Static code analysis: ESLint asegura calidad y buenas prácticas en JS.

📜 Zero Trust Policy: documentación incluida para aplicar principios Zero Trust.

💻 Ready-to-use en GitHub Codespaces o entornos locales.

⚙️ Requisitos

Node.js v20+

Docker (para escaneo con Trivy)

GitHub Codespaces o local dev environment

▶️ Uso rápido
Ejecutar localmente
npm install
npm run start


API disponible en: http://localhost:3000

Ejecutar en Codespaces
npm install
npm run dev

Ejecutar pruebas y análisis
npm run lint        # ESLint
gitleaks detect     # Secret scanning
trivy fs .          # Container scanning

🔐 Seguridad aplicada

Zero Trust: cada capa (API, contenedor, código, secrets) tiene controles independientes.

Principio de menor privilegio en CI/CD.

Monitoreo continuo con escaneo automático en cada push/PR.

Automatización para no depender de revisiones manuales.

📜 Licencia

Este proyecto está licenciado bajo MIT.

👨‍💻 Autor
© 2025 Emanuel — Licencia MIT

🌐 LinkedIn
https://www.linkedin.com/in/emanuel-gonzalez-michea/
