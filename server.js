const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port);
console.log('Web Server is listening at port ' + port);
