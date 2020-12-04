const myButton = document.getElementById (id="my-button")
const nameinput = document.getElementById (id="name-input")
const namefield = document.getElementById (id="name-field")
const pronouninput = document.getElementById (id="pronoun-input")


myButton.addEventListener('click', () => {
    namefield.textContent = nameinput.value + " " + pronouninput.value;
    nameinput.value = ''
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