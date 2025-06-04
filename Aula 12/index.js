//let contador = 1;

//while (contador < 15) {
    //console.log ("numero:" + contador);

//if (contador = 5) {
    //console.log ("parando no 5!");
    //break;
    //}
//}

//contador ++;



//ATV1

// let pares = 0;
// let impares = 0;

// for (let contador = 1; contador <= 5; contador++) {
//     const valor = Number(prompt(`Informe o ${contador}º número:`));

//     if (valor % 2 === 0) {
//         pares++;
//     } else {
//         impares++;
//     }
// }

// alert(`Números pares: ${pares}\nNúmeros ímpares: ${impares}`);


//ATV2

// let curtas = 0;

// for (let cont = 1; cont <= 5; cont++) {
//     const palavra = prompt(`Digite a ${cont}ª palavra:`);

//     if (palavra.length <= 4) {
//         curtas++;
//     }
// }

// alert(`digitou ${curtas} palavras com 4 letras ou menos.`);
 
//ATV3

const nomeUsuario = prompt("Crie um nome de usuário:");
const senhaUsuario = prompt("Crie uma senha:");

let logado = false;

while (!logado) {
    const usuarioTentativa = prompt("Usuário:");
    const senhaTentativa = prompt("Senha:");

    if (usuarioTentativa === nomeUsuario && senhaTentativa === senhaUsuario) {
        alert("Acesso permitido!");
        logado = true;
    } else {
        alert("Usuário ou senha incorretos.");
    }
}







  
