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
