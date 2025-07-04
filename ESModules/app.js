import { label, input, br } from "./Functions"

console.log(label({for: 'fullname', textContent: 'Nome Completo:'}))
console.log(Input({Id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br());