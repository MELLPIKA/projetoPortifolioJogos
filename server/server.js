const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORTA = 3000;
const caminhoArquivoDados = "dados.json";

app.use(cors());

// Rota para obter todos os projetos
app.get("/projetos", (req, res) => {
  try {
    const dados = fs.readFileSync(caminhoArquivoDados, "utf-8");
    const projetos = JSON.parse(dados);
    res.json(projetos);
  } catch (erro) {
    res.status(500).json({ mensagem: "Falha ao ler o arquivo de dados." });
  }
});

app.listen(PORTA, () => {
  console.log(`Rodando no link http://localhost:${PORTA}`);
});
