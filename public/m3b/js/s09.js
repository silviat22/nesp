/**
 * The elements should be in the DOM! deve essere eseguito quando il DOM è stato caricato
 */

let target = document.getElementById('target'); //variabile target

document.getElementById('backAdd').addEventListener('click', () => target.classList.add('back')); //aggiungere il tasto back alle classi(lista di classi() (in abse all'elemento backAdd?)
document.getElementById('backRemove').addEventListener('click', () => target.classList.remove('back'));
document.getElementById('foreToggle').addEventListener('click', () => target.classList.toggle('fore'));
document.getElementById('borderReplace').addEventListener('click', () => {
    console.log(target.classList.item(0), target.classList.item(1), target.classList.item(2));
    
    if(target.classList.contains('borderA')) {
        target.classList.replace('borderA', 'borderB');        
    } else if(target.classList.contains('borderB')) {
        target.classList.replace('borderB', 'borderC');        
    } else {
        target.classList.replace('borderC', 'borderA');        
    }
});

