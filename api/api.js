const compression = require('compression');
const {projects} = require('./static/projects');
const express = require('express');

const app = express();

app.use(compression());

// ROUTES
app.get('/projects', (req, res) =>  res.send(projects));
app.get('/projects/people', (req, res) =>  res.send(projects));
app.get('/project/:id/people/:id', (req, res) =>  res.send(projects[0]));


app.listen(3000, () => console.log('Example app listening on port 3000!'));