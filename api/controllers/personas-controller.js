const { validationResult } = require('express-validator');

//Incluir el fichero con la definción de la BD
var db = require('../db/db');

//Conectar con la BD
db.connect('mongodb://localhost:27017', function (err) {
  if (err) {
    throw 'Fallo en la conexión con la BD';
  }
});

// Display all users
module.exports.personas_list = function (req, res, next) {
  //Si el objeto es nulo, es que no se ha estableciod la conexión
  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }
  //Recuperar datos de la BD en forma de array
  db.get()
    .db('apidb')
    .collection('personas')
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
module.exports.personas_display_one = function (req, res, next) {
  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }
  const filter = { id: req.body.id };

  //Recuperar un usuario de la BD
  db.get()
    .db('apidb')
    .collection('personas')
    .findOne(filter, function (err, result) {
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
module.exports.personas_create = function (req, res, next) {
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
  const user = {};
  user.nombre = req.body.nombre;
  user.apellido = req.body.apellido;
  user.edad = req.body.edad;
  user.DNI = req.body.DNI;
  user.cumple = req.body.cumple;
  user.colorFav = req.body.colorFav;
  user.sexo = req.body.sexo;

  //Insertar un documento
  db.get()
    .db('apidb')
    .collection('personas')
    .insertOne(user, function (err, result) {
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
module.exports.personas_update_one = function (req, res, next) {
  //Comprobar errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }

  const filter = { id: req.body.id };
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
    .db('apidb')
    .collection('personas')
    .updateOne(filter, update, function (err, result) {
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
module.exports.personas_delete_one = function (req, res, next) {
  if (db.get() === null) {
    next(new Error('La conexión no está establecida'));
    return;
  }
  const filter = { id: req.body.id };
  //Eliminar un documento
  db.get()
    .db('apidb')
    .collection('personas')
    .deleteOne(filter, function (err, result) {
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
