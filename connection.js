
const mysql = require("mysql");
// configuration regarding mysql databases.
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user: 'root',
    password : '',
    database : 'blog',
    multipleStatements : true
}); 

mysqlConnection.connect((err)=>{
    if(err){
        console.log("failed to connect!");
    }else{
        console.log("Now you are live move ahead! :D ");
    }
});

module.exports = mysqlConnection; 