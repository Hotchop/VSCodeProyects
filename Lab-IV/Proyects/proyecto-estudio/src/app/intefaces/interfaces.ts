export interface puntaje{
    fecha: Date,
    score: number
  };

export interface usuario{
    usuario: string,
    password: string,
    puntajes: puntaje[]
    id?:string;
  };