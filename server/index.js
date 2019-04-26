const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

/* MIDDLEWARES */
// to deal with cross-origin resource sharing
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// set static-files distribution folder
app.use(express.static(path.resolve(__dirname + '/../dist')));

// send our index.html to client upon arrival of our site
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
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
  console.log('express serving the application at http://localhost:' + port);
});