import promptSync from 'prompt-sync'

import { exercicio1, exercicio2, exercicio3, exercicio4, exercicio5,  exercicio6} from './moduloexercicio1.js'


let prompt = promptSync();
let resposta;



do {
    console.log("Bem vindo ao menu de exercicios!")

    resposta = prompt("Digite um numero de 1 a 6 para escolher o exercicio, ou 'sair' para interromper o exercicio: ")

switch (resposta) {
    case "1":
        // Chamar o exercicio 1
        console.log("Você escolheu o exercicio 1: ")
        exercicio1()
        break;
        // Chamar o exercicio 2
    case "2":
        console.log("Você escolheu o exercicio 2: ")
        exercicio2()
        break;
        case "3":
        // Chamar o exercicio 1
        console.log("Você escolheu o exercicio 1: ")
        exercicio3()
        break;
        case "4":
        // Chamar o exercicio 1
        console.log("Você escolheu o exercicio 1: ")
        exercicio4()
        break;
        case "5":
        // Chamar o exercicio 1
        console.log("Você escolheu o exercicio 1: ")
        exercicio5()
        break;
        case "6":
            // Chamar o exercicio 1
            console.log("Você escolheu o exercicio 1: ")
            exercicio6()
            break;
    default:
            console.log("Você nao selecionou nenhum exercicio: ")

        break;
    }

} while (resposta != "sair");