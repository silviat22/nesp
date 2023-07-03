/*
 * Assuming
 *  DOM already loaded
 *  target is an element with a textual content
 */

let target = document.getElementById('target');
target.textContent = 'Current date-time: ' + new Date();
console.log('hello!'); //si scrive solo per il programmatore, per spiegare cosa sia quel comando

//QUesto script (Current date-time) viene eseguito automaticamente dal browser, mentre la pagina viene caricata, viene eseguito lo script
//getElement: "metodo" che accede a un reference a uno dei nodi del DOM