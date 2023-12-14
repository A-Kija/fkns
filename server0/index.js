const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3001;

const randomColor = _ => Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');


app.get('/', (req, res) => {
  res.send('<h1 style=color:' + randomColor() + ';>Labas, Kaimyne</h1>');
  // res.send(`<script>console.log('Labas, Kaimyne');</script>`);
});

app.get('/bebras', (req, res) => {
  res.send('<h1>Bebras</h1>');
});

app.get('/udra', (req, res) => {
  res.send('<h1>Ūdra</h1>');
});

app.get('/batuotas-suo', (req, res) => {
  const data = fs.readFileSync('./suo.txt', 'utf8');
  // console.log(data);
  // console.log('gogo');
  res.send('<h1>Batuotas Šuo</h1><p>' + data + '</p>');
});

app.listen(port, () => {
  console.log('Bebras klauso ant ' +  port + ' porto!');
});