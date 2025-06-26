// const usuario = []

// function cadastrarUsuario(nome,senha) {
//     usuarios.push({nome,senha});
//     alert("usuarios cadastrado com sucesso!");
// }

// function fazerLogin(nome,senha){
//     let encontrado = false;
// }

// for (let usuario of usuario) {
//     if (usuario.nome === nome && usuario.senha === senha) {
//         encontrado = true;
//         break;
//     }
//     if (encontrado) {
//         alert("login realizado com sucesso!");
//     } else {
//         alert("nome de usuario ou senha incorretos");
//     }
// }

// function menu(){
//     let opcao;

//     do {
//         opcao = prompt(
//             "Escolha uma opção:\n1 - Cadastrar\n2 - Login\n0 - Sair"
//         );
        
//             switch (opcao) {
//                 case "1":
//                     let nomeCadastro = prompt("Digite o nome de usuario:");
//                     let SenhaCadastro = prompt("Digite a senha:");
//                     cadastrarUsuario(nomeLogin, SenhaLogin);
//                     break;

//                     case "0":
//                         alert("Encerrando o Programa.");
//                         break;
//                     default:
//                         alert("Opção inválida. Tente Novamente");
//             }
//     } while (opcao !== "0");
// }

// menu();


let usuarios = [];


function cadastrarUsuario(nome, senha) {
  usuarios.push({ nome: nome, senha: senha });
  alert("Usuário cadastrado com sucesso!");
}


function fazerLogin(nome, senha) {
  let autenticado = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome === nome && usuarios[i].senha === senha) {
      autenticado = true;
      break;
    }
  }

  if (autenticado) {
    alert("Login realizado com sucesso!");
  } else {
    alert("Usuário ou senha incorretos.");
  }
}


function menu() {
  let opcao;

  do {
    opcao = prompt("MENU:\n1 - Cadastrar\n2 - Login\n0 - Sair");

    if (opcao === "1") {
      let nome = prompt("Digite o nome de usuário:");
      let senha = prompt("Digite a senha:");
      cadastrarUsuario(nome, senha);
    } else if (opcao === "2") {
      let nome = prompt("Digite o nome de usuário:");
      let senha = prompt("Digite a senha:");
      fazerLogin(nome, senha);
    } else if (opcao === "0") {
      alert("Programa encerrado.");
    } else {
      alert("Opção inválida.");
    }

  } while (opcao !== "0");
}


menu();
