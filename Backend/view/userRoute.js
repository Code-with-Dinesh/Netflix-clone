const express = require("express");
const route = express.Router();
const createUser = require("../controller/userController");

route.post('/register', createUser);

module.exports = route;
