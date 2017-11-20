const compression = require('compression');
const express = require('express');
let app = express();

app.use(compression());

app.get('/', (req, res) => console.log('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));