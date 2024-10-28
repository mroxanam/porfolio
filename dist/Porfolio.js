"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
const fs = __importStar(require("fs"));
const Persona_1 = require("./Persona"); // Asegúrate de tener también esta clase importada
class Portfolio {
    constructor() {
        this.personas = new Map();
    }
    agregarPersona(persona) {
        this.personas.set(persona.dni, persona);
    }
    eliminarPersona(dni) {
        return this.personas.delete(dni);
    }
    obtenerPersona(dni) {
        return this.personas.get(dni);
    }
    listarPersonas() {
        this.personas.forEach((persona) => {
            persona.listarDatos();
        });
    }
    guardarEnArchivo(ruta) {
        const data = Array.from(this.personas.values());
        fs.writeFileSync(ruta, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Datos guardados en ${ruta}`);
    }
    cargarDesdeArchivo(ruta) {
        if (fs.existsSync(ruta)) {
            const data = JSON.parse(fs.readFileSync(ruta, 'utf-8'));
            data.forEach((personaData) => {
                const persona = new Persona_1.Persona(personaData.dni, personaData.nombre, personaData.habilidades, personaData.estudios, personaData.experiencias, personaData.expectativas);
                this.agregarPersona(persona);
            });
            console.log(`Datos cargados desde ${ruta}`);
        }
        else {
            console.log(`Archivo no encontrado en la ruta: ${ruta}`);
        }
    }
}
exports.Portfolio = Portfolio;
