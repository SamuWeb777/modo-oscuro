const boton = document.querySelector('.btn-oscuro')
console.log(boton)
let h1 = document.querySelector('h1')
const divs = document.querySelectorAll('.item')
const h2 = document.querySelectorAll('h2')
const p = document.querySelectorAll('p')
console.log(h1)
console.log(divs)
console.log(h2)
console.log(p)
boton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    h1.classList.toggle('titulo_principal')
    
    h2.forEach(element => {
        element.classList.toggle('texto');
    });

    p.forEach(element => {
        element.classList.toggle('texto');
    });
    divs.forEach(element => {
        element.classList.toogle('-dark');
    });
})
