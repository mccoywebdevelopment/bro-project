const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const fs = require('fs');
const mongoose=require('mongoose');
const Users=require('./models/users');
 
app.listen(3000,function() {
    console.log("Listening on Port:"+3000);
    //open('http://localhost:2000');
});
var contents = fs.readFileSync('keys.txt', 'utf8');
mongoose.connect(contents);

app.get('/users',function(req,res){
  Users.find({})
  .exec(function(err,Users){
    if(err){
      console.log(err);
    }
    else{
      console.log(Users);
    }
  });
});
app.use(bodyParser.urlencoded({extended:true}));

app.use( express.static( "public" ) );

app.get('/',function(req,res){
  res.render('home.ejs');
});
