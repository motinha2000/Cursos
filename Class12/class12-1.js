/* CONDIÇÕES II switch
condiçoes aninhadas
if-(if,if,if)-else-if
var idade = 66;

if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional'); 
} else {
    console.log('Voto obrigatório');
}
*/
var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 5 && hora <= 12)
    console.log('Bom dia!')
else if(hora > 12 && hora <= 18)
    console.log('Boa tarde!')
else if(hora > 18 && hora <= 24)
    console.log('Boa noite!')
else
    console.log('Boa madrugada!')

