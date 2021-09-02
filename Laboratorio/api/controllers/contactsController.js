const { validationResult } = require('express-validator');

const ObjectId = require('mongodb').ObjectID;

//Incluir el fichero con la definción de la BD
var db = require('../db/db');

//Conectar con la BD
db.connect('mongodb://localhost:27017', function (err) {
  if (err) {
    throw 'Fallo en la conexión con la BD';
  }
});

// Display all users
module.exports.contacts_list = function (req, res, next) {
  //Si el objeto es nulo, es que no se ha estableciod la conexión
  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }
  //Recuperar datos de la BD en forma de array
  db.get()
    .db('agenda')
    .collection('contacts')
    .find()
    .toArray(function (err, result) {
      //Si se produjo un error, enviar el error a la siguiente función
      if (err) {
        next(new Error('Fallo en la conexión con la BD'));
        return;
      } else {
        //Si todo fue bien, devolver el resultado al cliente
        res.send(result);
      }
    });
};

//Display one user
module.exports.contacts_get_one = function (req, res, next) {
  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }
  const id = req.params.id;

  //Recuperar un usuario de la BD
  db.get()
    .db('agenda')
    .collection('contacts')
    .findOne({ _id: ObjectId(id) }, function (err, result) {
      //Si se produjo un error, enviar el error a la siguiente función
      if (err) {
        next(new Error('Fallo en la conexión con la BD'));
        return;
      } else {
        //Si todo fue bien, devolver el resultado al cliente
        res.send(result);
      }
    });
};

// Create one user
module.exports.contacts_create = function (req, res, next) {
  //Comprobar errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }
  //Documento
  const contact = {};
  contact.nombre = req.body.nombre;
  contact.apellido = req.body.apellido;
  contact.edad = req.body.edad;
  contact.DNI = req.body.DNI;
  contact.cumple = req.body.cumple;
  contact.colorFav = req.body.colorFav;
  contact.sexo = req.body.sexo;

  //Insertar un documento
  db.get()
    .db('agenda')
    .collection('contacts')
    .insertOne(contact, function (err, result) {
      //Si se produjo un error, enviar el error a la siguiente función
      if (err) {
        next(new Error('Fallo en la conexión con la BD'));
        return;
      } else {
        //Si todo fue bien, devolver el resultado al cliente
        res.send(result);
      }
    });
};

// Update users
module.exports.contacts_update_one = function (req, res, next) {
  //Comprobar errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }

  const id = req.params.id;
  const update = {
    $set: {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
      DNI: req.body.DNI,
      cumple: req.body.cumple,
      colorFav: req.body.colorFav,
      sexo: req.body.sexo,
    },
  };

  //Actualizar documento
  db.get()
    .db('agenda')
    .collection('contacts')
    .updateOne({ _id: ObjectId(id) }, update, function (err, result) {
      //Si se produjo un error, enviar el error a la siguiente función
      if (err) {
        next(new Error('Fallo en la conexión con la BD'));
        return;
      } else {
        //Si todo fue bien, devolver el resultado al cliente
        res.send(result);
      }
    });
};

// Delete users
module.exports.contacts_delete_one = function (req, res, next) {
  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }

  const id = req.params.id;

  //Eliminar un documento
  db.get()
    .db('agenda')
    .collection('contacts')
    .deleteOne({ _id: ObjectId(id) }, function (err, result) {
      //Si se produjo un error, enviar el error a la siguiente función
      if (err) {
        next(new Error('Fallo en la conexión con la BD'));
        return;
      } else {
        //Si todo fue bien, devolver el resultado al cliente
        res.send(result);
      }
    });
};
