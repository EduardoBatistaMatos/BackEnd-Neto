// PARA VER O CÓDIGO BASTA DIGITAR ASSIM NO NAVEGADOR: http://localhost:*porta escolhida* / *nome da pagina*
//                        Exemplo: http://localhost:3000/contato
// npm start inicia o nodemon

//ESSA VARIAVEL EXPRESS QUE LEVA O CONTEUDO PRA INTERNET 
var express = require ('express'); 




// AQUI NÓS ESTAMOS COLOCANDO TODO NOSSO CÓDIGO NO APP E 
//COMO ELE É IGUAL AO EXPRESS ELE LEVA TUDO ISSO PRO EXPRESS E 
//ASSIM TAMBEM FICA MAIS FACIL PRA DAR O COMANDO "NODE.APP" 
var app = express(); 



// Essa é a porta que ele está usando para enviar e receber as informações.
const port = 3000; 

//rota do projeto

app.get('/', (req, res) => {
    console.log('Rota Raiz Encontrada!!!');
    res.send('<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>'); 
})
app.get('/eduardo', (req, res) => {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba mais sobre a Nossa Empresa </h3>');
})
app.get('/contato', (req, res) => {
    console.log('Rota Contato Encontrada!!!');
    res.send('<h3> Rota Contato Encontrada! <br> Entre em contato conosco </h3>');
})

// AGORA VAMOS INSERIR UMA MENSAGEM DE ERRO CASO O BROWSER DIGITE UM ENDEREÇO ERRADO
// MAS A PORTA TEM QUE ESTAR CORRETA
// O * ABAIXO FUNCIONA COMO UM ELSE, ELE SIGNIFICA QUE JÁ PASSOU POR TODOS OS ENDEREÇOS E AGORA DEVE RETORNAR A MENSAGEM DE ERRO.
app.get('*', function (requisicao, resposta) {
    console.log('Página não encontrada - Erro 404');
    resposta.send ('<h3>Página não encontrada -  Erro 404');
})

//servidor rodando

app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`); // Ele está escrevendo essa frase no terminal 
})   

