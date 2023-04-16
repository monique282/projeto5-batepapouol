


axios.defaults.headers.common['Authorization'] = '2WykYIFo1nfqpAeCvmGSo87Z';
console.log(axios);

let listaDePessoas = [];
let listaDeMensagem = [];
let verificar = 0;
let mensagem , mensagemCom, aparecer;

perguntar();
function perguntar(){
// perguntoando o nome
let nome = prompt('Qual o seu nome?');
// adicionando o nome em um objeto
let adicionar = {
    name: nome,
};
// adicionando o nome da pessoa em um array, mais acho que nao precisa
listaDePessoas.push(adicionar);
// mandando o nome da pessa pro servidor
//let resposta = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', adicionar);
resposta.then(ver);
resposta.catch(naoDeu);
};

// vendo se deu eraado ou certo
function ver(olhar) {
    console.log(`deu certo ${olhar.status}`);
    let resposta = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', adicionar);
};
function naoDeu(rep) {
    console.log(`deu errado `);
    perguntar();
};

/* fazendo o botão de envio fincionar
function enviarMensagem() {

    // salvando o que a pessoa digitou
    mensagem = document.getElementById('digitar').value;
    // salvando o horario que a pessoa digitou a mensagem
    const data = new Date();
    console.log(mensagem);

    // enviando a menagem para o servidor do geito que pediram
    mensagemCom = {
        from: nome,
        to: "nome do destinatário (Todos se não for um específico)",
        text: mensagem,
        type: "message" // ou "private_message" para o bônus
    }
    console.log(mensagemCom);
    let mensagemCompleta = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages', mensagemCom)
    console.log(mensagemCompleta);

    // preciso pegar a mensagem digitada o nome e o horario e mostrar na tela, 

   /* for (let i = 0; i < .length; i++) {
        listaDeMensagem[i] =
            `<div class="pessoas">
                <p>`${data}`</p>
                <p>`${nome}`</p>
                <p>`${mensagem}`</p>
            </div>`
    }

}*/
