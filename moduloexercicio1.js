import promptSync from 'prompt-sync'
let prompt = promptSync();

export function exercicio1() {
    console.log("exercicio 1 - FOR")

    for(let contador = 1; contador <= 10; contador ++ ){
       console.log(contador)
 }  

}

export function exercicio2() {
    console.log("exercicio 2 - FOR")
    for(let contador = 2; contador <= 10; contador += 2){
        console.log(contador)
    }
}
export function exercicio3() {
    console.log("exercicio 3 - FOR")
    for(let contador = 1; contador <= 50; contador += 2){
        console.log(contador)
    }
}
export function exercicio4 () {
    let numeroDigitado = parseInt(prompt("Digite um número de 0 a 10: "))

    console.log("exercicio 4 - FOR")
    for (let n = 0; n <= 10; n +=1) {
       let  resultado = n * 1
        console.log( `${n} X ${numeroDigitado} ${n*numeroDigitado}`)
    }
}

export function exercicio5 () {
    let anterior = 0
    let atual = 1
    
    console.log(anterior)
    console.log(atual)
    
    
    for(let contador = 3; contador <= 10; contador++){
        let novo = anterior + atual
    
        console.log(novo)
    
        anterior = atual 
        atual = novo
    }
}
export function exercicio6 () {
 
let contador = 0;

while (contador <= 20){
    console.log(contador)
    contador += 2
}
}
