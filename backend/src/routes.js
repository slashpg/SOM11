const express = require('express');

const OngControler = require('./controlers/OngControler');
const casosControler = require('./controlers/casosControler');
const profileControler = require('./controlers/profileControler');
const loginControler = require('./controlers/loginControler');


const routes = express.Router();

routes.post('/login', loginControler.create);



routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile', profileControler.index);


routes.get('/casos', casosControler.index );
routes.post('/casos', casosControler.create);
routes.delete('/casos/:id', casosControler.delete);

module.exports = routes;
