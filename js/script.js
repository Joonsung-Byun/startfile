

const ph = document.querySelector('#primaryHeader')

const btn = document.querySelector('#btn')

const nav = document.querySelector('#primaryNav')


btn.addEventListener('click', ()=>{
    nav.classList.toggle('open')
})
