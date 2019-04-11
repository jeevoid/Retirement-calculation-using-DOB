var express = require("express");
var app=express();


var bodyParser=require('body-parser');
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb',extended: false}));

var lgn=require("./routes/jsfiles/dem");
app.use("/jsfiles/dem",lgn);

app.listen(9001,function(){
    console.log("SERVER STARTED");
    
});

app.get('/',function(req,res){
    console.log("hi hi hi")
    res.render('validation/demo');
 
});