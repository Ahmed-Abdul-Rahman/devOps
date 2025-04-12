const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ readiness: 'UP' });
});

app.listen(8085, () => {
  console.log(`Successfully started the server on PORT : ${8085}`);
});
