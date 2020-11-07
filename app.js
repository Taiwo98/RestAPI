const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
//Import Routes....
const postRoute = require('./routes/post');

app.use('/posts', postRoute);

//ROUTES.......
app.get('/',(req,res)=>{
    res.send('We are on home');

});
//POSTS
app.post('/posts',(req,res)=>{  
    res.send('We are on posts');

});

//CONNECT TO DB!
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },()=>
    console.log('Connected to DB!')

);
//How to start listining to the server()
app.listen(3000);