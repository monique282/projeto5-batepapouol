


axios.defaults.headers.common['Authorization'] = '2WykYIFo1nfqpAeCvmGSo87Z';
console.log(axios);
 
let listaDePessoas = [];
let i=0;
while (i<2){
let nome = prompt('Qual o seu nome?');
const adicionar= {
    name: nome,
}
 console.log(adicionar);
 listaDePessoas.push(adicionar);
 console.log(listaDePessoas);
 i++;
 const resposta = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', adicionar);
 console.log(resposta);
}
//let MardarProServidor = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', );
