import { Time } from "@angular/common";

export class Viajes {
    id: number;
    conductor: string;
    capacidad: number;
    color_vehiculo: string;
    matricula: string;
    hora_salida: Time;
    costo_persona: number;
}
