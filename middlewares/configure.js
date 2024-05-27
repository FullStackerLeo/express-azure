const path = require('path');
const cors = require('cors');
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');

module.exports = function(app) {
    app.use(cors())
    app.use(express.static('public'));  //static     app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('secret-value'));
    
    if (app.get('env') === 'development') {
        app.use(errorHandler())
    }

    return app;
}
