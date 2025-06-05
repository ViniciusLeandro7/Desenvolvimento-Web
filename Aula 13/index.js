let qtdEleitores = 0;
let voto = 0;
let votosTalita = 0 ,votosVinicius = 0 ,votosLuana = 0, nulo_branco = 0;
qtdEleitores = Number(prompt(`Digite a quantidade de eleitores:`));
 
if (qtdEleitores > 0) {
    let cont = 0;
    do {
        voto = Number(prompt(`Escolha um candidato:\n\n15 - Talita\n22 - Vinicius\n18 -Luana`));
        cont++;
        if (voto == 18) {
            votosLuana++;
            continue;
        }
        if (voto == 22) {
            votosVinicius++;
            continue
        }
        if (voto == 15){
            votosTalita++;
            continue
        }
        if (voto != 18 && voto != 22 && voto != 15){
            nulo_branco++;
        }
    } while (cont <qtdEleitores )
 
    alert (`Resultado das eleições:\n\nLuana: ${votosLuana}\nTalita: ${votosTalita}\nVinicius: ${votosVinicius}\nNulos/Branco: ${nulo_branco}`);
}
else {
    alert(`Digite um valor válido`);
}

let i =1
let valor = 0; 
let total = 0;


// let cont = 0, total = 0;
 
// while (true) {
 
//     let num = Number(prompt("Digite um número positivo: "))
   
//     if (num >=0 ) {
//         cont++;
//         total += num;
//         continue;
//     }
//     if (num < 0) {
//         break;
//     }
//     alert("Digite um valor válido");
   
// }
 
// alert(`Número positivos digitado: ${cont}\n\nTotal: ${total}`);
 


let opc = 0, itemCarrinho = 0;
 
do {
    opc = Number(prompt(`Escolha uma opção:\n\n1 - Adicionar item ao carrinho\n2 - Remover item do carrino\n3 - Ver total de itens no carrinho\n4 - Sair`))
 
    switch (opc) {
        case 1:
            itemCarrinho ++;
            alert("Item adicionado do carrinho!");
            break;
        case 2:
            itemCarrinho --;
            alert("Item removido do carrino!");
            break;
        case 3:
            alert(`Carrinho: ${itemCarrinho} itens`);
            break;
        case 4:
            alert("Saindo!")
            break; 
        default:
            alert("Digite um valor válido!")
            break;
    }
 
} while (opc !== 3);