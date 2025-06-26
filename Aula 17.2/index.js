let filmes = [
    {titulo: "Vingadores", genero: "Ação"},
    {titulo: "Up - Altas aventuras", genero: "Animação"},
    {titulo: "Como eu Era Antes de Você", genero: "Romance"},
    {titulo: "Cruela", genero: "Drama"},
    {titulo: "Superman", genero: "Ficção Cientifica"},
]
 
let generoBuscado = prompt("Qual genero de filme você deseja assistir?")
 
if (generoBuscado){
    let encontrou = false;
    let resultado = `Filmes do genero "${generoBuscado}": \n\n`
 
    for(let i = 0; i < filmes.length; i++){
        if(filmes[i].genero.toLowerCase() === generoBuscado.toLowerCase()){
            resultado += `- ${filmes[i].titulo} \n`
            encontrou = true
        }
    }
 
    if (encontrou){
        alert(resultado)
    } else {
        alert(`Desculpe, não encontramos filmes do genero ${generoBuscado} 😥`)
    }
} else{
    alert("Nenhum genero informado")
}