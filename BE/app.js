const express = require("express");
const mongoose= require('mongoose');
const bodyParser = require("body-parser");
const Post     = require('./models/post');

const app = express();


mongoose.connect('mongodb+srv://admin:UVX9kuULDQfRVnl9@cluster0-u46gh.mongodb.net/test?retryWrites=true',{useNewUrlParser:true})
.then(()=>{
	console.log("Contected");	
}).catch(()=>{
	console.log("error");
})
;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.post("/api/posts",(req,res,next)=>{
	const postData = req.body;
	const post = new Post({
		title : req.body.title,
		content: req.body.content
	});
	post.save();
	res.status(201).json({
		message : "Post Created Succfully",
		post    : post
	});
});
app.get("/api/posts",(req,res,next)=>{
	Post.find().then(documents=>{
		res.status(200).json({
			message : "Posts get method",
			posts   : documents
		});
	});
	
});

app.delete("/api/posts/:id",(req,res,next)=>{
	Post.deleteOne({_id:req.params.id}).then(result=>{
		console.log(result);
		res.status(200).json({
			message:"Post Deleted"
		});
	});
});


module.exports = app;