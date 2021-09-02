"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos clase Dirección, Teléfno, Mail y Persona
var Direcci_n_1 = require("./Direcci\u00F3n");
var Tel_fono_1 = require("./Tel\u00E9fono");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
//Creamos registro de 3 personas
var dirección1 = new Direcci_n_1.Dirección('Avda. Juan Pablo II ', 15, '1ª', 'A', 18013, 'Granada', 'Granada');
var mail1 = new Mail_1.Mail('Personal', 'juanms@outlook.com');
var mail1b = new Mail_1.Mail('Trabajo', 'juanms@equilatera.es');
var teléfono1 = new Tel_fono_1.Teléfono('Personal', 697123189);
var persona1 = new Persona_1.Persona('Juan', 'Martínez Sánchez', 42, '12345678-Z', '1979/09/25', 'Azul', 'Hombre', [dirección1], [mail1, mail1b], [teléfono1], 'El lunes tengo partido de fútbol');
var dirección2 = new Direcci_n_1.Dirección('Calle Murillo', 1, 2, 'B', 30740, 'San Pedro del Pinatar', 'Murcia');
var mail2 = new Mail_1.Mail('Personal', 'noefernan@gmail.com');
var teléfono2 = new Tel_fono_1.Teléfono('Trabajo', 688551232);
var persona2 = new Persona_1.Persona('Noelia', 'Fernández Rivera', 50, '74852231-L', '2005/01/16', 'Amarillo', 'Mujer', [dirección2], [mail2], [teléfono2], 'Preparar examen Matemáticas para el Viernes 26 Marzo');
var dirección3 = new Direcci_n_1.Dirección('Calle del Príncipe de Vergara', 26, 1, 'A', 28001, 'Madrid', 'Madrid');
var mail3 = new Mail_1.Mail('Trabajo', 'reserva@viajesformidables.com');
var teléfono3 = new Tel_fono_1.Teléfono('Casa', 916384562);
var persona3 = new Persona_1.Persona('Marta', 'Ortiz Varón', 37, '14539585-P', '1984/04/11', 'Violeta', 'Mujer', [dirección3], [mail3], [teléfono3], 'Llamar a Alonso para confirmar la reserva');
//Mostrar en consola el registro de las 3 personas
console.log(persona1.datosPersonales());
console.log(persona2.datosPersonales());
console.log(persona3.datosPersonales());
//Array que almacena los 3 registros de personas creados
var agenda = [];
agenda.push(persona1, persona2, persona3);
var personaDNI; //Variable persona registrada DNI = DNI introducido
//Función que realiza búsqueda DNI en array agenda donde se almacena los 3 registros
function comprobarDNI(dni) {
    for (var _i = 0, agenda_1 = agenda; _i < agenda_1.length; _i++) {
        var persona = agenda_1[_i];
        if (persona.DNI === dni) {
            personaDNI = persona;
            console.log("El DNI introducido corresponde con " + persona.nombre + " " + persona.apellidos);
        }
        else {
            console.log("El DNI introducido no coincide con " + persona.nombre + " " + persona.apellidos);
        }
    }
    return personaDNI;
}
//Nueva dirección, mail, teléfono para añadir si DNI introducido = DNI registrado
var nuevaDirec = new Direcci_n_1.Dirección('Avda. de el Rompido', 48, '3º', 'D', 21450, 'Cartaya', 'Huelva');
var nuevoMail = new Mail_1.Mail('Abogado', 'info@bonillaabogados.es');
var nuevoTlf = new Tel_fono_1.Teléfono('Trabajo', 959912357);
//Función que añade nueva dirección, mail y teléfono si DNI introducido = DNI registrado
function modificarDatos() {
    if (personaDNI != undefined) {
        personaDNI.addDirec(nuevaDirec);
        personaDNI.addMail(nuevoMail);
        personaDNI.addTlf(nuevoTlf);
    }
    else {
        console.log('\n\nEl DNI introducido no coincide con ninguno de los registros.\n\t\tNo se producen modificaciones.');
    }
    return personaDNI;
}
//Función imprime en pantalla el nuevo registro
function nuevoRegistro() {
    for (var _i = 0, agenda_2 = agenda; _i < agenda_2.length; _i++) {
        var persona = agenda_2[_i];
        persona.datosPersonales();
    }
}
comprobarDNI('74852231-L');
modificarDatos();
console.log('\n--------------------------------------Nuevo Registro--------------------------------------');
nuevoRegistro();
