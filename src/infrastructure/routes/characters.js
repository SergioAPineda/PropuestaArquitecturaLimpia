const express = require('express');
const router = express.Router();

const createCharacterController = require('../controller/CharacterController')

router.post('/newcharacter', createCharacterController())

module.exports = router; 