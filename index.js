const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

//to get things to go to json
const bmijson = 'bmijson.json';
//gets data completely raw from json and reads
const raw_bmijson = readFileSync(bmijson);
const bm

app.get('/', function (request, response) { /* '/' --defines where youre routing it */
    response.render('bmi_calculator');
});

app.post('/process-bmi_calculator', urlEncodedParser, function (request, response) {
    const  bmiFunction = request.body;
    const weight1 = request.body.weight;
    const height1 = request.body.height;
    console.log('Weight is ' + weight1 + 'height is ' + height1);
});

app.listen(port);
console.log('server is listening on port 3001');

