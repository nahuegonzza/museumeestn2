/**
 * We define all our routes in this file. Routes are matched using `path`.
 * 1. If "path" is a string, then we simply match with url
 * 2. If "path is a object, then we assume it is a RegEx and use RegEx matching
 */

const {APIRouteHandler} = require('../config/config')
const datos_personaController = require('../controllers/datos_persona.controller')


//const projectController = require('./controllers/ProjectController');

const routes = [
    {
        method: 'GET',
        path: `${APIRouteHandler}/datos_persona`,
        handler: datos_personaController.obtenerRegistros.bind(datos_personaController)
    },
    {
        method: 'POST',
        path: `${APIRouteHandler}/datos_persona`,
        handler: datos_personaController.crear.bind(datos_personaController)
    },
    {
        method: 'GET',
        path: /api\/datos_persona\/([0-9a-z]+)/,
        handler: datos_personaController.Bid.bind(datos_personaController)
    },
    {
        method: 'PUT',
        path: /api\/datos_persona\/([0-9a-z]+)/,
        handler: datos_personaController.actualizarRegistro.bind(datos_personaController)
    },
    {
        method: 'DELETE',
        path: /api\/datos_persona\/([0-9a-z]+)/,
        handler: datos_personaController.borrarRegistro.bind(datos_personaController)
    }
];

module.exports = routes;