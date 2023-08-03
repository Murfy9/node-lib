import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretório!"));
}

// Async/Await

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
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

// \[[^[\]*?\]
