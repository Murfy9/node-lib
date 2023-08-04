import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return resultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretório!"));
}

// Async/Await

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow("Operação concluída"));
  }
}

// Promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.blue(texto)))
//     .catch(trataErro);
// }

pegaArquivo("./arquivos/texto.md");
