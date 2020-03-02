require('./models/mongodb');
 
//Import the necessary packages
const express = require('express');
const app = express();
const path = require('path');
const Handlebars = require('handlebars');
const exphb = require('express-handlebars');
const bodyparser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
 
const courseController = require('./controllers/courseController');
 
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('<h2 style="font-family: Malgun Gothic; color: midnightblue ">Welcome To Chrys Tech Course</h2><h2>Made Using Mongodb,Express js,Express handlebar,mongoose</h2>Click Here to go to <b> <a href="/course">Course Page</a> </b>');
    });
//Set the Controller path which will be responding the user actions
app.use('/course', courseController);

app.use(bodyparser.json());

//Configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/',handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'hbs');

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server Running on Port ${port}..`));
 
