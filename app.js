const prompt = require("prompt-sync")({sigint: true});

const {
    adicionar,
    listar,
    atualizar,
    deletar
  } = require("./modulos.js");

  while (true) {
    console.log (`Seja bem-vindo(a) ao Player.JSON!
    1. Adicionar nova música a playlist
    2. Listar músicas da playlist
    3. Atualizar música da playlist
    4. Deletar música da playlist
    0. Sair`)

    let opcao = Number(prompt("Escolha uma opção: "))

    switch (opcao) {
        case 1:
            adicionar()
            break;
        case 2:
            listar()
            break;
        case 3:
            atualizar()
            break;    
        case 4:
            deletar()
            break;
        case 0:
            console.log("Saindo do menu!")
            break;
        default:
            console.log("Você deve digitar uma opção válida!")
            break;
    }
}