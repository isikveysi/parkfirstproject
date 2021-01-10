const express = require('express');
const router = express.Router();
const {postiletisim,getiletisim} = require('./../controllers/controllers');

router.get('/iletisim', getiletisim);
router.post('/iletisim', postiletisim);

module.exports = router;