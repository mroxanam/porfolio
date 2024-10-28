"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Porfolio_1 = require("./Porfolio");
const portfolio = new Porfolio_1.Portfolio();
const persona1 = new Persona_1.Persona(12345678, "Roxana");
persona1.agregarHabilidad({ nombre: "JavaScript", nivel: "Avanzado" });
persona1.agregarEstudio({ titulo: "Licenciatura en Informática", institucion: "Universidad X", anio: 2022 });
persona1.agregarExperiencia({ empresa: "Tech Company", puesto: "Desarrollador", desde: 2020, hasta: 2023 });
persona1.agregarExpectativa({ descripcion: "Crecimiento profesional en el área de desarrollo" });
portfolio.agregarPersona(persona1);
// Listar y guardar en archivo JSON
portfolio.listarPersonas();
portfolio.guardarEnArchivo('portfolio.json');
// Cargar desde archivo JSON
const nuevoPortfolio = new Porfolio_1.Portfolio();
nuevoPortfolio.cargarDesdeArchivo('portfolio.json');
nuevoPortfolio.listarPersonas();
