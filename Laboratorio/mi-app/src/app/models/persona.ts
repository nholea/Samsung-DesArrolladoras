export class Persona {
  _id?: string;
  nombre: string;
  apellido: string;
  edad: number;
  DNI: string;
  cumple: Date;
  colorFav: string;
  sexo: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    DNI: string,
    cumple: Date,
    colorFav: string,
    sexo: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.DNI = DNI;
    this.cumple = cumple;
    this.colorFav = colorFav;
    this.sexo = sexo;
  }

  
}
