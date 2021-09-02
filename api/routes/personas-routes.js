var express = require('express');
var router = express.Router();
var persona_controller = require('../controllers/personas-controller');
const { check } = require('express-validator');

/*Validation rules */
const valid_persona = [
  check('nombre')
    .notEmpty()
    .withMessage('Nombre es obligatorio')
    .bail() //Si nombre está vacío, isAlpha() nunca se ejecutará
    .isAlpha(['es-ES'], { ignore: ' -' })
    .withMessage('No puede incluir números')
    .bail() //Si nombre incluye números, isLenght nunca se ejecutará
    .isLength({ min: 3 })
    .withMessage('Debe tener al menos 3 caracteres'),
  check('apellido')
    .notEmpty()
    .withMessage('Apellido es obligatorio')
    .bail() 
    .isAlpha(['es-ES'], { ignore: ' -' })
    .withMessage('No puede incluir números')
    .bail() 
    .isLength({ min: 3 })
    .withMessage('Debe tener al menos 3 caracteres'),
  check('edad')
    .notEmpty()
    .withMessage('Edad es obligatorio')
    .bail()
    .isInt({ min: 0, max: 125 })
    .withMessage('Debe ser un número comprendido entre 0-125'),
  check('DNI')
    .notEmpty()
    .withMessage('DNI es obligatorio')
    .bail()
    .matches(/^(\d{8})([A-Z])$/)
    .withMessage('Formato no válido: 8 dígitos seguido de una letra A-Z'),
  check('cumple')
    .notEmpty()
    .withMessage('Cumple es obligatorio')
    .bail()
    .isISO8601({ strict: true })
    .withMessage('Formato no válido: yyyy-mm-dd'),
  check('colorFav')
    .notEmpty()
    .withMessage('Color Favorito es obligatorio')
    .bail()
    .isAlpha(['es-ES'], { ignore: ' -' })
    .withMessage('No puede incluir números')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Debe tener al menos 3 caracteres'),
  check('sexo')
    .notEmpty()
    .withMessage('Sexo es obligatorio')
    .bail()
    .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado']) //Comprueba si el texto introducido se encuentra entre estos valores
    .withMessage(
      'Sólo se acepta una opción de esta lista: Hombre, Mujer, Otro, No especificado'
    ),
];

/* GET users listing. */
router.get('/', persona_controller.personas_list);
/* GET display user */
router.get('/:id', persona_controller.personas_display_one);
/*POST create user.*/
router.post('/', valid_persona, persona_controller.personas_create);
/* PUT update user. */
router.put('/:id', valid_persona, persona_controller.personas_update_one);
/* DELETE delete user. */
router.delete('/:id', persona_controller.personas_delete_one);

module.exports = router;
