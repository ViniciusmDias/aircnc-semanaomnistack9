const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-mpxvf.mongodb.net/OmniStack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e deletes)
//req.body = Acessar corpo da requisição (criação e edição de registros)
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

