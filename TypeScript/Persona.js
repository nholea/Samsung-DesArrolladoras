"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//Exportamos clase Persona
var Persona = /** @class */ (function () {
    function Persona(nom, ape, edad, DNI, cumple, colofav, sexo, dire, mail, tlf, notas) {
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
    Object.defineProperty(Persona.prototype, "nombre", {
        //Getters
        get: function () {
            return this._nombre;
        },
        //Setters
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (value) {
            this._DNI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (value) {
            this._cumpleaños = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorfavorito", {
        get: function () {
            return this._colorfavorito;
        },
        set: function (value) {
            this._colorfavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (value) {
            this._direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "tel\u00E9fonos", {
        get: function () {
            return this._teléfonos;
        },
        set: function (value) {
            this._teléfonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    //Métodos para añadir direcciones, mails y teléfonos
    Persona.prototype.addDirec = function (value) {
        this._direcciones.push(value);
    };
    Persona.prototype.addMail = function (value) {
        this._mails.push(value);
    };
    Persona.prototype.addTlf = function (value) {
        this._teléfonos.push(value);
    };
    //Métodos para mostrar direcciones, teléfonos, mails completos
    Persona.prototype.mostrarDirec = function () {
        var direcComplet = '';
        for (var i in this.direcciones) {
            direcComplet = direcComplet + "\n\tDirecci\u00F3n " + i + ": " + this.direcciones[i].calle + ", " + this.direcciones[i].número + ", " + this.direcciones[i].piso + ", " + this.direcciones[i].letra + ", " + this.direcciones[i].cp + ", " + this.direcciones[i].población + ", " + this.direcciones[i].provincia;
        }
        return direcComplet;
    };
    Persona.prototype.mostrarMail = function () {
        var mailComplet = '';
        for (var i in this.mails) {
            mailComplet = mailComplet + "\n\tMail " + i + ": " + this.mails[i].tipo + ", " + this.mails[i].dirección;
        }
        return mailComplet;
    };
    Persona.prototype.mostrarTlf = function () {
        var tlfComplet = '';
        for (var i in this.teléfonos) {
            tlfComplet = tlfComplet + "\n\tTel\u00E9fono " + i + ": " + this.teléfonos[i].tipo + ", " + this.teléfonos[i].número;
        }
        return tlfComplet;
    };
    //Método para mostrar en consola datos personales
    Persona.prototype.datosPersonales = function () {
        console.log("\n******************************Datos Personales******************************\n    Nombre: " + this.nombre + "\n    Apellidos: " + this.apellidos + "\n    Edad: " + this.edad + "\n    DNI: " + this.DNI + "\n    Cumplea\u00F1os: " + this.cumpleaños + "\n    Color favorito: " + this.colorfavorito + "\n    Sexo: " + this.sexo + "\n    Direcciones: " + this.mostrarDirec() + "\n    Mails: " + this.mostrarMail() + "\n    Tel\u00E9fonos: " + this.mostrarTlf() + "\n    Notas: " + this.notas);
    };
    return Persona;
}());
exports.Persona = Persona;
