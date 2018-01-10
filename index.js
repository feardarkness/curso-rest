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

app.get("/personas", (req, res) => {
  Promise.resolve()
    .then(() => listarPersonasPaginado(req.query.limite, req.query.intervalo))
    .then((listadoDePersonas) => {
      res.json(listadoDePersonas);
    })
    .catch(() => res.status(500).json('Error grave'));
});

app.post("/personas", (req, res) => {
  Promise.resolve()
    .then(() => crearPersona(req.body))
    .then((persona) => {
      res.json(persona);
    })
    .catch(() => res.status(500).json('Error grave'));
});

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


app.listen(4000);