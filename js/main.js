var nomeUtente = prompt ('Qual è il tuo nome?');
var cognomeUtente = prompt ('Qual è il tuo cognome?');
var coloreUtente = prompt ('Qual è il tuo colore preferito?');

var pswGenerata = nomeUtente + cognomeUtente + coloreUtente;
document.getElementById('psw-finale').innerHTML = pswGenerata;
