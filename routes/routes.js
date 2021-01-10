const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/iletisim', controllers.postiletisim);

module.exports = router;