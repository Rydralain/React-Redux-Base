const express = require('express');
var router = express.Router();

router.post('/SVGUpload', function(req, res){
    require('./test')(req, res);
});

router.get('/test', function(req, res){
    require('./test')(req, res);
});

module.exports = router;