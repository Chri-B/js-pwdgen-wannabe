// domande per l'utente
var nomeUtente = prompt ('Qual è il tuo nome?');
var cognomeUtente = prompt ('Qual è il tuo cognome?');
var coloreUtente = prompt ('Qual è il tuo colore preferito?');
// calcolo password generata
var pswGenerata = nomeUtente + cognomeUtente + coloreUtente + 20;
// display password generata solo dopo compilazione prompt
document.getElementById('psw-finale').innerHTML = pswGenerata;
document.getElementById('comparsa').setAttribute('class','visible');
