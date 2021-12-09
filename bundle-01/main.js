/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
}
// modifico da maggiore a inferiore, sennò il ciclo non parte
// incrementa di 1 il nostro counter, finchè non raggiunge il risultato richiesto


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) { 
    // si paragona interamente a 0, non si mette un solo "="
        return num + 5;
    }
    return num;
}
// se il numero è divisibile per 2, a quel numero viene aggiunto 5 alla somma. In caso contrario ritorna il numero 


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) { 
    // si mettono i punti e virgola, non le virgole
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++){
        if (numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// un ";" in più, la lunghezza comparata era sbagliata, si pusha numbers dentro l'array vuoto e non "i". Il return va posiziona fuori dal ciclo "for"

//all'interno della funzione viene creato un array di numeri, successivamente un array vuoto. Ciclando tutti i numeri, se il numero è divisibile per 2, viene inserito all'interno dell'array vuoto

displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers());