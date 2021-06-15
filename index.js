var http = require('http');
var express = require('express');
var port =  process.env.PORT || 8080;
var app=express();
var appRoutes = require('./routes/appRoutes');
var connectDB=require('./DB/Connection');
var bodyParser = require('body-parser');
var cors = require('cors');
//mongoDB connection
connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: false}));


app.use('/',appRoutes);




http.createServer(app).listen(port);

console.log("Backend running on port", port);