const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
