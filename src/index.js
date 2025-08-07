const express = require("express");
const helmet = require("helmet");
const app = express();
const apiRoutes = require("./routes/api");

// Middleware de seguridad
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: [],
  }
}));

// Middleware JSON y rutas
app.use(express.json());
app.use("/api", apiRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 DevSecOps Zero Trust CI/CD Pipeline</h1>
    <p>Status: <strong style="color: green;">Running</strong></p>
    <p>Try the <a href="/api">/api</a> endpoint for the secure JSON API.</p>
  `);
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running securely on port ${PORT}`);
});
