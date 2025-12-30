// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let nome = "jairobr1986";
let xp = 7777777;
let nivel = "evolution";

// Se XP for menor do que 1.000 = Ferro
if (xp < 1000) {
    nivel = "Ferro"
// Se XP for entre 1.001 e 2.000 = Bronze
}else if (xp > 1001 && xp <= 2000) {
    nivel = "Bronze"
// Se XP for entre 2.001 e 5.000 = Prata
} else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata"
// Se XP for entre 5.001 e 7.000 = Ouro
} else if ( xp > 5000 && xp <= 7000) {
    nivel = "Ouro"
// Se XP for entre 7.001 e 8.000 = Platina
} else if (xp > 7000 && xp <= 8000) {
    nivel = "Platina"
// Se XP for entre 8.001 e 9.000 = Ascendente
} else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente"
// Se XP for entre 9.001 e 10.000= Imortal
} else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal"
// Se XP for maior ou igual a 10.001 = Radiante
} else if (xp >= 10001) {
    nivel = "Radiante"

}

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);