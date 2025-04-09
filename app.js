const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
const contactRoutes = require('./routes/contactRoutes');

app.use('/', indexRoutes);
app.use('/', contactRoutes);

module.exports = app;
