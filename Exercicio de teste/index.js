document.querySelector("#imgTrocarTema").addEventListener('click', (ev) => {
    const body = document.body;
    body.classList.toggle('tema-claro');
    body.classList.toggle('tema-escuro');
 
    const img = document.querySelector('.img');
 
    if (body.classList.contains('tema-escuro')){
        img.src = 'images/icon-sun.svg';
        img.alt = 'Sol';
    } else {
        img.src = 'images/icon-moon.svg';
        img.alt = 'Lua';
    }
});
 
document.querySelector('#inputTxt').addEventListener('keypress', function(ev){
    if (ev.key === "Enter"){
        ev.preventDefault();
        const inputTxt = document.querySelector('#inputTxt').value.trim();
        if (inputTxt === "") return;
 
        const itens = document.querySelector('.itens');
        const li = document.createElement('li');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
 
        li.appendChild(inputCheckbox); // Adiciona o checkbox primeiro
        li.appendChild(document.createTextNode(inputTxt)); // Adiciona o texto depois
        itens.appendChild(li);
    }
 
});