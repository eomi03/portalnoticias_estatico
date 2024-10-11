const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/', (req, res) => {
    if (req.query.busca == null) {
        res.render('home', {}); // Renderizar a página home.ejs
    } else {
        res.render('home', {});  // Renderizar com o EJS ao invés de send
    }
});

app.get('/:slug', (req, res) => {
    res.render('single', {}); // Renderizar a página single.ejs ao invés de usar send
});


app.listen(5000, () => {
    console.log('server rodando!');
});
