// function addInput(){
//     const ul =document.getElementById('inputs')

//     const newLi = document.createElement('li')
//     newLi.className = 'listInten:'
//     newLi.innerText = 'Novo item:'

//     const newInput = document.createElement('input')
//     newInput.type = 'text'
//     newInput.name = 'inputText'

//     newLi.appendChild(newInput);
//     ul.appendChild(newLi);
// }

// function addContact(){
//     const contactSection = document.getElementById('contact-list');
 
//     const h3 = document.createElement('h3');
//     h3.innerText = 'Contato:';
 
//     const ul = document.createElement('ul');
 
//     const li = document.createElement('li');
 
//     li.innerText = 'Nome:';
//     const nameInput = document.createElement('input');
//     nameInput.type = 'text';
//     nameInput.name = 'input-text';
//     li.appendChild(nameInput);
//     ul.appendChild(li);
//     ul.appendChild(document.createElement('br'));
 
 
//     const phoneLi = document.createElement('li');
//     phoneLi.innerText = 'Telefone:';
//     const phoneInput = document.createElement('input');
//     phoneInput.type = 'text';
//     phoneInput.name = 'input-text';
//     phoneLi.appendChild(phoneInput);
//     ul.appendChild(phoneLi);
//     ul.appendChild(document.createElement('br'));
 
//     const addressLi = document.createElement('li');
//     addressLi.innerHTML = '<label class = "label-address"> Endereço </label>';
//     const addressInput = document.createElement('input');
//     addressInput.type = 'text';
//     addressInput.name = 'address-input';
//     addressInput.id = 'address';
//     addressLi.appendChild(addressInput);
//     ul.appendChild(addressLi);
//     ul.appendChild(document.createElement('br'))
 
//     contactSection.append(h3,ul)
// }
 
// function removeContact(){
//     const contactSection = document.getElementById('contact-list')
//     const title = document.getElementsByTagName('h3')
//     const contacts = document.getElementsByTagName('ul')

//     contactSection.removeChild(title[title.length-1]);
//     contactSection.removeChild(contacts[contacts.length-1]);

// }

//Exercicio


function addContact() {
    const contactSection = document.getElementById('contact-list');
  
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
  
    const h3 = document.createElement('h3');
    h3.innerText = 'Tarefa:';
    taskDiv.appendChild(h3);
  
    const ul = document.createElement('ul');
  
    const tituloLi = document.createElement('li');
    tituloLi.innerText = 'Título: ';
    const tituloInput = document.createElement('input');
    tituloInput.type = 'text';
    tituloInput.name = 'titulo';
    tituloLi.appendChild(tituloInput);
    ul.appendChild(tituloLi);
    ul.appendChild(document.createElement('br'));
  
    const horarioLi = document.createElement('li');
    horarioLi.innerText = 'Horário: ';
    const horarioInput = document.createElement('input');
    horarioInput.type = 'time';
    horarioInput.name = 'horario';
    horarioLi.appendChild(horarioInput);
    ul.appendChild(horarioLi);
    ul.appendChild(document.createElement('br'));
  
    const descricaoLi = document.createElement('li');
    descricaoLi.innerText = 'Descrição: ';
    const descricaoInput = document.createElement('input');
    descricaoInput.type = 'text';
    descricaoInput.name = 'descricao';
    descricaoLi.appendChild(descricaoInput);
    ul.appendChild(descricaoLi);
    ul.appendChild(document.createElement('br'));
  
    taskDiv.appendChild(ul);
  
    contactSection.appendChild(taskDiv);
  }
  
  function removeContact() {
    const contactSection = document.getElementById('contact-list');
  
    contactSection.removeChild(contactSection.lastChild);
  }
  
  
  crie uma pagina simples com um 