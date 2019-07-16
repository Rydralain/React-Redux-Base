const express = require('express');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// Init app
const app = express();
const PORT = 3001;

// Body Parser middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// fileUpload middleware
app.use(fileUpload());

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
 
// Start it up
app.listen(PORT);