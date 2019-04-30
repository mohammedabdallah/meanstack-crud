const express = require('express');

const app     = express();

app.use("/api/posts",(req,res,next)=>{
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