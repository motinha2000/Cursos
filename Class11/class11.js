/* CONDIÇÕES
sequências
fluxo do código
if()
console.log('O console funcionou corretamente');
*/

function nacionalidade()
{
    var entrada = document.querySelector('input#txtpais');
    var texto = entrada.value;

    var msg = window.document.querySelector('div#res');

    if( texto == 'Brasil'){
        msg.innerHTML = `<strong>Brasileiro!</stron>`;
    }
    else{
        msg.innerHTML = `<strong>Você é estrangeiro!</strong>`;
    }
}

