const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.post('/getintouch', contactController.submitContactForm);


module.exports = router;
