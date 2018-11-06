const mongoose=require('mongoose');
const fs = require('fs');
var contents = fs.readFileSync('../keys.txt', 'utf8');
mongoose.connect(contents);

const Schema=mongoose.Schema;

const usersSchema=new Schema({
	name: String,
	role: String,
});

//module.exports=mongoose.model('Users',usersSchema);

var Users= mongoose.model("Users",usersSchema);

var Al=new Users({
	name:"Al",
	age:1212
});

Al.save(function(err,user){
	if(err)
	{
		console.log(err);
	}else{
		console.log(user);
	}
});