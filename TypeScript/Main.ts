//Importamos clase Dirección, Teléfno, Mail y Persona
import { Dirección } from "./Dirección";
import { Teléfono } from "./Teléfono";
import { Mail } from "./Mail";
import { Persona } from "./Persona";

//Creamos registro de 3 personas
let dirección1 = new Dirección('Avda. Juan Pablo II ', 15, '1ª', 'A', 18013, 'Granada', 'Granada');
let mail1 = new Mail('Personal', 'juanms@outlook.com');
let mail1b = new Mail('Trabajo', 'juanms@equilatera.es');
let teléfono1 = new Teléfono('Personal', 697123189);
let persona1 = new Persona('Juan', 'Martínez Sánchez', 42, '12345678-Z', '1979/09/25', 'Azul', 'Hombre', [dirección1], [mail1, mail1b], [teléfono1], 'El lunes tengo partido de fútbol');

let dirección2 = new Dirección('Calle Murillo', 1, 2, 'B', 30740, 'San Pedro del Pinatar', 'Murcia');
let mail2 = new Mail('Personal', 'noefernan@gmail.com');
let teléfono2 = new Teléfono('Trabajo', 688551232);
let persona2 = new Persona('Noelia', 'Fernández Rivera', 50, '74852231-L', '2005/01/16', 'Amarillo', 'Mujer', [dirección2], [mail2], [teléfono2], 'Preparar examen Matemáticas para el Viernes 26 Marzo');

let dirección3 = new Dirección('Calle del Príncipe de Vergara', 26, 1, 'A', 28001, 'Madrid', 'Madrid');
let mail3 = new Mail('Trabajo', 'reserva@viajesformidables.com');
let teléfono3 = new Teléfono('Casa', 916384562);
let persona3 = new Persona('Marta', 'Ortiz Varón', 37, '14539585-P', '1984/04/11', 'Violeta', 'Mujer', [dirección3], [mail3], [teléfono3], 'Llamar a Alonso para confirmar la reserva');

//Mostrar en consola el registro de las 3 personas
console.log(persona1.datosPersonales());
console.log(persona2.datosPersonales());
console.log(persona3.datosPersonales());

//Array que almacena los 3 registros de personas creados
let agenda: Persona[] = [];
agenda.push(persona1, persona2, persona3);

var personaDNI: Persona;//Variable persona registrada DNI = DNI introducido

//Función que realiza búsqueda DNI en array agenda donde se almacena los 3 registros
function comprobarDNI(dni: string): Persona {
    for (const persona of agenda) {
        if (persona.DNI === dni) {
            personaDNI = persona;
            console.log(`El DNI introducido corresponde con ${persona.nombre} ${persona.apellidos}`);
        } else {
            console.log(`El DNI introducido no coincide con ${persona.nombre} ${persona.apellidos}`);
        }
    }
    return personaDNI
}

//Nueva dirección, mail, teléfono para añadir si DNI introducido = DNI registrado
let nuevaDirec = new Dirección('Avda. de el Rompido', 48, '3º', 'D', 21450, 'Cartaya', 'Huelva');
let nuevoMail = new Mail('Abogado', 'info@bonillaabogados.es');
let nuevoTlf = new Teléfono('Trabajo', 959912357);

//Función que añade nueva dirección, mail y teléfono si DNI introducido = DNI registrado
function modificarDatos(): Persona {
    if (personaDNI != undefined) {
        personaDNI.addDirec(nuevaDirec);
        personaDNI.addMail(nuevoMail);
        personaDNI.addTlf(nuevoTlf);
    } else {
        console.log('\n\nEl DNI introducido no coincide con ninguno de los registros.\n\t\tNo se producen modificaciones.')
    }
    return personaDNI
}

//Función imprime en pantalla el nuevo registro
function nuevoRegistro(): void {
    for (const persona of agenda) {
        persona.datosPersonales();
    }
}

comprobarDNI('74852231-L');
modificarDatos();
console.log('\n--------------------------------------Nuevo Registro--------------------------------------')
nuevoRegistro();
