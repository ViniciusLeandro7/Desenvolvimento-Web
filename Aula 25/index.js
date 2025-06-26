function adicionarConvidado() {
    const input = document.getElementById('nomeConvidado');
    const nome = input.value.trim();
  
    if (nome === "") {
      alert("Por favor, digite um nome!");
      return;
    }
  
    const lista = document.getElementById('listaConvidados');
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
  
    input.value = "";
    input.focus();
  }
  