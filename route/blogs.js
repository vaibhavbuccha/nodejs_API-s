const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');

Router.get('/',(req,res)=>{
    mysqlConnection.query("SELECT * from post",(err, rows,fields)=>{
        if(!err)
        {
            console.log(rows);
            res.send(rows);
        }else{
            consolelog(err);
        }
    });
});

module.exports = Router;