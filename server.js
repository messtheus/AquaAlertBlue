const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'Front')));

app.get('/auth/login/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id); 
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }
    res.json({ id: usuario.id, email: usuario.email });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuário.' });
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'home.html'));
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
