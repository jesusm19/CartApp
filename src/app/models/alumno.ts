import { Materia } from "./materia";

export class Alumno {
    id!: number;
    nombre!: string;
    apellidoPaterno!: string;
    apellidoMaterno!: string;
    materias!: Materia[];
}