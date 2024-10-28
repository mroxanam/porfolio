// Persona.ts
export class Persona {
    constructor(
        public dni: number,
        public nombre: string,
        public habilidades: { nombre: string; nivel: string }[] = [],
        public estudios: { titulo: string; institucion: string; anio: number }[] = [],
        public experiencias: { empresa: string; puesto: string; desde: number; hasta: number }[] = [],
        public expectativas: { descripcion: string }[] = []
    ) {}

    agregarHabilidad(habilidad: { nombre: string; nivel: string }): void {
        this.habilidades.push(habilidad);
    }

    agregarEstudio(estudio: { titulo: string; institucion: string; anio: number }): void {
        this.estudios.push(estudio);
    }

    agregarExperiencia(experiencia: { empresa: string; puesto: string; desde: number; hasta: number }): void {
        this.experiencias.push(experiencia);
    }

    agregarExpectativa(expectativa: { descripcion: string }): void {
        this.expectativas.push(expectativa);
    }

    listarDatos(): void {
        console.log(`DNI: ${this.dni}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Habilidades: ${JSON.stringify(this.habilidades, null, 2)}`);
        console.log(`Estudios: ${JSON.stringify(this.estudios, null, 2)}`);
        console.log(`Experiencias: ${JSON.stringify(this.experiencias, null, 2)}`);
        console.log(`Expectativas: ${JSON.stringify(this.expectativas, null, 2)}`);
    }
}

