const express = require('express');
const path = require('path');
const songs = require('/app.js')

const app = express();


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/cds.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/cds.html'));
  });

app.get('/albums/:id', function(req, res) {
    
    console.log(songs);
    res.send(songs);

  });

app.listen(3002, function() {
    console.log(`Server running at 3002!`);
});

