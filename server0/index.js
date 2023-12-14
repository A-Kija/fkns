const express = require('express');
const cors = require('cors');
const fs = require('node:fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const randomColor = _ => Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/laiskas', (req, res) => {
  const html = fs.readFileSync('./html/write.html', 'utf8');
  res.send(html);
});

app.post('/laiskas', (req, res) => {
  console.log(req.body);
  const laiskas = req.body.laiskas;
  fs.writeFileSync('./laiskas.txt', laiskas);

  const allData = JSON.parse(fs.readFileSync('./laiskas.json', 'utf8'));
  allData.push(req.body);
  fs.writeFileSync('./laiskas.json', JSON.stringify(allData));

  res.send('<h1>OK</h1>');
});

app.get('/skaityti', (req, res) => {
  const html = fs.readFileSync('./html/read.html', 'utf8');
  const data = fs.readFileSync('./laiskas.txt', 'utf8');

  const allData = JSON.parse(fs.readFileSync('./laiskas.json', 'utf8'));

  const list = allData.map(item => '<div>' + item.laiskas + '</div>').join('');

  res.send(html.replace('[[[laiskas]]]', list));

  // res.send(html.replace('[[[laiskas]]]', data));
});

app.get('/json', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./laiskas.json', 'utf8'));

  res.json(data);
});

app.listen(port, () => {
  console.log('Bebras klauso ant ' +  port + ' porto!');
});