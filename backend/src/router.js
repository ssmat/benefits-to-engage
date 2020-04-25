const { Router } = require('express');
const userAccountController = require('./controllers/userAccountController');
const companyAccountController = require('./controllers/companyAccountController');

const routes = Router();

routes.post('/company', companyAccountController.store);
routes.post('/user', userAccountController.store);

module.exports = routes;