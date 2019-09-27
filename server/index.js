require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;

/* MIDDLEWARES */
// to deal with cross-origin resource sharing
app.use(cors());
// secure with helmet's headers
app.use(helmet());
// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// support serving of compressed assets
app.use(compression());
// set public distribution folder
app.use(express.static(path.resolve(`${__dirname}/../dist`)));

// send our index.html to client upon arrival of our site
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});


/* ACCOUNT FOR END POINTS BELOW

app.get(.......)
app.post(.......)
.
.
.

*/

// have express listen on defined ${port} which is currently set to 3000 on line 7
app.listen(port, () => {
  console.log(`express serving the application at http://localhost:${port}`);
});
