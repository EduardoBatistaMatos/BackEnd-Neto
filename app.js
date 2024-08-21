// PARA VER O CÓDIGO BASTA DIGITAR ASSIM NO NAVEGADOR: http://localhost:*porta escolhida* / *nome da pagina*
//                        Exemplo: http://localhost:3000/contato
// npm start inicia o nodemon

// ESSA VARIÁVEL EXPRESS QUE LEVA O CONTEÚDO PARA A INTERNET 
var express = require('express');

// AQUI NÓS ESTAMOS COLOCANDO TODO O NOSSO CÓDIGO NO APP E 
// COMO ELE É IGUAL AO EXPRESS ELE LEVA TUDO ISSO PRO EXPRESS E 
// ASSIM TAMBÉM FICA MAIS FÁCIL PRA DAR O COMANDO "NODE APP"
var app = express();

// ESSA É A PORTA QUE ELE ESTÁ USANDO PARA ENVIAR E RECEBER AS INFORMAÇÕES.
const port = 3000;

// ROTA DO PROJETO

app.get('/', (req, res) => {
    console.log('Rota Raiz Encontrada!!!');
    res.send('<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>'); 
});

app.get('/eduardo', (req, res) => {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba mais sobre a Nossa Empresa </h3>');
});

app.get('/contato', (req, res) => {
    console.log('Rota Contato Encontrada!!!');
    res.send('<h3> Rota Contato Encontrada! <br> Entre em contato conosco </h3>');
});

app.get('/Aluno', (req, res) => {
    res.status(200).json({
        status: 'sucesso',
        data: {
            alunos: [
                {
                    id: 1,
                    nome: 'Fulano da Silva',
                    idade: 27
                },
                {
                    id: 2,
                    nome: 'Fulano Batista',
                    idade: 52
                }
            ]
        }
    });
});




// AGORA VAMOS INSERIR UMA MENSAGEM DE ERRO CASO O BROWSER DIGITE UM ENDEREÇO ERRADO
// MAS A PORTA TEM QUE ESTAR CORRETA
// O * ABAIXO FUNCIONA COMO UM ELSE, ELE SIGNIFICA QUE JÁ PASSOU POR TODOS OS ENDEREÇOS E AGORA DEVE RETORNAR A MENSAGEM DE ERRO.
app.get('*', (req, res) => {
    console.log('Página não encontrada - Erro 404');
    res.send('<h3>Página não encontrada - Erro 404</h3>'); // Correção: alterado "resposta" para "res" e adicionado a tag de fechamento </h3>
});



// NÃO PODE FICAR NADA APÓS O * ACIMA

// SERVIDOR RODANDO

app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`); // Ele está escrevendo essa frase no terminal 
});

