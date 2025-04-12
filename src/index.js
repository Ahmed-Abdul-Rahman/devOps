const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(process.env.PORT || 8085, () => {
  console.log(`Server running on port: ${PORT}`);
});

module.exports = app;
