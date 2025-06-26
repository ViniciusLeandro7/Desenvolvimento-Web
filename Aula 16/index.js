let cinema = [
    ["L","O","L"],
    ["O","O","L"],
    ["L","O","O"]
];

let continuar = true;

while (continuar) {
    let mapa = `MAPA DE ASSENTOS (L = LIVRE, O = Ocupado)\n\n`;
    
    for (let i = 0; i < cinema.length; i++) {
        mapa += `Fileira ${i + 1}: ${cinema[i].join(" ")}\n`; // Corrigido: "cine,a[i]" para "cinema[i]"
    }

    alert(mapa);

    let inputFileira = prompt("Digite o número da fileira (1 a 3) ou 'sair' para encerrar");

    if (inputFileira === null || inputFileira.toLowerCase() === 'sair') {
        continuar = false;
        break;
    }

    let inputAssento = prompt("Digite o número do assento (1 a 3)");

    if (inputAssento === null) {
        continuar = false;
        break;
    }

    let fileira = parseInt(inputFileira) - 1;
    let assento = parseInt(inputAssento) - 1;

    if (!isNaN(fileira) && !isNaN(assento) && fileira >= 0 && fileira < cinema.length && assento >= 0 && assento < cinema[0].length) { // Corrigido: "Fileira" para "fileira", e "isNaN(assento)" para "!isNaN(assento)"
        if (cinema[fileira][assento] === "L") {
            cinema[fileira][assento] = "O";
            alert("Assento reservado com sucesso!!");
        } else {
            alert("Esse assento já está ocupado 😢");
        }
    } else {
        alert("Posição inválida. Tente novamente!");
    }
}

alert("Obrigado por usar o sistema de reserva de assentos. Volte sempre! 😉");

