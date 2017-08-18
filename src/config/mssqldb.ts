var mssql = require("mssql");
var mssqldbCfg = require('../config/index').mssqldb
var nomalLog = require('../config/log').normalLog
var sqlConnectionPool = new mssql.ConnectionPool(mssqldbCfg);
sqlConnectionPool.on('error', err => {
    nomalLog.error(err);
})
export = {
    connect() {
        sqlConnectionPool.connect();
    },
    query(sql, params, callback) {
        if (arguments.length == 2) {
            callback = arguments[1];
        }
        let pro;
        if (!sqlConnectionPool.connected && !sqlConnectionPool.connecting) {
            pro = sqlConnectionPool.connect();
        } else {
            pro = new Promise((resovel, reject) => {
                resovel(sqlConnectionPool);
            })
        }
        pro.then(pool => {
            let req = pool.request();
            if (params) {
                Object.keys(params).forEach((ele) => {
                    req.input(ele, params[ele]);
                })
            }
            req.query(sql).then(result => {
                callback && callback({
                    state: true,
                    result
                })
            }).catch(err => {
                nomalLog.error(err);
                callback && callback({
                    state: false,
                    message: err
                })
            })
        }).catch(err => {
            nomalLog.error(err);
            callback && callback({
                state: false,
                message: err
            })
        });
    },
    close() {
        if (sqlConnectionPool) {
            console.log('正在关闭数据库链接...');
            sqlConnectionPool.close().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}