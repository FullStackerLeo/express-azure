// https://segmentfault.com/a/1190000022039572

const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

app.use(cors())
app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(`请求日志：${req.method} ${req.url} ${new Date()}`);
    next(); // 放行
}) //可以发现：任何请求进来都会先打印请求日志，然后才会执行具体的业务处理函数

app.set('views', './views');    // 指定模板存放目录
app.set('view engine', 'hbs');  // 指定模板引擎为 Handlebars
app.use('/', indexRouter)
app.use('/api', apiRouter)

app.use('*', (req, res) => {
    res.status(404).render('404', { url: req.originalUrl });});

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_YY)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));