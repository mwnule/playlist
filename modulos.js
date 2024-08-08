const prompt = require("prompt-sync")({sigint: true});

const playlist = []

const modelo = () => {
    let nome = prompt("Qual o nome da música? ");
    let artista =  prompt("Qual o artista da música? ");
    let album =  prompt("A música faz parte de quê álbum? ");

    // verificação para ver se o usuário preencheu todos os dados corretamente
    if (nome !== "" && artista !== "" && album !=="") {
        let musica = {
            nome: nome,
            artista: artista,
            album: album
        }
        return musica;
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
    if (playlist.length === 0) {
        console.log("Não existe nenhuma mśuica adicionada na sua playlist!")
    } else {
        playlist.forEach((musica, index) => {
            console.log(`${index + 1}. ${musica.nome} - ${musica.artista}, ${musica.album}`);
        });
    }

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