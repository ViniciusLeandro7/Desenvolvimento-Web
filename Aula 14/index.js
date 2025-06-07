// // let item = "";
// // let carrinho = [];
// // let opc = 0, itemCarrinho = 0;


 
// // do {
// //     opc = Number(prompt(`Escolha uma opção:\n\n1 - Adicionar item ao carrinho\n2 - Remover item do carrino\n3 - Ver total de itens no carrinho\n4 - Sair`))
 
// //     switch (opc) {
// //         case 1:
// //             itemCarrinho ++;
// //             alert("Item adicionado do carrinho!");
// //             carrinho.push(item);
// //             break;
// //         case 2:
// //             itemCarrinho --;
// //             alert("Item removido do carrino!");
// //             break;
// //         case 3:
// //             alert(`Carrinho: ${itemCarrinho} itens`);
// //             break;
// //         case 4:
// //             alert("intens no carrinho; $carrinho.join(",")}`);
// //             break;
// //         case 5:
// //             alert("Saindo!")
// //             break; 
// //         default:
// //             alert("Digite um valor válido!")
// //             break;
// //     }
 
// // } while (opc !== 3);

// let carrinho = []; 
// let opc = 0;
// let item = ""; 

// do {
//     opc = Number(prompt(`Escolha uma opção:\n\n1 - Adicionar item ao carrinho\n2 - Remover item do carrinho\n3 - Ver total de itens no carrinho\n4 - Sair`));

//     switch (opc) {
//         case 1:
//             item = prompt("Digite o nome do item para adicionar:");
//             carrinho.push(item);
//             alert(`Item "${item}" adicionado ao carrinho!`);
//             break;

//         case 2:
//             item = prompt("Digite o nome do item para remover:");
//             let index = carrinho.indexOf(item);
//             if (index !== -1) {
//                 carrinho.splice(index, 1);
//                 alert(`Item "${item}" removido do carrinho!`);
//             } else {
//                 alert("Item não encontrado no carrinho.");
//             }
//             break;

//         case 3:
//             alert(`Total de itens no carrinho: ${carrinho.length}`);
//             break;

//         case 4:
//             alert("Saindo!");
//             break;

//         default:
//             alert("Digite uma opção válida!");
//             break;
//     }

// } while (opc !== 5);


let numeros = [3,5,2,8,-4,7,6];
let soma = 0;
let i= 0;

while(i < numeros.length && numeros [i] >= 0) {
    soma += numero[i];
    i++;
}

alert("Soma até o primeiro número negativo;", soma);



