var express = require('express');
var router = express.Router();
var sql = require('../config/mssqldb');
import JsonResult from '../viewmodels/jsonResult.model'

router.get('/',function(req,res,next){
    res.render('home',{
        msg:'呼叫中心欢迎你'
    });
});

router.get('/json',function(req,res,next){
   let result = new JsonResult(true,{
       action:'home/json'
   },null);
   res.json(result);
});

router.get('/mssql/test',function(req,res,next){
    let result = new JsonResult(true,null,null);
    sql.query("insert into Company (CompanyName, IsValid,CTime,CreateBy) values (@CompanyName, @IsValid,GETDATE(),1)",{
        CompanyName:'贷鼠',
        IsValid:1
    }, function (data) {
        if (!data.state) {
            res.json(new JsonResult(false,null,data.message));
            return;
        }
        sql.query('select * from  Company where CompanyName = @CompanyName', { CompanyName: '贷鼠' }, function (data) {
            res.json(new JsonResult(data.state,data.result.recordset,data.message ));
        });
    });
 });

export = router;