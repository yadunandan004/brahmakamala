const express = require('express');
const app = express();
const port = process.env.PORT || 80;
var path    = require("path");

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/static/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));