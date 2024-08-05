const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const db = require('./models');
const rotaDestino = require('./routes/destinosRoutes');
const rotaAtrativos = require('./routes/atrativosRoutes');
const path = require('path');

db.sequelize.sync().then(() => {
    console.log('Drop and re-sync db.')
})

const app = express();

app.use(express.json());
app.use(cors())
app.use('/frontend', express.static(path.join(__dirname, 'frontend')))
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', rotaDestino);
app.use('/api', rotaAtrativos);


app.use("*", (req, res) => {
    res.status(404).json({
        message: "Rota não encontrada"
    })
});

module.exports = app;