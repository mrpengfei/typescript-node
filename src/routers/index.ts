import * as fs from 'fs';
var config = require('../config');
import * as path from 'path';
export = function (app) {
    let controllerDir = config.rootDir + '/app/controllers';
    if(!fs.existsSync(controllerDir)){
        return;
    }
    var controllers = fs.readdirSync(controllerDir);
    for (var i = 0; i < controllers.length; i++) {
        var ctl = controllers[i]
        var contr = require('../controllers/' + ctl);
        var routerUrl = '/api/' + ctl.split('.')[0];

        if (routerUrl.indexOf('home') >= 0) {
            app.use('/', contr);
        }
        app.use(routerUrl, contr);
    }
}