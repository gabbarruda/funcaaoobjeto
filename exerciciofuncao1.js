// let prompt = require('prompt-sync') ()

// let nome = prompt("Digite seu nome: ")

// console.log("Olá " + nome)

//  let prompt = require('prompt-sync') ()

//  let nome = prompt("Digite seu nome: ")

//  let idade = prompt("Digite sua idade: ")

//  console.log("Olá " + nome + "! Você está com " + idade + "anos" )

//let prompt = require('prompt-sync') ()

 // let nome_recebido = prompt("Digite seu nome: ")


  //let idade_recebido = parseInt(prompt("Digite sua idade: "))

// let pessoa = {
 //   nome: nome_recebido,
   // idade: idade_recebido
//}

  
 // console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + "anos" )
 import promptSync from 'prompt-sync'
 let prompt = promptSync();

 prompt("Digite alguma coisa: ")
import { exercicio1 } from './moduloexercicio1.js'

exercicio1()

function olaPessoa(nome_, idade_) {

  let pessoa = {
    nome: nome_,
     idade: idade_,
  }

   console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos" )
  
}

olaPessoa("Gabi", 22)



//ler respota = prompt("Digite o numer: ")
// Digite o numero do exercicio que voce quer exibir 
// estrutura de repetição 
//do {
   // switch (respota) {
      // case 1: 
       // exercicio1()
       // break;
       // default: 
//break;
   // }

//}while (respota != "sair");