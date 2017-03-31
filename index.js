const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
   console.log('Connected to database' + config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error:' + err);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

const hexagons = require('./routes/hexagons');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/hexagons', hexagons);

app.get('/', (req, res) => {
    res.send('You"re invalid');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});