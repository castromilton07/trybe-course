// const fs = require('fs'); // Leitura Assíncrona usando readFile por Callback
const fs = require('fs').promises;  // Leitura Assíncrona usando readFile por Promises

const nomeDoArquivo = 'meu-arquivo.txt';

// Utilizando por Callback
/* fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.log(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
}); */

// Utilizando por Promises
fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
});