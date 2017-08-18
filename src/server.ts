#!/usr/bin/env node

import app from './config/express'
var config = require('./config/index')
var mssql = require('./config/mssqldb');
import * as http from 'http'
import socketio =require('./config/socket')

var server = http.createServer(app);

//连接sqlserver 数据库
mssql.connect();

//初始化socket
var io = socketio(server);

var port = config.port;

app.set('port',port);
server.listen(port);

server.on('listening',onListening);
server.on('error',onError);

server.on('close',onClose);

process.on('exit',onClose);

process.on('SIGINT',function () {
    process.exit();
});

function onError(error) {
    console.error(error);
}

function onListening() {
    var addr = server.address();
    console.log('listening on ['+addr.address+']:'+addr.port);
}


function onClose() {
    mssql.close();

}