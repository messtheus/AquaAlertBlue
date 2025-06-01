const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'Front')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'login.html'));
});


app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'cadastro.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'home.html'));
});

app.get('/tabela', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'tabela.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
