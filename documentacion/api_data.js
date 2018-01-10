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
    "url": "/personas",
    "title": "Permite obtener el listado de personas",
    "name": "Obtener_listado_de_personas",
    "group": "Personas",
    "version": "1.0.0",
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
    "parameter": {
      "examples": [
        {
          "title": "Obtener estado del servicio (CURL)",
          "content": "curl -X GET \\\n   'http://127.0.0.1:4000/personas'",
          "type": "text"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Personas"
  },
  {
    "type": "GET",
    "url": "/",
    "title": "Permite obtener el listado de personas",
    "name": "Obtener_listado_de_personas",
    "group": "Personas",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "codigoArea",
            "description": "<p>Código del área que se desea verificar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correlativo",
            "description": "<p>Correlativo de solicitud del área</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fechaSolicitud",
            "description": "<p>Fecha de solicitud</p>"
          }
        ]
      },
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": ".",
            "description": "<p>Datos de respuesta del servicio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".codigoArea",
            "description": "<p>Código identificador del área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".denominacionArea",
            "description": "<p>Nombre identificador del área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".departamento",
            "description": "<p>Departamento donde se ubica el área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".provincias",
            "description": "<p>Provincia donde se ubica el área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".municipios",
            "description": "<p>Municipio donde se ubica el área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".cuadriculasLibres",
            "description": "<p>Listado de cuadrículas libres en el área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".cantidadCuadriculasLibres",
            "description": "<p>Cantidad de cuadriculas libres en el área.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".correlativo",
            "description": "<p>Correlativo de solicitud del área</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".fechaSolicitud",
            "description": "<p>Fecha de solicitud</p>"
          }
        ],
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
    "group": "_home_osboxes_Development_curso_rest_documentacion_main_js",
    "groupTitle": "_home_osboxes_Development_curso_rest_documentacion_main_js",
    "name": ""
  }
] });
