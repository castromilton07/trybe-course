const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipesRouter = require('./recipesRouter');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/recipes', recipesRouter);

/* app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` })
}); */

app.listen(3000, () => console.log('Aplicação ouvindo na porta 3000'));