// const btnCadastrar = document.getElementById('btnCadastrar');
 
// btnCadastrar.addEventListener('click',function(ev){
 
//     const sectionElement = ev.currentTarget.parentNode;
//     const usuario = sectionElement.children.nomeUsu.value.trim()
//     const email = sectionElement.children.email.value.trim()
//     const senha = sectionElement.children.senha.value.trim()
//     const confirmarSenha = sectionElement.children.confirmarSenha.value.trim()
 
//     if (senha !== confirmarSenha){
//         alert("As senhas não conferem")
//         return;
//     }
 
//     alert(`Usuário "${usuario}" cadastrado com sucesso!`)
   
// });


const usuarios = [];

const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', function(ev) {
    const sectionElement = ev.currentTarget.parentNode;

    const usuario = sectionElement.querySelector('[name="nomeUsu"]').value.trim();
    const email = sectionElement.querySelector('[name="email"]').value.trim();
    const senha = sectionElement.querySelector('[name="senha"]').value.trim();
    const confirmarSenha = sectionElement.querySelector('[name="confirmarSenha"]').value.trim();
    const msgCadastro = sectionElement.querySelector('#msg-cadastro');

    if (senha !== confirmarSenha) {
        msgCadastro.textContent = "As senhas não conferem!";
        msgCadastro.style.color = "red";
        return;
    }

    const jaExiste = usuarios.find(u => u.email === email);

    if (jaExiste) {
        msgCadastro.textContent = "Usuário já cadastrado!";
        msgCadastro.style.color = "orange";
        return;
    }

    usuarios.push({ usuario, email, senha });

    msgCadastro.textContent = `Usuário "${usuario}" cadastrado com sucesso!`;
    msgCadastro.style.color = "green";

    sectionElement.querySelector('[name="nomeUsu"]').value = "";
    sectionElement.querySelector('[name="email"]').value = "";
    sectionElement.querySelector('[name="senha"]').value = "";
    sectionElement.querySelector('[name="confirmarSenha"]').value = "";
});

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function(ev) {
    const sectionElement = ev.currentTarget.parentNode;

    const email = sectionElement.querySelector('[name="email"]').value.trim();
    const senha = sectionElement.querySelector('[name="senha"]').value.trim();
    const msgLogin = sectionElement.querySelector('#msg-login');

    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        msgLogin.textContent = "Usuário não cadastrado!";
        msgLogin.style.color = "red";
        return;
    }

    if (usuario.senha !== senha) {
        msgLogin.textContent = "Senha incorreta!";
        msgLogin.style.color = "orange";
        return;
    }

    msgLogin.textContent = "Login efetuado com sucesso!";
    msgLogin.style.color = "green";

    
    sectionElement.querySelector('[name="email"]').value = "";
    sectionElement.querySelector('[name="senha"]').value = "";
});

