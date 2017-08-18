import * as fs from 'fs'
import * as socketio from 'socket.io';
import config = require('./index');
export = function (server) {
    var io =socketio(server);

    //socket连接
    io.on("connection", function (socket) {
        //绑定socket事件
        let socketDir = config.rootDir + '/sockets';
        if (fs.existsSync(socketDir)) {
            var sockets = fs.readdirSync(socketDir);
            for (var i = 0; i < sockets.length; i++) {
                var item = sockets[i]
                require('../sockets/' + item)(socket);
            }
        }
    });

    return io;
}