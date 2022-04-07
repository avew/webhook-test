const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/cb', (req, res) => {
    res.status(201).json({
        "status":"1"
    });
    console.log('Response', req.body)
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});