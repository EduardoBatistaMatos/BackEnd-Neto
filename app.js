var express = require ('express');
var app = express();
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

//servidor rodando

app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})   

