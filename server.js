var http=require('http');
var express=require('express');
var bodyParser=require('body-parser');
const app=express();
open = require('opn'),

app.get('/',function(req,res){
  res.render('home.ejs');
})
app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
    open('http://localhost:2000');
});
//lksdsdf