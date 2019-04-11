var express=require('express');
var router=express.Router();

var bodyParser=require('body-parser');
var dbconnect=require('../dbconnection/dbconnect');

router.post('/dems',function(req,res){
  console.log("Heyy its demo call");


  });

module.exports = router;