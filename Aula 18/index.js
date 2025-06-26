//  let produtos = [
//         { nome: "Pão", quantidade: 3 },
//         { nome: "Pão doce", quantidade: 7 },
//         { nome: "Pão de milho", quantidade: 2 },
//         { nome: "Sonho", quantidade: 5 },
//         { nome: "Pão de coco", quantidade: 1 }
//     ];

//     let nomeProduto = prompt("Digite o nome do produto que deseja verificar:").toLowerCase();

//     let encontrado = false;

//     for (let produto of produtos) {
//       if (produto.nome.toLowerCase() === nomeProduto) {
//         encontrado = true;
//         if (produto.quantidade < 5) {
//           alert(`${produto.nome} está com ESTOQUE BAIXO (Quantidade: ${produto.quantidade})`);
//         } else {
//           alert(`${produto.nome} está com ESTOQUE OK (Quantidade: ${produto.quantidade})`);
//         }
//         break;
//       }
//     }

//     if (!encontrado) {
//       alert("Produto não encontrado na lista.");
//     }

    
const musicas = [
  { nome: "Bohemian Rhapsody", duracao: 354 },
  { nome: "Stairway to Heaven", duracao: 482 },
  { nome: "Imagine", duracao: 183 },
  { nome: "Smells Like Teen Spirit", duracao: 301 },
  { nome: "Come as you Are", duracao: 391 },
  { nome: "Billie Jean", duracao: 294 },
  { nome: "Sweet Child O' Mine", duracao: 356 },
  { nome: "No Heart", duracao: 431 },
  { nome: "Like a Rolling Stone", duracao: 369 },
  { nome: "Wonderwall", duracao: 258 }
];

alert(musicaMaisLonga(musicas))

function musicaMaisLonga(musicas) {
  let res = "";
  let musicaAtual = 0;
  for (i=0;i < musicas.length; i++){
      if (musicas[i].duracao > musicaAtual){
          musicaAtual = musicas[i].duracao;
          res = `Música mais longa:\n\n${musicas[i].nome} - ${musicas[i].duracao} segundos`
      }
          }
  return res;
}