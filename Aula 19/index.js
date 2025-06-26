// atividade 1
 
// let ep = [
//     {episodio: 1, assistido: true},
//     {episodio: 2, assistido:true},
//     {episodio: 3, assistido:false},
//     {episodio: 4, assistido:true},
//     {episodio: 5, assistido:false}
// ]
 
// console.log(contarEpisiodisAssistidos(ep));
 
// function contarEpisiodisAssistidos(ep){
//     let res = "Episodios assistidos:\n\n";
//     for (i=0;i < ep.length; i++){
//         if (ep[i].assistido === true){
//             res += `Ep.${ep[i].episodio}: assistido ✔\n`
//         }
//         else {
//             res += `Ep.${ep[i].episodio}: não assistido ❌\n`
//         }
//     }
//     return res;
// }
 
// atividade 2
 
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
 
console.log(musicaMaisLonga(musicas))
 
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
 
 