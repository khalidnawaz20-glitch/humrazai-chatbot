const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
  const message = req.body.message || '';
  const persona = req.body.persona || 'Humrazai';
  const reply = `Hi, I'm ${persona}. You said: ${message}`;
  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
