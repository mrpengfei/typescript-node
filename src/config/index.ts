// import ConfigModel from './config.model';
import * as path from 'path';
var config;

if (process && process.env && process.env.NODE_ENV) {
    config = require('./' + process.env.NODE_ENV + '/config');
} else {
    config = require('./development/config');
}

config.version = '3.0.0';
config.rootDir = path.dirname(path.dirname(__dirname));

export = config;