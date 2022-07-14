const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./configs/db.config');

app.use(bodyParser.json());

mongoose.connect(config.DB_URL,()=>{
    console.log('mongoDB is connected');
});

require('./routes/user_API')(app);

app.listen(8080,()=>{
    console.log("server is connect");
});