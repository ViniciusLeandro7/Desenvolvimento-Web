const person = {
    nome: 'vincius',
    idade: 21,
    nacionalidade: 'Brasileiro',
    pais: ['Sebastiana', 'Hermogenes']
}

// const {nome, idade, nacionalidade} = person
// console.log(`A ${nome} tem ${idade} anos e é ${nacionalidade}`);

// const {nome, pais} = person
// const [mae, pai, teste] = pais1
// console.log (`Mãe: ${mae} | Pai: ${pai} | Teste: ${teste}`)

// const usuario = {
//     nome: 'Vinicius',
//     endereco: {
//         cidade: 'Grajaú',
//         estado: 'SP'
//     }
// }

// const {endereco:{cidade}} = usuario
// console.log(`A ${nome} mora na cidade de ${cidade}`)

// function mostrarSkills({nome, hardSkills}){
//     const [tech1, tech2,tech3,tech4] = hardSkills
//     console.log(`A ${nome} conhece as linguagens: ${tech1}, ${tech2}, ${tech3}, ${tech4}`)
// }

// const hardSkills = {
//     nome: 'vinicius',
//     hardskills: ['JabvaScript', 'c#', 'python']
// }

// mostrarSkills(hardSkills)


// const numeros = [1,2,3]
// const outrosNumero = [numeros, 4,5]

// console.log(outrosNumero)

// const outrosNumeros2 = [...numeros, 4, 5]
// console.log(outrosNumeros2)
 

const numeros = [1,2,3];
const outrosNumeros = [numeros,4,5,6]
console.log(outrosNumeros)
 
const outrosNumeros2 = [...numeros,4,5,6];
console.log(`Spread: ` + outrosNumeros2);
 
//SPREAD EM OBJETOS
 
const pessoa = {
    nome:'Luis',
    idade:28
}
 
const copiaObjeto = {...pessoa}
console.log(copiaObjeto);
 
const endereco = {
    cidade:'São Paulo'
}
 
const usuario = {...pessoa,...endereco};
console.log(usuario);
 