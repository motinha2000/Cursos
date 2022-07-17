Number.parseInt(); // Converte forçado para inteiro
Number.parseFloat(); // Converte forçado para ponto flutuante

String(); // Gera uma string
n.toString(); // Joga o conteúdo da variável que eu quero em uma string

var s = 'JavaScript';

'Eu estou aprendendo s' // não faz interpolação
'Eu estou aprendendo' + s; // usa concatenação
`Eu estou aprendendo ${s}`; // usa template string
s.length // o tamanho da string
s.toUpperCase(); // jogar tudo para MAISCULAS
s.toLowerCase(); // jogar tudo para MINUSCULAS

n1.toFixed(2).replace('.',',') // to fixed adiciona 2 casas decimais na mostragem da variável                                
'1545,50'                       // replace troca o ponto da mostragem de casas decimais pelo
                                // padrão brasileiro da vírgula

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// Troca o simbolo monetário para a moeda local selecionada
