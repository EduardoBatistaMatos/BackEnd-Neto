var express = require ('express');
var app = express();
const port = 3000;

//rota do projeto

app.get('/', (req, res) => {
    console.log('Rota Raiz Encontrada!!!');
    res.send('<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>');

})

app.get('/sobre', (req, res) => {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba mais sobre a Nossa Empresa </h3>');

})
app.get('/contato', (req, res) => {
    console.log('Rota Contato Encontrada!!!');
    res.send('<h3> Rota Contato Encontrada! <br> Entre em contato conosco </h3>');

})
app.get('/clientes', (req, res) => {
    console.log('Rota Clientes Encontrada!!!');
    res.send('<h3> Rota Clientes Encontrada! <br> Entre no seu carrinho </h3>');

})
app.get('/produtos', (req, res) => {
    console.log('Rota Produtos Encontrada!!!');
    res.send('<h3> Rota Produtos Encontrada! <br> Escolha os melhores produtos do mercado </h3>');

})
app.get('/financeiro', (req, res) => {
    console.log('Rota Financeiro Encontrada!!!');
    res.send('<h3> Rota Financeiro Encontrada! <br> Bem vindo ao nosso caixa </h3>');

})
app.get('/estoque', (req, res) => {
    console.log('Rota Estoque Encontrada!!!');
    res.send('<h3> Rota Estoque Encontrada! <br> Bem vindo ao nosso Estoque </h3>');

})

//servidor rodando

app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})   

