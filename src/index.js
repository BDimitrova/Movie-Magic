const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.use(routes);

app.listen(port, console.log(`The app is running ${port}...`))