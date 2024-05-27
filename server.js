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
const mainRouter = require('./routes/main_routes');
const apiRouter = require('./routes/api');
app.use('/', mainRouter)
app.use('/api', apiRouter)

// 4. middlewares
const errorHandler = require('./middlewares/error-handler');
app.use((req, res, next) => {
    console.log(`请求日志：${req.method} ${req.url} ${new Date()}`);
    next(); // 放行
}) //可以发现：任何请求进来都会先打印请求日志，然后才会执行具体的业务处理函数

// 5. template engine
app.set('views', './hbs');    // 指定模板存放目录
app.set('view engine', 'hbs');  // 指定模板引擎为 Handlebars


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`);});