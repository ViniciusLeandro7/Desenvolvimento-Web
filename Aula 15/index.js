// let numeros = [];
// let pares = [];
// let impares = [];
// let quantidade = parseInt(prompt("Quantos números deseja inserir?"));

// for (let i = 0; i < quantidade; i++) {
//     let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
//     numeros.push(numero);
    
//     if (numero % 2 === 0) {
//         pares.push(numero);
//     } else {
//         impares.push(numero);
//     }
// }

// alert(`Números pares: ${pares.join(", ")}`);
// alert(`Números ímpares: ${impares.join(", ")}`);


// let numeros = [3,5,2,8,-4,7,6];
// let soma = 0;
// let i= 0;

// while(i < numeros.length && numeros [i] >= 0) {
//     soma += numero[i];
//     i++;
// }

// alert("Soma até o primeiro número negativo;", soma);





// let frutas = [
//         { nome: "maçã", cor: "vermelha" },
//         { nome: "banana", cor: "amarela" },
//         { nome: "uva", cor: "roxa" }
//     ];
    
//     let nomeFruta = prompt("Digite o nome de uma fruta:").toLowerCase();
    
    
//     let frutaEncontrada = frutas.find(fruta => fruta.nome === nomeFruta);
    
//     if (frutaEncontrada) {
//         alert(`A cor da ${frutaEncontrada.nome} é ${frutaEncontrada.cor}.`);
//     } else {
//         alert("A fruta não está na lista.");
//     }
    



    let Aluno = [
        { nome: "Vinicius", status: "Presente" },
        { nome: "Bruno", status: "Presente" },
        { nome: "Luis", status: "Ausente" }
    ];
    
    let nomeAluno = prompt("Digite o nome do Aluno:").toLowerCase();
    
    let AlunoEncontrada = Aluno.find(aluno => aluno.nome.toLowerCase() === nomeAluno);
    
    if (AlunoEncontrada) {
        alert(`O status do ${AlunoEncontrada.nome} é ${AlunoEncontrada.status}.`);
    } else {
        alert("O aluno não foi encontrado.");
    }