const { Router } = require('express');
const {usersGet, usersPost, usersPut, UserDelete, loginPost } = require('../controllers/user.controller');
const Router = Router();

Router.get('/users', usersGet);
Router.post('/users', usersPost);
Router.post('/login', loginPost);
Router.put('/users', usersPut);
Router.delete('/users', usersDelete);

module.exports = router;