define({ "api": [
  {
    "type": "GET",
    "url": "/",
    "title": "Permite obtener el estado de la aplicación",
    "name": "Obtener_estado_del_servicio",
    "group": "Estado",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Obtener estado del servicio (CURL)",
          "content": "curl -X GET \\\n   'http://127.0.0.1:4000/'",
          "type": "text"
        }
      ]
    },
    "success": {
      "fields": {
        "Respuesta Exitosa": [
          {
            "group": "Respuesta Exitosa",
            "type": "String",
            "optional": false,
            "field": "respuesta",
            "description": "<p>Respuesta de servicio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa",
          "content": "HTTP/1.1  200  OK\n***Aplicación NODEJS iniciada en EXPRESSJS\\n",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Estado"
  },
  {
    "type": "GET",
    "url": "/personas/:idPersona/hobbies",
    "title": "Obtener hobbies de una persona",
    "name": "Obtiene_los_hobbies_de_una_persona",
    "group": "Hobbies",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idPersona",
            "description": "<p>Identificador único de la persona</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Obtención de los hobbies de una persona (CURL)",
          "content": "curl -X GET \\\n  http://127.0.0.1:4000/personas/1/hobbies",
          "type": "text"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Array de datos de respuesta del servicio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".id_hobbie",
            "description": "<p>Identificador del hobbie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".descripcion",
            "description": "<p>Descripción del hobbie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".fid_persona",
            "description": "<p>Identificado de la persona relacionada con el hobbie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".createdAt",
            "description": "<p>Creado en.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".updatedAt",
            "description": "<p>Actualizado en.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa",
          "content": "HTTP/1.1  200  OK\n[\n    {\n        \"id_hobbie\": 1,\n        \"descripcion\": \"Comer\",\n        \"fid_persona\": 1,\n        \"createdAt\": \"2018-01-10T14:08:25.265Z\",\n        \"updatedAt\": \"2018-01-10T14:08:25.265Z\"\n    },\n    {\n        \"id_hobbie\": 5,\n        \"descripcion\": \"Pasear en  bicicleta\",\n        \"fid_persona\": 1,\n        \"createdAt\": \"2018-01-10T14:13:36.439Z\",\n        \"updatedAt\": \"2018-01-10T14:13:36.439Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Hobbies"
  },
  {
    "type": "PATCH",
    "url": "/personas/:idPersona",
    "title": "Modificación parcial",
    "name": "Modificaci_n_del_nombre_de_una_persona",
    "group": "Personas",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres de la persona</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Modificación parcial de los datos de una persona (CURL)",
          "content": "curl -X PATCH \\\n  http://127.0.0.1:4000/personas/1 \\\n  -H 'content-type: application/json' \\\n  -d '{\n    \"nombres\": \"JULIO\"\n  }'",
          "type": "text"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_persona",
            "description": "<p>Identificador de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombred de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>Fecha de nacimiento de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Creado en.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Actualizado en.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa",
          "content": " HTTP/1.1  200  OK\n{\n    \"id_persona\": 1,\n    \"nombres\": \"JULIO\",\n    \"apellidos\": \"SUAREZ SUAREZ\",\n    \"fecha_nacimiento\": \"1990-12-31T04:00:00.000Z\",\n    \"createdAt\": \"2018-01-10T14:08:25.232Z\",\n    \"updatedAt\": \"2018-01-11T00:21:08.817Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Personas"
  },
  {
    "type": "GET",
    "url": "/personas?limite=:limite&intervalo=:intervalo",
    "title": "Listado",
    "name": "Obtener_listado_de_personas",
    "group": "Personas",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limite",
            "description": "<p>Cantidad de datos que devolverá la solicitud</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intervalo",
            "description": "<p>Registro desde el cuál inicia la cantidad de datos que se devolverá</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Listado de personas (CURL)",
          "content": "curl -X GET \\\n   'http://127.0.0.1:4000/personas'",
          "type": "text"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Array de datos de respuesta del servicio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".id_persona",
            "description": "<p>Identificador de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".nombres",
            "description": "<p>Nombred de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".apellidos",
            "description": "<p>Apellidos de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".fecha_nacimiento",
            "description": "<p>Fecha de nacimiento de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".createdAt",
            "description": "<p>Creado en.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".updatedAt",
            "description": "<p>Actualizado en.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa",
          "content": " HTTP/1.1  200  OK\n[\n    {\n        \"id_persona\": 1,\n        \"nombres\": \"Carlos Andrés\",\n        \"apellidos\": \"Perez Morales\",\n        \"fecha_nacimiento\": \"1986-01-01T04:00:00.000Z\",\n        \"createdAt\": \"2018-01-10T21:14:24.706Z\",\n        \"updatedAt\": \"2018-01-10T21:14:24.706Z\"\n    }\n] *",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Personas"
  },
  {
    "type": "GET",
    "url": "/personas/:idPersona",
    "title": "Obtener una persona",
    "name": "Obtiene_los_datos_de_una_persona_particular",
    "group": "Personas",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idPersona",
            "description": "<p>Identificador único de la persona</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Obtención de los datos de una persona (CURL)",
          "content": "curl -X GET \\\n  http://127.0.0.1:4000/personas/1 \\\n  -H 'content-type: application/json' \\\n  -d '{\n    \"nombres\": \"JULIO\"\n  }'",
          "type": "text"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_persona",
            "description": "<p>Identificador de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombred de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>Fecha de nacimiento de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Creado en.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Actualizado en.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa",
          "content": "HTTP/1.1  200  OK\n{\n    \"id_persona\": 1,\n    \"nombres\": \"JULIO\",\n    \"apellidos\": \"SUAREZ SUAREZ\",\n    \"fecha_nacimiento\": \"1990-12-31T04:00:00.000Z\",\n    \"createdAt\": \"2018-01-10T14:08:25.232Z\",\n    \"updatedAt\": \"2018-01-11T00:21:08.817Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Personas"
  },
  {
    "type": "POST",
    "url": "/personas",
    "title": "Registro",
    "name": "Registro_de_una_persona",
    "group": "Personas",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fechaNacimiento",
            "description": "<p>Fecha de nacimiento de la persona</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Registro de una persona (CURL)",
          "content": "curl -X POST \\\n  http://127.0.0.1:4000/personas \\\n  -H 'content-type: application/json' \\\n  -d '{\n      \"nombres\": \"ENRIQUE\",\n      \"apellidos\": \"BOLAÑOZ\",\n      \"fechaNacimiento\": \"02/01/1980\"\n  }'",
          "type": "text"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_persona",
            "description": "<p>Identificador de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombred de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>Fecha de nacimiento de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Creado en.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Actualizado en.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa",
          "content": " HTTP/1.1  201  CREATED\n{\n    \"id_persona\": 10,\n    \"nombres\": \"ENRIQUE\",\n    \"apellidos\": \"BOLAÑOZ\",\n    \"fecha_nacimiento\": \"1980-02-01T04:00:00.000Z\",\n    \"updatedAt\": \"2018-01-11T03:31:15.518Z\",\n    \"createdAt\": \"2018-01-11T03:31:15.518Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Personas"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./documentacion/main.js",
    "group": "_home_fear_curso_rest_ejemplo_taller_documentacion_main_js",
    "groupTitle": "_home_fear_curso_rest_ejemplo_taller_documentacion_main_js",
    "name": ""
  }
] });
