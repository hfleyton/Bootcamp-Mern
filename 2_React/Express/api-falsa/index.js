require('dotenv').config();
const express = require('express');
const faker = require('faker');
const PORT = process.env.PORT;

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use('/api' , require('./api'))

app.listen( PORT, () => console.log(`Listening on port: ${PORT}`))