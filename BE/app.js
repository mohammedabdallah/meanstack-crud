const express = require("express");
const bodyParser = require("body-parser");


const app = express();

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
	const post = req.body;
	res.status(201).json({
		message : "Post Created Succfully",
		post    : post
	});
});
app.get("/api/posts",(req,res,next)=>{
	const posts = [
		{id:"sdfsd22",title:"post ttiel",content:"postcontent"},
		{id:"sdfsd234",title:"post ttiel",content:"postcontent"},
		{id:"234lsdf",title:"post ttiel",content:"postcontent"},
	];
	res.status(200).json({
		message : "Posts get method",
		posts   : posts
	});
});


module.exports = app;