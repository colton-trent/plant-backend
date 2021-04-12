const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));

app.use('/api/plants', require('./routes/api/plants'));

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express is listening on ajax on ${port}`);
});