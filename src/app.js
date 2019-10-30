const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


//app.use('/css', express.static(path.join(__dirname, '/public/css')));
//app.use('/js', express.static(path.join(__dirname, '/public/js')));
//app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.render('index',
    {title: 'Index' })
});

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
});