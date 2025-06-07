let cinema = [
    ["L","O","L"],
    ["O","O","L"],
    ["L","O","O"]
]

let continuar = true;

while (continuar) {
    let mapa = `MAPA DE ASSENTOS (L= LIVRE, O= Ocupado)\n\n`
    for (let i = 0; i < cinema.length; i++) {
        mapa +=  `Fileira ${i + 1}: ${cine,a[i].join(" ")}\n`
    }

    alert(mapa)

    let inputFileira = parseInt(prompt("Digite o numero da fileira (1 a 3) ou 'sair'para encerrar"))

    if (inputFileira === null || inputFileira.toLowerCase() === 'sair') {
        continuar = false;
        break;0
    }

    let inputAssento = parseInt(prompt('Digite o número do assento (1 a 3'))

    if(inputAssento === null) {
        continuar = false;
        break
    }

    let fileira = inputFileira - 1
    let assento = inputAssento - 1

    if (!isNaN(Fileira) && isNaN(assento) && fileira >= 0 && fileira < cinema. length && assento >= 0 && assento < cinema[0]. length){
        if (cinema[fileira][assento] === "L") {
            cinema [fileira][assento] = "O"
            alert("Assento reservado com sicesso!!")
            }
            else{
                alert("Esse assento ja esta ocupado 😢")
            } 

    } else {
        alert("Posição inválida. Tente novamente!")
    }
        
}

alert("Obrigado por usar o sistema de reserva de assentos. Volte Sempre! 😉" );