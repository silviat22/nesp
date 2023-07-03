/**
 * Bind to f, x, clickable, and resizableInline elements -> they should be in the DOM!
 */

document.getElementById('f').addEventListener('submit', event => {
    console.log('never submit this form!');
    event.preventDefault(); //non posso fare submit, non partirà mai la richiesta
});

let x = document.getElementById('x'); //mettere in x il reference a x e stiamo lavorando su questo elemento

x.addEventListener('focus', () => console.log('x on focus')); //focus: l'utente sta cliccando proprio su questo elemento
x.addEventListener('blur', () => console.log('x blurred')); //blur: sfocatura, non c'è + il focus su quell'elemento
x.addEventListener('change', () => console.log('x changed')); //ho scritto del testo (change) ma perdo il focus, prima appare changed e poi blurred

let clickable = document.getElementById('clickable');

clickable.addEventListener('click', event => console.log('Click on clickable box', event.screenX, event.screenY)); //ho 'evento click, , stampa l log xyz e le coordimate di dove ho cliccato X e Y
clickable.addEventListener('dblclick', event => console.log('Double click on clickable box', event.screenX, event.screenY));
clickable.addEventListener('mouseover', event => console.log('Mouse over the clickable box', event.screenX, event.screenY));
clickable.addEventListener('mouseout', event => console.log('Mouse out of the clickable box', event.screenX, event.screenY));

// squared inline element assumed
let resizableInline = document.getElementById('resizableInline');
let baseInlineSize = resizableInline.width; //è la dimensone iniziale fissa, si potrebbe scrivere anche const al posto di let

resizableInline.addEventListener('mouseover', () => { //quando c'è l'evento "passare col mouse sopra"
    resizableInline.style.width = (baseInlineSize * 2) + 'px'; //cambio larghezza facendo inlinesize x2
    resizableInline.style.height = (baseInlineSize * 2) + 'px';
});
resizableInline.addEventListener('mouseout', () => {
    resizableInline.style.width = baseInlineSize + 'px'; 
    resizableInline.style.height = baseInlineSize + 'px';
});

// squared block element assumed
let resizableBlock = document.getElementById('resizableBlock');
let baseBlockSize = resizableBlock.offsetWidth; //off...piccolo trucco x capire dimensione blocco(perchè nno esiste realmente)

resizableBlock.addEventListener('mouseover', () => {
    resizableBlock.style.width = (baseBlockSize * 2) + 'px';
    resizableBlock.style.height = (baseBlockSize * 2) + 'px';
});
resizableBlock.addEventListener('mouseout', () => {
    resizableBlock.style.width = baseBlockSize + 'px';
    resizableBlock.style.height = baseBlockSize + 'px';
});
