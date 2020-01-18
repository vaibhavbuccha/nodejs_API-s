// require all modules
const express = require("express");
// const mysql = require("mysql");
const bodyParser = require("body-parser");
const peopleRoute = require('./route/people');
const blogRoute = require('./route/blogs');

const mysqlConnection = require('./connection');

// create express app 
var app = express();


// this configures our node js application.
app.use(bodyParser.json());

app.use('/people',peopleRoute);
app.use('/blog',blogRoute);



// start this application using app.listen server

app.listen(3000);   