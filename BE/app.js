const express = require('express');

const app     = express();

app.use((req,res,next)=>{
	console.log("SDf");
	res.end("This is express");
});


module.exports = app;