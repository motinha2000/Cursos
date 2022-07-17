/*FUNÇÕES EM JS
toda função precisa de: CHAMADA-PARÂMETRO-AÇÃO-RETORNO. 
Comprar o leite que a mãe mandou.
Disparo do relógio. Toda quarta-feira de manhã.
Ter dinheiro.
let v = function(x) {}
*/
/* var fatias = 8;

function comerFatia(fatias){
    console.log('GOMEU!')
    fatias--;
}

while(fatias>0){
    comerFatia(fatias);
}
 */

function fatorial(num){
    if(num==1){
        return 1;
    }
    else{
        return num * fatorial(num-1);
    }
}

var n=5;
var res;

res = fatorial(n);
console.log(`O fatorial de ${n} é: ${res}.`)