/*VARIÁVEIS COMPOSTAS   
VETOR, indice, conteúdo
.push - Método interno que acrescenta o valor na ultima posição do array
.length - Identifica o comprimento do vetor
.sort - Método interno que coloca em ordem o vetor
for(let pos in vetor) - Método que imprime do vetor todo o seu conteúdo.
*/

let num=[5, 8, 4];
num.push(6);

/* console.log(`Nosso vetor é o ${num}`);
console.log(num.sort()) */

/* var tam = num.length;
for(i=0;i<tam;i++){
    console.log(`O vetor na posição ${i} tem o valor de ${num[i]}.`)
} */

/* for(let pos in num){
    console.log(num[pos]);}
*/

vproc = 5;
let pos = num.indexOf(vproc);

if(pos==-1)
    console.log('Valor não encontrado.');
else
console.log(`O valor: ${vproc}, está na posição: ${pos}.`);