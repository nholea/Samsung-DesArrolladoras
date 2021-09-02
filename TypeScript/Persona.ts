//Importamos clase Dirección, Teléfono y Mail
import { Dirección } from "./Dirección";
import { Teléfono } from "./Teléfono";
import { Mail } from "./Mail";

//Exportamos clase Persona
export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _DNI: string;
  private _cumpleaños: string;
  private _colorfavorito: string;
  private _sexo: string;
  private _direcciones: Dirección[];
  private _mails: Mail[];
  private _teléfonos: Teléfono[];
  private _notas: string;

  constructor(
    nom: string,
    ape: string,
    edad: number,
    DNI: string,
    cumple: string,
    colofav: string,
    sexo: string,
    dire: Dirección[],
    mail: Mail[],
    tlf: Teléfono[],
    notas: string
  ) {
    this._nombre = nom;
    this._apellidos = ape;
    this._edad = edad;
    this._DNI = DNI;
    this._cumpleaños = cumple;
    this._colorfavorito = colofav;
    this._sexo = sexo;
    this._direcciones = dire;
    this._mails = mail;
    this._teléfonos = tlf;
    this._notas = notas;
  }

  //Setters
  public set nombre(value: string) {
    this._nombre = value;
  }
  public set apellidos(value: string) {
    this._apellidos = value;
  }
  public set edad(value: number) {
    this._edad = value;
  }
  public set DNI(value: string) {
    this._DNI = value;
  }
  public set cumpleaños(value: string) {
    this._cumpleaños = value;
  }
  public set colorfavorito(value: string) {
    this._colorfavorito = value;
  }
  public set sexo(value: string) {
    this._sexo = value;
  }
  public set direcciones(value: Dirección[]) {
    this._direcciones = value;
  }
  public set mails(value: Mail[]) {
    this._mails = value;
  }
  public set teléfonos(value: Teléfono[]) {
    this._teléfonos = value;
  }
  public set notas(value: string) {
    this._notas = value;
  }

  //Getters
  public get nombre(): string {
    return this._nombre;
  }
  public get apellidos(): string {
    return this._apellidos;
  }
  public get edad(): number {
    return this._edad;
  }
  public get DNI(): string {
    return this._DNI;
  }
  public get cumpleaños(): string {
    return this._cumpleaños;
  }
  public get colorfavorito(): string {
    return this._colorfavorito;
  }
  public get sexo(): string {
    return this._sexo;
  }
  public get direcciones(): Dirección[] {
    return this._direcciones;
  }
  public get mails(): Mail[] {
    return this._mails;
  }
  public get teléfonos(): Teléfono[] {
    return this._teléfonos;
  }
  public get notas(): string {
    return this._notas;
  }

  //Métodos para añadir direcciones, mails y teléfonos
  public addDirec(value: Dirección) {
    this._direcciones.push(value);
  }

  public addMail(value: Mail) {
    this._mails.push(value);
  }

  public addTlf(value: Teléfono) {
    this._teléfonos.push(value);
  }

  //Métodos para mostrar direcciones, teléfonos, mails completos
  public mostrarDirec(): string {
    let direcComplet: string = "";
    for (const i in this.direcciones) {
      direcComplet = `${direcComplet}\n\tDirección ${i}: ${this.direcciones[i].calle}, ${this.direcciones[i].número}, ${this.direcciones[i].piso}, ${this.direcciones[i].letra}, ${this.direcciones[i].cp}, ${this.direcciones[i].población}, ${this.direcciones[i].provincia}`;
    }
    return direcComplet;
  }

  public mostrarMail(): string {
    let mailComplet: string = "";
    for (const i in this.mails) {
      mailComplet = `${mailComplet}\n\tMail ${i}: ${this.mails[i].tipo}, ${this.mails[i].dirección}`;
    }
    return mailComplet;
  }

  public mostrarTlf(): string {
    let tlfComplet: string = "";
    for (const i in this.teléfonos) {
      tlfComplet = `${tlfComplet}\n\tTeléfono ${i}: ${this.teléfonos[i].tipo}, ${this.teléfonos[i].número}`;
    }
    return tlfComplet;
  }

  //Método para mostrar en consola datos personales
  public datosPersonales() {
    console.log(`\n******************************Datos Personales******************************
    Nombre: ${this.nombre}
    Apellidos: ${this.apellidos}
    Edad: ${this.edad}
    DNI: ${this.DNI}
    Cumpleaños: ${this.cumpleaños}
    Color favorito: ${this.colorfavorito}
    Sexo: ${this.sexo}
    Direcciones: ${this.mostrarDirec()}
    Mails: ${this.mostrarMail()}
    Teléfonos: ${this.mostrarTlf()}
    Notas: ${this.notas}`);
  }
}
