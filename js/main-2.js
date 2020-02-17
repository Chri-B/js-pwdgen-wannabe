// domande per l'utente
var nomeUtente = prompt ('Qual è il tuo nome?');
var cognomeUtente = prompt ('Qual è il tuo cognome?');
var coloreUtente = prompt ('Qual è il tuo colore preferito?');
// variabili per anno corrente
var data = new Date();
var annoCorrente = data.getFullYear();
// calcolo password generata
var pswGenerata = nomeUtente + ';' + cognomeUtente + ';' + coloreUtente + ';' + annoCorrente;
// display password generata solo dopo compilazione prompt
document.getElementById('psw-finale').innerHTML = pswGenerata;
document.getElementById('comparsa').setAttribute('class','visible');
