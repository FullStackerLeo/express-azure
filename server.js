//0. System   https://segmentfault.com/a/1190000022039572
const express = require('express');
const cors = require('cors');

// 1. app
const app = express();
app.use(cors())
app.use(express.static('public'));  //static

//2. body-parser config;
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

// 3. routes
const routes = require('./routes');
app.use('/', routes);

// 4. middlewares
const errorHandler = require('./middlewares/error-handler');
app.use((req, res, next) => {    console.log(`log：${req.method} ${req.url} ${new Date()}`);    next(); }) // execute before every transaction

// 5. template engine
app.set('views', './hbs');    // template fodler
app.set('view engine', 'hbs');  // template engine: Handlebars

// // 6. Mongoose
// const mongodb = require('./database/Mongo.database');
// mongodb.connectToDatabase();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`);});