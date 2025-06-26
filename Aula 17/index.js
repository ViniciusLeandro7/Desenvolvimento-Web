// // //Exemplo 4
// // let concessionaria = {
// //     nome: 'SenacAUTO',
// //     local: 'São Paulo',
// //     carros: [
// //         {modelo:'Civic', ano:2020, cor: 'Preto'}
// //         {modelo:'A3', ano:2022, cor: 'Branco'}
// //         {modelo:'Cronos', ano:2021, cor: 'Prata'}
        
// //     ]
// // }

// // console.log(concessionaria.carros[2].modelo)
// // console.log(concessionaria.carros.length)

// let produto = [
//     {nome:'Mouse', preco: 50},
//     {nome:'Mouse', preco: 50},
//     {nome:'Mouse', preco:  50},
// ]

// let continuar = true;

// while (continuar) {
//     let lista = `Lista de produtos\n`
//     for(let i = 0; i < produtos.length; i++) {
//         lista += `${i + 1}. ${produtos[i].nome} - R$ ${produtos[i.preco]}`
//     }
//     lista += ""
// }

//EX:1

// let produto = {
//     nome: "Caneta",
//     estoque: 5
//   };
  
//   while (produto.estoque > 0) {
//     console.log(`Retirando 1 unidade de ${produto.nome}. Estoque atual: ${produto.estoque}`);
//     produto.estoque--; 
//   }
  
//   console.log("Estoque esgotado!");

// Lista de livros com seus exemplares (objeto)

// Lista de livros com seus exemplares (objeto)

// Lista de livros com seus exemplares (objeto)


let produto = {
  nome: "Caneta",
  estoque: 5
};

while (produto.estoque > 0) {
  alert(`Retirando 1 unidade de ${produto.nome}. Estoque atual: ${produto.estoque}`);
  produto.estoque--; 
}

alert("Estoque esgotado!");



// let livros = [
//     ["Arvore lisa", 5],
//     ["Scooby doo", 3],
//     ["Chirriro", 4]
//   ];
  
//   let escolha = true;
//   let nomeLivro = "";
  
//   while (escolha) {
//     nomeLivro += "Lista de livros:\n";
//     for (let i = 0; i < livros.length; i++) {
//         nomeLivro += livros[i][0] + " - " + livros[i][1] + " exemplares\n";
//     }

//     nomeLivro += "Digite o nome do livro que deseja atualizar ou 'sair' para encerrar:\n";
//     nomeLivro = prompt(nomeLivro);
  
//     if (nomeLivro === "sair") {
//       break;
//     }
  
//     let encontrado = false;
  
//     for (let i = 0; i < livros.length; i++) {
//       if (livros[i][0] === nomeLivro) {
//         let novoValor = prompt("Digite o novo número de exemplares para " + nomeLivro + ":");
//         livros[i][1] = parseInt(novoValor);
//         alert("Livro atualizado!");
//         encontrado = true;
//       }
//     }
  
//     if (!encontrado) {
//       alert("Livro não encontrado.");
//     }
//   }
//   let resumo = "RESUMO FINAL:\n";

//   for (let i = 0; i < livros.length; i++) {
//     resumo += `${livros[i][0]} - ${livros[i][1]} exemplares\n`;
//   }
  
//   alert(resumo);



