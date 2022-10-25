export interface Iusuarios {
    alumnos: string
}
export interface Ialumnos {
    id:number;
    nombre:string;
    username:string;
    password:string;
}

export interface publicacion {
    viaje: {
        conductorViaje:string;
        capacidadViaje:"";
        vehiculoViaje:"";
        matriculaViaje:"";
        salidaViaje:"";
        costoViaje:"";
    }
}