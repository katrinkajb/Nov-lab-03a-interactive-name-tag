const mybutton = document.getElementById (id="my-button")
const myinput = document.getElementById (id="my-input")
const namefield = document.getElementById (id="name-field")

mybutton.addEventListener('click', () => {
    namefield.textContent = myinput.value
    myinput.value = ''
});

const pinkbutton = document.getElementById (id="pink-button")
const main = document.getElementById (id='main')

pinkbutton.addEventListener('click', () => {
    main.style.backgroundColor = 'pink'
});

const lightgreenbutton = document.getElementById (id="lightgreen-button")

lightgreenbutton.addEventListener('click', () => {
    main.style.backgroundColor = 'lightgreen'
});

const lightbluebutton = document.getElementById (id="lightblue-button")

lightbluebutton.addEventListener('click', () => {
    main.style.backgroundColor = 'lightblue'
});