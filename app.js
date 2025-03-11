// let palavra = "Hello world"
// console.log(palavra)
// palavra = "Testando mudança de valor"
// console.log(palavra)

// let palavra = "String" //texto
// let numero = 10
// let bool = true
// let nulo = null
// let batata = //underfined
// let lista = []
// let obj = {}

// let nome = "Elias"
// let idade = 19
// console.log (`Bem vindo,${nome}. Você tem ${idade} anos de idade`)

// let saudacao = "Olá,"
// let nomepessoa = "Kesia"
// console.log(`${saudacao} ${nomepessoa}`)

// let eu = "Eu"
// let adoro = "adoro"
// let javascript = "JavaScript"
// console.log(`${eu} ${adoro} ${javascript}`)

// let nome = "Patricia"
// let matricula = 432341
// let escola = "Colégio Farias Brito"
// console.log(`Olá, ${nome}. Sua matricula é ${matricula}. ${escola}`)

// let convidado = "Quesia"
// let evento = "Casamento da Patricia Poeta"
// let local = "Buffet Lulla's"
// console.log(`${convidado}, parabéns. Você esta convidada para o grande evento, 
//     o ${evento}. O evento irá acontecer no ${local}, contamos com a sua presença`)

// let lista = [123,23,423,5466]
// let lista2 = ["oi","som"]
// let lista3 = [true,false,true,false]
// let lista4 = ["oi",null,undefined,23,"teste"]

// console.log(lista3[3])
// console.log(lista[2])
// console.log(lista4[1])
// console.log(lista2[1])

// let filme = {
//     id: 1,
//     titulo: "O senhor dos aneis: A sociedade do anel",
//     ano: 2001,
//     genero: "Fantasia"
// }
// console.log(`O filme ${filme.titulo} do ano ${filme.ano} é o meu filme favorito`)

// let estudante = {
//     nome: "marcao o cara da corrida"
//     idade: 30,
//     curso: "corrida ao ar livre"
// }
// console.log(`meu nome é ${estudante.nome}, tenho $ {estudante.idade} anos de idade estou cursando ${estudando.curso}`)
// let objeto = {
//     nome: "azeite",
//     preco: 42,
//     desconto: 0.2
// }
// let valorFinal = objeto.preco * (1-objeto.desconto)

// console.log(`o preco original do item ${objeto.nome} é ${objeto.preco}. Com desconto de ${objeto.desconto} o preço final será de ${valorFinal}`);
// let endereco = {
//     rua: "Rua menino jesus 503 A",
//     cidade: "Fortaleza",
//     estado: "Ceará"
// }
// console.log(`Eu moro na rua ${endereco.rua}, na cidade de ${endereco.cidade}, estado de ${endereco.estado}`)

// let produto = {
//     nome: "Camiseta",
//     preco: 158,
//     quantidade: 7
// }
// console.log(o total da sua compra é ${produto.preco} * ${produto.quantidade})

// let usuarios = [
//     {
//         id:1,
//         nome:"Zezim",
//         cpf:89742386324,
//         telefone:324234324
//     },
//     {
//         id:2,
//         nome:"Elias",
//         cpf:8974233232,
//         telefone:12342123
//     },
//     {
//         id:3,
//         nome:"Junim",
//         cpf:48329747786,
//         telefone:43242232
//     }
// ]
// console.log(${usuarios[index].nome})

// console.log(`${usuarios[2].nome} de ${usuarios[2].cpf} está com a matricula travada, favor ligar para ${usuarios[2].telefone}`)

// console.log(`a oficina do ${usuarios[0].nome} esta aberta hoje, ligue para ${usuarios[0].telefone} para mais informações`)
// console.log(`o ${usuarios[1].nome} de ${usuarios[0].cpf} foi sorteado no totolec, por favor venha retirar seu premio`)

// let soma = 10 + 20
// let sub = 20 - 10
// let mult = 2 * 20
// let divisao = 10/2
// let exp = 2**3
// let raiz = 25**(1/2)
// console.log("soma:",soma)
// console.log("Subtração:",sub)
// console.log("multiplicação:", mult)
// console.log("divisao:", divisao)
// console.log("exponencial:", exp)
// console.log("raiz:", raiz)

// let numero1 = prompt("Digite o primeiro número: ")
// let numero2 = prompt("Digite o segundo número: ")

// let soma = Number(numero1) + Number(numero2)
// alert (soma)

// let nome = prompt("Digite seu nome: ")

// alert(`Bem vinde, ${nome}`)
// let numero1 = Number(prompt("Digite numero 1 :"))
// let numero2 = Number(prompt("Digite numero 2 : "))
// let soma = numero1 + numero2
// let sub = numero1 - numero2
// let divisao = numero1/numero2
// let mult = numero1*numero2
// alert(`${soma}, ${sub}, ${divisao}, ${mult}`)

//Peça ao usuario um numero e exiba no alert o seu quadrado

// let numero1 = Number(prompt("Digite um numero:"))
// let quadrado = numero1 * numero1
// alert(`${quadrado}`)

// Peça ao usuário três números e exiba  a média deles no console.
// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let numero2 = Number(prompt("Digite o segundo numero: "))
// let numero3 = Number(prompt("Digite o terceiro numero: "))
// let media = (numero1+numero2+numero3)/3
// alert(media)

// Peça ao usuário a base e a altura de um retangulo e exiba sua area no console

// let base = Number(prompt("Digite a medição da base:"))
// let altura = Number(prompt("Digite a altura:"))
// let area = base * altura
// alert(area)

//Peça ao usuario uma temperatura em Celsius e converta para Fahrenheit

// let temperatura = Number(prompt("Digite a temperatura"))
// let fahrenheit = 1.8*temperatura + 32
// alert(fahrenheit)

//peça ao usuário o raio de um circulo e calcule seu perimetro (2 * R * raio)
// let raio = Number(prompt("Digite o raio:"))

// let perimetro = 2 * 3.14 * raio
// alert(perimetro.toFixed(2))

// let nome = "Romario"

// == compara valor
// === compara valor e tipo de variavel
//!= negação(diferente) comparando apenas valores
//!== negação (diferente) comparando valores e tipo
//> maior
//< menor
// >= maior ou igual
// <= menor ou igual

// let numero1 = 21
// let numero2 = 20
// if (numero1>numero2) {
//     console.log("Numero 1 maior que numero 2")
// } else {
//     console.log("Numero 2 maior que numero 1")
// }

// let anodenascimento = 2020
// let idade = 2025 - anodenascimento
// if (idade>=16) {
//     console.log("Esse rapaz pode votar")
// } else {
//     console.log("Esse rapaz não pode votar")
// }
// let senha = "1234"

// if (senha === "1234") {
//     console.log("SENHA VÁLIDA")
// } else {
//     console.log("SENHA INVÁLIDA")
// }
// As maças custam 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem
//  conprados pelo o menos doze. Escreve um programa que leia o numero de maças compradas, calcule
// e escreva o valor total da compra
// let numerodemacas = Number(prompt("Digite o numero de maças:"))
// if (numerodemacas<12) {
//     alert(`O valor total é de: ${numerodemacas*0.3}`)
// } else {
//     alert(`O valor total é de: ${numerodemacas*0.25}`)
// }
// let numero1 = 10
// let numero2 = 20
// let numero3 = 30
// if (numero1>numero2 && numero1>numero3 && numero2>numero3) {
//     console.log (`${numero1} > ${numero2} > ${numero3}`)
// } 
// let genero = "F"
// let altura = 1.59
// if (genero === "F") {
//     let pesoidealF = (62.1*altura)-44.7
//     console.log(`O peso ideal é: ${pesoidealF}`)
// } else {
//     let pesoidealM = (72.1*altura)-58
//     console.log(`O peso ideal é: ${pesoidealM}`)
// }
// let salario = 250
// if (salario<=280) {
//     let percentual = 0.2
//     console.log(`O salario antes do reajuste é de : ${salario}
//                 o valor do percentual de aumento é de ${salario*percentual}`)
// }
// let numero1 = 20
// let numero2 = 30
// if (numero1 > numero2) {
//     console.log(`O maior número é: ${numero1}`)
// } else {
//     console.log(`O maior número é: ${numero2}`)
// }

// let anonascimento = 2018
// let idade = 2025 - anonascimento
// if (idade >= 16) {
//     console.log(`Você pode votar`)
// } else {
//     console.log(`Você não pode votar`)
// }
// let senha = 1234
// if (senha === 1234) {
//     console.log(`ACESSO	PERMITIDO`)
// } else {
//     console.log(`ACESSO	NEGADO`)
// }
let preco1 = 0.3
let preco2 = 0.25
let macas = 12
if (macas <= 11) {
    console.log(`você comprou ${macas} maças com um preço de ${preco1} cada`)
} else {
    console.log(`você comprou ${macas} maças com um preço de ${preco2} cada`)
}