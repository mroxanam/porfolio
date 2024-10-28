"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
// Persona.ts
class Persona {
    constructor(dni, nombre, habilidades = [], estudios = [], experiencias = [], expectativas = []) {
        this.dni = dni;
        this.nombre = nombre;
        this.habilidades = habilidades;
        this.estudios = estudios;
        this.experiencias = experiencias;
        this.expectativas = expectativas;
    }
    agregarHabilidad(habilidad) {
        this.habilidades.push(habilidad);
    }
    agregarEstudio(estudio) {
        this.estudios.push(estudio);
    }
    agregarExperiencia(experiencia) {
        this.experiencias.push(experiencia);
    }
    agregarExpectativa(expectativa) {
        this.expectativas.push(expectativa);
    }
    listarDatos() {
        console.log(`DNI: ${this.dni}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Habilidades: ${JSON.stringify(this.habilidades, null, 2)}`);
        console.log(`Estudios: ${JSON.stringify(this.estudios, null, 2)}`);
        console.log(`Experiencias: ${JSON.stringify(this.experiencias, null, 2)}`);
        console.log(`Expectativas: ${JSON.stringify(this.expectativas, null, 2)}`);
    }
}
exports.Persona = Persona;
