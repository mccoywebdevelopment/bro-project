const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const Users=require('./models/users');
 
var contents = fs.readFileSync('keys.txt', 'utf8');
console.log(contents);

var db
MongoClient.Promise=global.Promise;
MongoClient.connect(contents, (err, client) => {
  if (err) return console.log(err)
  db = client.db('bro_proj') // whatever your database name is
});

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
})
app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
    //open('http://localhost:2000');
});
//lksdsdf