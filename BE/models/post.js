const mongoos = require('mongoose');

//mongoos need to define schema for our data 

const schema  = mongoos.Schema({
	title : {type:String,required:true},
	content : {type:String,required:true}
});

module.exports = mongoos.model('Post',schema);