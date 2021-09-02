var express = require('express');
var router = express.Router();
var contact_controller = require('../controllers/contactsController');
const { check } = require('express-validator');

/*Validar contacto*/
const valid_contact = [
  check('nombre')
    .notEmpty()
    .withMessage('Nombre es obligatorio')
    .bail()
    .isAlpha(['es-ES'], { ignore: '- /' })
    .withMessage('Nombre no puede incluir números')
    .isLength({ min: 3 })
    .withMessage('Nombre debe tener al menos 3 caracteres'),
  check('apellido')
    .notEmpty()
    .withMessage('Apellido es obligatorio')
    .bail()
    .isAlpha(['es-ES'], { ignore: '- /' })
    .withMessage('Apellido no puede incluir números')
    .isLength({ min: 3 })
    .withMessage('Apellido debe tener al menos 3 caracteres'),
  check('edad')
    .notEmpty()
    .withMessage('Edad es obligatorio')
    .bail()
    .isInt({ min: 0, max: 125 })
    .withMessage('Edad debe ser un número comprendido entre 0-125'),
  check('DNI')
    .notEmpty()
    .withMessage('DNI es obligatorio')
    .bail()
    .matches(/^(\d{8})([A-Z])$/)
    .withMessage('Formato no DNI válido: 8 dígitos seguido de una letra A-Z'),
  check('cumple')
    .notEmpty()
    .withMessage('Cumpleaños es obligatorio')
    .bail()
    .isISO8601({ strict: true })
    .withMessage('Formato cumpleaños no válido: yyyy-mm-dd'),
  check('colorFav')
    .notEmpty()
    .withMessage('Color Favorito es obligatorio')
    .bail()
    .isAlpha(['es-ES'], { ignore: '- /' })
    .withMessage('Color Favorito no puede incluir números')
    .isLength({ min: 3 })
    .withMessage('Color Favorito debe tener al menos 3 caracteres'),
  check('sexo')
    .notEmpty()
    .withMessage('Sexo es obligatorio')
    .bail()
    .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado']) //Comprueba si el texto introducido se encuentra entre estos valores
    .withMessage(
      'Sexo sólo acepta una opción de esta lista: Hombre, Mujer, Otro, No especificado'
    ),
];

/* GET users listing. */
router.get('/', contact_controller.contacts_list);
/*POST create user.*/
router.post('/', valid_contact, contact_controller.contacts_create);
/* GET one user */
router.get('/:id', contact_controller.contacts_get_one);
/* PUT update user. */
router.put('/:id', valid_contact, contact_controller.contacts_update_one);
/* DELETE delete user. */
router.delete('/:id', contact_controller.contacts_delete_one);

module.exports = router;
