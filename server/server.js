require('./models/db');

const express = require('express');

const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const shelterController = require ('./controllers/shelterController');
const petController = require ('./controllers/petController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs')

app.listen(3000, () => { 
    console.log('Express server started at port: 3000')
});

app.use(bodyparser.urlencoded({
extended:true
}));
app.use(bodyparser.json());
app.use('/admin',  shelterController);
app.use('/pet', petController);
