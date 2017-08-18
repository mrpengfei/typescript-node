var log4js = require('log4js');
var sysConfig = require('./index');

var mailSubject = '[]发生错误';
//log4js.setGlobalLogLevel("error"); //trace: 蓝色，debug: 青色， info：绿色，warn：黄色，error：红色， fatal：粉色
//log4js.appender.MAIL.From = 'service@daishu360.com';
// log4js.configure({
//     appenders: [
//         { type: 'console' }, //控制台输出
//         {
//             type: 'dateFile', //文件输出
//             filename: './logs/normal/',
//             pattern: '-yyyy-MM-dd.log',
//             alwaysIncludePattern: true,
//             maxLogSize: 1000,
//             backups: 3,
//             category: 'normal'
//         },
//         {
//             type: 'smtp',
//             category: 'mail',
//             recipients: 'shipengfei@daishu360.com',
//             sendInterval: 30,
//             subject: mailSubject,
//             transport: 'SMTP',
//             sender: 'service@daishu360.com',
//             SMTP: {
//                 host: 'smtp.exmail.qq.com',
//                 secureConnection: true,
//                 port: 465,
//                 auth: {
//                     user: 'service@daishu360.com',
//                     pass: 'DSpuhui360.cn'
//                 }
//             },

//         }
//     ],
//     replaceConsole: false
// });
log4js.configure({
    appenders: {
        normal: {
            type: 'dateFile', //文件输出
            filename: './logs/normal/',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 1000,
            backups: 3,
        }
    },
    categories: {
        default: {
            appenders: ['normal'], level: 'debug'
        }
    }
});
var normalLog = log4js.getLogger("normal");
//var mailLog = log4js.getLogger("mail");

//module.exports.mailLog = mailLog;

export = {
    normalLog
};
//module.exports.normalLog = normalLog;