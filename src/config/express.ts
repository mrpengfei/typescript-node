import * as express from 'express'
var config = require('./index')
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');

var app = express();

//设置静态资源根目录
app.use(express.static(path.join(config.rootDir,'static')));
//favicon

app.use(favicon(path.join(config.rootDir,'favicon.png')));

//设置模板引擎
//app.engine('html',ejs.renderFile);
app.set('views',path.join(config.rootDir,'views'));
app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser())


//路由
import router = require('../routers');
router(app);

var handlerError = require('../filters/handler-error');
handlerError(app);


export default app;