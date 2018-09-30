const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/bad', (req, res) => {
    res.send({
        'error-message': 'Unable to handle request'
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 to serve master Shahram');
});