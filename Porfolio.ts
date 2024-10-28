import * as fs from 'fs';
import { Persona } from './Persona'; // Asegúrate de tener también esta clase importada

export class Portfolio {
    private personas: Map<number, Persona> = new Map();

    agregarPersona(persona: Persona): void {
        this.personas.set(persona.dni, persona);
    }

    eliminarPersona(dni: number): boolean {
        return this.personas.delete(dni);
    }

    obtenerPersona(dni: number): Persona | undefined {
        return this.personas.get(dni);
    }

    listarPersonas(): void {
        this.personas.forEach((persona) => {
            persona.listarDatos();
        });
    }

    guardarEnArchivo(ruta: string): void {
        const data = Array.from(this.personas.values());
        fs.writeFileSync(ruta, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Datos guardados en ${ruta}`);
    }

    cargarDesdeArchivo(ruta: string): void {
        if (fs.existsSync(ruta)) {
            const data = JSON.parse(fs.readFileSync(ruta, 'utf-8'));
            data.forEach((personaData: any) => {
                const persona = new Persona(
                    personaData.dni,
                    personaData.nombre,
                    personaData.habilidades,
                    personaData.estudios,
                    personaData.experiencias,
                    personaData.expectativas
                );
                this.agregarPersona(persona);
            });
            console.log(`Datos cargados desde ${ruta}`);
        } else {
            console.log(`Archivo no encontrado en la ruta: ${ruta}`);
        }
    }
}


   
