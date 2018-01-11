const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Iniciamos el servidor
const app = express();

// convertimos el curepo del mensaje
app.use(bodyParser.json());

// Iniciamos los modelos de sequelize
const db = require('./db');

// Sincronizamos la base de datos
db.sequelize.sync().done(() => {
  console.log("\n***Base de datos generada");
  app.listen(4000, () => {
    console.log('La aplicación esta escuchando en el puerto 4000!!!');
  });
});

// Habilitamos los logs
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("***Procesando petición...\n");
  next();
});

/**
 * @api {GET} / Permite obtener el estado de la aplicación
 *
 * @apiName Obtener estado del servicio
 * @apiGroup Estado
 * @apiVersion 1.0.0
 *
 * @apiParamExample  {text} Obtener estado del servicio (CURL)
 * curl -X GET \
 *    'http://127.0.0.1:4000/'
 *
 * @apiSuccess (Respuesta Exitosa) {String} respuesta Respuesta de servicio
 *
 *
 * @apiSuccessExample {json} Respuesta exitosa
 *  HTTP/1.1  200  OK
 *  ***Aplicación NODEJS iniciada en EXPRESSJS\n
 *
 */

app.get("/", (req, res) => {
  res.end("***Aplicación NODEJS iniciada en EXPRESSJS\n");
});

/**
 * @api {GET} /personas?limite=:limite&intervalo=:intervalo Listado
 *
 * @apiName Obtener listado de personas
 * @apiGroup Personas
 * @apiVersion 1.0.0
 *
 * @apiParam {String} limite Cantidad de datos que devolverá la solicitud
 * @apiParam {String} intervalo Registro desde el cuál inicia la cantidad de datos que se devolverá
 *
 * @apiSuccess {Object[]} . Array de datos de respuesta del servicio.
 * @apiSuccess {String} .id_persona Identificador de la persona.
 * @apiSuccess {String} .nombres Nombred de la persona.
 * @apiSuccess {String} .apellidos Apellidos de la persona.
 * @apiSuccess {String} .fecha_nacimiento Fecha de nacimiento de la persona.
 * @apiSuccess {String} .createdAt Creado en.
 * @apiSuccess {String} .updatedAt Actualizado en.
 *
 * @apiParamExample  {text} Listado de personas (CURL)
 * curl -X GET \
 *    'http://127.0.0.1:4000/personas'
 *
 * @apiSuccessExample {json} Respuesta exitosa
 *  HTTP/1.1  200  OK
 * [
 *     {
 *         "id_persona": 1,
 *         "nombres": "Carlos Andrés",
 *         "apellidos": "Perez Morales",
 *         "fecha_nacimiento": "1986-01-01T04:00:00.000Z",
 *         "createdAt": "2018-01-10T21:14:24.706Z",
 *         "updatedAt": "2018-01-10T21:14:24.706Z"
 *     }
 * ] *
 */
app.get("/personas", (req, res) => {
  Promise.resolve()
    .then(() => listarPersonasPaginado(req.query.limite, req.query.intervalo))
    .then((listadoDePersonas) => {
      res.json(listadoDePersonas);
    })
    .catch(() => res.status(500).json('Error grave'));
});

/**
 * @api {POST} /personas Registro
 *
 * @apiName Registro de una persona
 * @apiGroup Personas
 * @apiVersion 1.0.0
 *
 * @apiParam {String} nombres Nombres de la persona
 * @apiParam {String} apellidos Apellidos de la persona
 * @apiParam {String} fechaNacimiento Fecha de nacimiento de la persona
 *
 * @apiSuccess {String} id_persona Identificador de la persona.
 * @apiSuccess {String} nombres Nombred de la persona.
 * @apiSuccess {String} apellidos Apellidos de la persona.
 * @apiSuccess {String} fecha_nacimiento Fecha de nacimiento de la persona.
 * @apiSuccess {String} createdAt Creado en.
 * @apiSuccess {String} updatedAt Actualizado en.
 *
 * @apiParamExample  {text} Registro de una persona (CURL)
 * curl -X POST \
 *   http://127.0.0.1:4000/personas \
 *   -H 'content-type: application/json' \
 *   -d '{
 *       "nombres": "ENRIQUE",
 *       "apellidos": "BOLAÑOZ",
 *       "fechaNacimiento": "02/01/1980"
 *   }'
 *
 * @apiSuccessExample {json} Respuesta exitosa
 *  HTTP/1.1  201  CREATED
 * {
 *     "id_persona": 10,
 *     "nombres": "ENRIQUE",
 *     "apellidos": "BOLAÑOZ",
 *     "fecha_nacimiento": "1980-02-01T04:00:00.000Z",
 *     "updatedAt": "2018-01-11T03:31:15.518Z",
 *     "createdAt": "2018-01-11T03:31:15.518Z"
 * }
 */

app.post("/personas", (req, res) => {
  Promise.resolve()
    .then(() => crearPersona(req.body))
    .then((persona) => {
      res.status(201).json(persona);
    })
    .catch(() => res.status(500).json('Error grave'));
});

/**
 * @api {PATCH} /personas/:idPersona Modificación parcial
 *
 * @apiName Modificación del nombre de una persona
 * @apiGroup Personas
 * @apiVersion 1.0.0
 *
 * @apiParam {String} nombres Nombres de la persona
 *
 * @apiSuccess {String} id_persona Identificador de la persona.
 * @apiSuccess {String} nombres Nombred de la persona.
 * @apiSuccess {String} apellidos Apellidos de la persona.
 * @apiSuccess {String} fecha_nacimiento Fecha de nacimiento de la persona.
 * @apiSuccess {String} createdAt Creado en.
 * @apiSuccess {String} updatedAt Actualizado en.
 *
 * @apiParamExample  {text} Modificación parcial de los datos de una persona (CURL)
 * curl -X PATCH \
 *   http://127.0.0.1:4000/personas/1 \
 *   -H 'content-type: application/json' \
 *   -d '{
 *     "nombres": "JULIO"
 *   }'
 *
 * @apiSuccessExample {json} Respuesta exitosa
 *  HTTP/1.1  200  OK
 * {
 *     "id_persona": 1,
 *     "nombres": "JULIO",
 *     "apellidos": "SUAREZ SUAREZ",
 *     "fecha_nacimiento": "1990-12-31T04:00:00.000Z",
 *     "createdAt": "2018-01-10T14:08:25.232Z",
 *     "updatedAt": "2018-01-11T00:21:08.817Z"
 * }
 */

app.patch("/personas/:idPersona", (req, res) => {
  Promise.resolve()
    .then(() => modificarPersona(req.body.nombres, req.params.idPersona))
    .then(() => buscarPersona(req.params.idPersona))
    .then((personaModificada) => {
      res.json(personaModificada);
    })
    .catch((err) => {
      console.log('+++++++++++++++++++++++++++++++++++++++++++');
      console.log(err);
      console.log('+++++++++++++++++++++++++++++++++++++++++++');
      res.status(500).json('Error grave');
    });
});

/**
 * @api {GET} /personas/:idPersona Obtener una persona
 *
 * @apiName Obtiene los datos de una persona particular
 * @apiGroup Personas
 * @apiVersion 1.0.0
 *
 * @apiParam {Integer} idPersona Identificador único de la persona
 *
 * @apiSuccess {String} id_persona Identificador de la persona.
 * @apiSuccess {String} nombres Nombred de la persona.
 * @apiSuccess {String} apellidos Apellidos de la persona.
 * @apiSuccess {String} fecha_nacimiento Fecha de nacimiento de la persona.
 * @apiSuccess {String} createdAt Creado en.
 * @apiSuccess {String} updatedAt Actualizado en.
 *
 * @apiParamExample  {text} Obtención de los datos de una persona (CURL)
 * curl -X GET \
 *   http://127.0.0.1:4000/personas/1 \
 *   -H 'content-type: application/json' \
 *   -d '{
 *     "nombres": "JULIO"
 *   }'
 *
 * @apiSuccessExample {json} Respuesta exitosa
 * HTTP/1.1  200  OK
 * {
 *     "id_persona": 1,
 *     "nombres": "JULIO",
 *     "apellidos": "SUAREZ SUAREZ",
 *     "fecha_nacimiento": "1990-12-31T04:00:00.000Z",
 *     "createdAt": "2018-01-10T14:08:25.232Z",
 *     "updatedAt": "2018-01-11T00:21:08.817Z"
 * }
 */

app.get("/personas/:idPersona", (req, res) => {
  Promise.resolve()
    .then(() => buscarPersona(req.params.idPersona))
    .then((persona) => {
      res.json(persona);
    })
    .catch((err) => {
      res.status(500).json('Error grave')
    });
});

/**
 * @api {GET} /personas/:idPersona/hobbies Listado de hobbies de una persona
 *
 * @apiName Obtiene los hobbies de una persona
 * @apiGroup Hobbies
 * @apiVersion 1.0.0
 *
 * @apiParam {Integer} idPersona Identificador único de la persona
 *
 * @apiSuccess {Object[]} . Array de datos de respuesta del servicio.
 * @apiSuccess {String} .id_hobbie Identificador del hobbie.
 * @apiSuccess {String} .descripcion Descripción del hobbie.
 * @apiSuccess {String} .fid_persona Identificado de la persona relacionada con el hobbie.
 * @apiSuccess {String} .createdAt Creado en.
 * @apiSuccess {String} .updatedAt Actualizado en.
 *
 * @apiParamExample  {text} Obtención de los hobbies de una persona (CURL)
 * curl -X GET \
 *   http://127.0.0.1:4000/personas/1/hobbies
 *
 * @apiSuccessExample {json} Respuesta exitosa
 * HTTP/1.1  200  OK
 * [
 *     {
 *         "id_hobbie": 1,
 *         "descripcion": "Comer",
 *         "fid_persona": 1,
 *         "createdAt": "2018-01-10T14:08:25.265Z",
 *         "updatedAt": "2018-01-10T14:08:25.265Z"
 *     },
 *     {
 *         "id_hobbie": 5,
 *         "descripcion": "Pasear en  bicicleta",
 *         "fid_persona": 1,
 *         "createdAt": "2018-01-10T14:13:36.439Z",
 *         "updatedAt": "2018-01-10T14:13:36.439Z"
 *     }
 * ]
 */
app.get("/personas/:idPersona/hobbies", (req, res) => {
  Promise.resolve()
    .then(() => listarHobbiesDePersona(req.params.idPersona))
    .then((hobbies) => {
      res.json(hobbies);
    })
    .catch((err) => {
      res.status(500).json('Error grave')
    });
});


function crearPersona(persona) {
  persona.fecha_nacimiento = persona.fechaNacimiento;
  return db.persona.create(persona)
  .then(respuesta => {
    console.log("\n***creando persona");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => console.log(error));
}

function crearPersonaYHobbie() {
  const persona = {
    nombres: 'MARIA',
    apellidos: 'SUAREZ SUAREZ',
    fecha_nacimiento: new Date(1990, 11, 31),
  };

  db.persona.create(persona)
  .then(respuesta => {
    console.log("\n***creando persona para hobbie");
    console.log(JSON.stringify(respuesta));

    const hobbie = {
      descripcion: 'Pasear en  bicicleta',
      fid_persona: respuesta.id_persona,
    } 

    return db.hobbie.create(hobbie);
  }).then(respuesta => {
    console.log("\n***creando hobbie");
    console.log(JSON.stringify(respuesta));
  }).catch(error => console.log(error));
}


function modificarPersona(nombres, idPersona) {
  return db.persona.update({
    nombres,
  }, {
    where: {
      id_persona: idPersona,
    },
    // returning: true,
  })
  .then(respuesta => {
    console.log("\n***modificando persona");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => console.log(error));

}


function modificarPersonaObjeto() {
  return db.persona.findById(2)
  .then(respuesta => {
    return respuesta.updateAttributes({ nombres: 'MARIA ISABLE' });
  }).then(respuesta => {
    console.log("\n***modificando persona");
    console.log(JSON.stringify(respuesta));
  }).catch(error => console.log(error));

}


function listarPersonas() {
  return db.persona.findAll()
  .then(respuesta => {
    console.log("\n***Listando persona");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

function listarHobbiesDePersona(idPersona) {
  return db.hobbie.findAll({where: {fid_persona: idPersona}})
  .then(respuesta => {
    console.log("\n***Listando hobbies");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

function listarPersonasPaginado(limite, intervalo) {
  return db.persona.findAll({limit: limite, offset: intervalo})
  .then(respuesta => {
    console.log("\n***Listando persona");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

function buscarPersona(id) {
  console.log('+++++++++++++++++++++++++++++++++++++++++++');
  console.log(id);
  console.log('+++++++++++++++++++++++++++++++++++++++++++');
  return db.persona.findById(id)
  .then(respuesta => {
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}



function listarPersonasYHobbies() {

  return db.persona.findAll({
    include: [{
      model: db.hobbie,
      as: 'hobbies',
    }],
  })
  .then(respuesta => {
    console.log("\n***Listando persona y hobbies");
    console.log(JSON.stringify(respuesta));
  }).catch(error => console.log(error));

}

function listarHobbies() {

  db.hobbie.findAll({
    include: [{
      model: db.persona,
      as: 'persona',
    }],
  })
  .then(respuesta => {
    console.log("\n***Listando hobbies");
    console.log(JSON.stringify(respuesta));
  }).catch(error => console.log(error));

}


function borrarHobbie() {

  db.hobbie.destroy({
    where: {id_hobbie: 2},
  })
  .then(respuesta => {
    console.log("\n***Eliminando hobbie");
    console.log(JSON.stringify(respuesta));
  }).catch(error => console.log(error));

}


