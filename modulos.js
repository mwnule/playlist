const prompt = require("prompt-sync")({sigint: true});

const playlist = []

const modelo = () => {
    // objeto criado com os dados que uma música normalmente tem, como nome, artista e album
    let musica = {
        nome: prompt("Qual o nome da música?"),
        artista: prompt("Qual o artista da música?"),
        album: prompt("A música faz parte de quê álbum?")
    }

    // verificação para ver se o usuário preencheu todos os dados corretamente
    if (nome !== "" && artista !== "" && album !=="") {
        return {
            nome,
            artista,
            album
        }
    } else {
        console.log("Dados inválidos!")
        return false;
    }
}

function adicionar() {
    // utiliza a função do modelo para puxar todos os dados digitados pelo usuário
    let musica = modelo()

    if (musica === undefined) {
        return;
    } else {
        playlist.push(musica)
        console.log("Música adicionada!")
    }



}

function listar() {

}

function atualizar() {

}

function deletar() {

}

funcoes = {
    adicionar,
    listar,
    atualizar, 
    deletar
}

module.exports = funcoes;