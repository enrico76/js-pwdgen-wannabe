// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// E scrivi sulla pagina nomecognomecolorepreferito19


var nome = prompt("qual è il tuo nome?");
console.log(nome);
var cognome = prompt("qual è il tuo cognome?");
console.log(cognome);
var colore = prompt("il tuo colore preferito?");
console.log(colore);
document.getElementById('pw').innerHTML = nome + cognome + colore + 19;
