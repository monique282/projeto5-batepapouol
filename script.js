


axios.defaults.headers.common['Authorization'] = '2WykYIFo1nfqpAeCvmGSo87Z';


let listaDePessoas = [];
let verificar = 0;
let mensagem, aparecer;
let mensagemCom = {
    from: '', to: "Todos", text: '', type: "message"}
let nome;
let resposta, conferindo;
let adicionar = { name: '', };

perguntar();
function perguntar() {
    // perguntoando o nome
    nome = prompt('Qual o seu nome?');
    // adicionando o nome em um objeto
    adicionar.name = nome;
    mensagemCom.from = nome;

    // mandando o nome da pessa pro servidor
    resposta = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', adicionar);
    resposta.then(ver);
    resposta.catch(naoDeu);
};
function timestatus() {
    conferindo = axios.post('https://mock-api.driven.com.br/api/vm/uol/status', adicionar);
}
// vendo se deu eraado ou certo
function ver(olhar) {
    atualizarMensagem();
    setInterval(timestatus, 5000);
    setInterval(atualizarMensagem, 3000);

};
function naoDeu(rep) {
    // se der errado perguntar o nome denovo
    perguntar();
};

//fazendo o botão de envio fincionar
function enviarMensagem() {
    // salvando o que a pessoa digitou
    mensagem = document.getElementById('digitar').value;
    mensagemCom.text = mensagem;
  
    // enviando a menagem para o servidor do geito que pediram
    let mensagemCompleta = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages', mensagemCom);
    mensagemCompleta.then((respostas) => {
        atualizarMensagem();
    });
    mensagemCompleta.catch(saiuDaSala);
    document.getElementById('digitar').value = '';

}

function saiuDaSala() {
    // regarregar a tela se a pessoa nao esta mais logada
    window.location.reload();
};

// preciso pegar a mensagem digitada o nome e o horario e mostrar na tela, 
function atualizarMensagem() {
    // pegar as mensagem do sevidor
    let verMensagemDoServidor = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages');
    verMensagemDoServidor.then(listaDeMensagem);
};
function listaDeMensagem(resposta) {
// Agora vamos printar as mensagems na tela
    let buscar = document.querySelector('.interaçao');
    buscar.innerHTML = '';

    for (let i = 0; i < resposta.data.length; i++) {
        if (resposta.data[i].type === 'status') {
            buscar.innerHTML += `<div class="pessoas status" data-test="message">
             <p> <span class = "timer"> (${resposta.data[i].time}) 
             </span> <span class = "negrito"> ${resposta.data[i].from}
             </span> ${resposta.data[i].text}</p>
         </div>`
        } else if (resposta.data[i].type === 'message') {
            buscar.innerHTML += `<div class="pessoas message" data-test="message">
             <p> <span class = "timer"> (${resposta.data[i].time}) 
             </span> <span class = "negrito"> ${resposta.data[i].from}
             </span> para <span class = "negrito"> ${resposta.data[i].to} 
             </span> ${resposta.data[i].text}</p>
         </div>`
        } else if (resposta.data[i].type === 'private_message' &&
            ((resposta.data[i].from === adicionar.name) ||
                (resposta.data[i].to === adicionar.name))
        ) {
            buscar.innerHTML += `<div class="pessoas privado" data-test="message">
             <p> <span class = "timer"> (${resposta.data[i].time}) 
             </span> <span class = "negrito"> ${resposta.data[i].from}
             </span> reservdamente para <span class = "negrito"> ${resposta.data[i].to} 
             </span> ${resposta.data[i].text}</p>
         </div>`
        };
    };
};
