const express = require("express");
const route = express.Router();
const { createUser, login } = require("../controller/userController"); 

route.post('/register', createUser);
route.post('/login', login);

module.exports = route;

