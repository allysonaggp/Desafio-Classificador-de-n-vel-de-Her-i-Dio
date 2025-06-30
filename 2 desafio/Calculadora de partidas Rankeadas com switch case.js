let vitorias =100
let derrotas = 0
let saldoVitorias = 0
let nivel = ''

function calcularSaldoDeVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

saldoVitorias=calcularSaldoDeVitorias(vitorias,derrotas)
switch (true) {
    case (saldoVitorias < 10):
        nivel = 'Ferro';
        break
    case (saldoVitorias >= 11 && saldoVitorias < 20):
        nivel = 'Bronze';
        break
    case (saldoVitorias >= 21 && saldoVitorias < 50):
        nivel = 'Prata';
        break
    case (saldoVitorias >= 51 && saldoVitorias < 80):
        nivel = 'Ouro';
        break
    case (saldoVitorias >= 81 && saldoVitorias < 90):
        nivel = 'Diamante';
        break
    case (saldoVitorias >= 91 && saldoVitorias <= 100):
        nivel = 'Lendario';
        break
    case (saldoVitorias >= 101):
        nivel = 'Imortal';
        break
}
console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível de ${nivel}`)