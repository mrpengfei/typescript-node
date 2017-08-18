import ConfigModel from '../config.model';
let config=new ConfigModel();

config.port = 9090;
config.mssqldb={
    user: 'sa',
    password: '12345678',
    server: 'localhost', 
    database: 'FlyCrm',
 
    options: {
    }
}

export = config;