console.log("ciao");



// Descrizione:
// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. Se il numero è dispari, lo salviamo in una lista. Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.


// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt.
let numero

// let numero = parseInt(prompt("scrivi un numero"));
// console.log(numero, typeof(numero));//

// Se il numero è dispari, lo salviamo in una lista.

const numeriDispari = [];

// const DISPARI = numero % 2 != 0


// console.log(numero, DISPARI);

//  if (numero == DISPARI){

//     numeriDispari.push(numero);
//  }

// console.log(numeriDispari);

// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari.

const LIMITE = 10

while(numeriDispari.length < LIMITE){
    console.log(numeriDispari)
    let numero = parseInt(prompt("Aggiungi un numero dispari"))

    let dispari = numero % 2
    

    if (dispari == true && !isNaN.numero  ){
        console.log(numero)

        numeriDispari.push(numero);
    }
}

console.log(numeriDispari)