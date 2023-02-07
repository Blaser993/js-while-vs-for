console.log("ciao");




// BONUS
// SHUFFLE ARRAY
// a partire da una array con dei dati creare un algoritmo che vada a mescolare gli elementi al suo interno
// Consigli:
// il problema non è banale e vi consiglio di analizzarlo bene prima di mettervi a scrivere codice.
// Provate voi stessi: Mettetevi 10 matite sul tavolo e provate (seguendo gli stessi passaggi) e disporle in ordine casuale e dopo traducete quello che avete fatto in codice.
// serve un ciclo o più di uno? Quale ciclo devo usare? non c’è una soluzione unica, dipende dall’algoritmo che state provando a realizzare

const scatolaMatite = ["gialla",
"blu",
"celeste",
"rossa",
"rosa",
"verde",
"turchese",
"nera",
"grigia",
"bianca"]

// PRENDO UNA MATITA A CASO DALLA SCATOLA

matite = [...scatolaMatite]

const nuovaScatola = []

let matita = Math.floor(Math.random(0)* matite.length) 
console.log(matita)





// LA TOLGO DALLA SCATOLA
// LA METTO NELLA NUOVA SCATOLA NEL PRIMO POSTO LIBERO