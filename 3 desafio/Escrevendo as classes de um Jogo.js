/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */


//variaveis
const personagem = new Personagem('lampião', 72, 'cangaceiro')
let ataque = definirAtaque(personagem.tipo)
const quantidadeDeAtaques = 5


// função constructor
function Personagem(nome, idade, tipo) {
  this.nome = nome;
  this.idade = idade;
  this.tipo = tipo;
}


//função ataque 
function definirAtaque(tipo) {
  if (tipo === 'mago') {
    return 'avada quedabra'
  } else if (tipo === 'guerreiro') {
    return 'espada colossal'
  } else if (tipo === 'monge') {
    return 'artes marciais indiana'
  } else if (tipo === 'ninja') {
    return 'shuriken da shopee de plastico'
  } else if (tipo === 'cangaceiro') {
    return 'facão sangrento melado de barro do sertao cansado'
  }
}


//impessão do texto no console
for (let i = 1; i < quantidadeDeAtaques; i++) {
  console.log(`O ${personagem.tipo} ${personagem.nome} de ${personagem.idade} atacou usando ${ataque}`)
}

