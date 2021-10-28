const fs = require('fs').promises;

// Utilizando Promisses com then/catch
/* fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.log(`Erro ao escrever o arquivo: ${err.message}`);
}); */

// Utilizando Promisses com async/await
const main = async () => {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão :rocket:', { flag: 'wx' });
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.log(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

main();