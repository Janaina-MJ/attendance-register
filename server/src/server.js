const express = require('express');

const app = express();
const nodemon = require('nodemon');


app.get('/', (req, res)=> {
    return res.send('hello world')
})


app.listen(3333, ()=> {
    console.log('HTTP server running on port http://localhost:3333');
});

