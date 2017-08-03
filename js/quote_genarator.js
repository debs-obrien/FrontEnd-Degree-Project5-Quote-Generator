const p = document.createElement('p');
const button = document.createElement('button');
const buttonClear = document.createElement('button');
const container = document.getElementById('quote_container');
const form = document.createElement('form');
const amountInput = document.createElement('input');

amountInput.setAttribute('type', 'text');
amountInput.setAttribute('value', '');
amountInput.setAttribute('placeholder', 'type a number');

container.appendChild(p);
container.appendChild(form);
form.appendChild(amountInput);
form.appendChild(button);

button.innerHTML = 'Print Quote';
buttonClear.innerHTML = 'Clear Quote';

let startMessage = 'Select an amount of Quotes and which type you would like';
let errorNoQuote = 'Please choose the type of quote';
let errorNoAmount = 'Please choose an amount';
let errorValue = 'Sorry you can only between 1 and 5 quotes';
let printMore = 'Print more Quotes';
p.innerHTML = startMessage;
p.className = "message";

/*
 Creates a radio button and label
 */
function createRadios(radio, name, value, label, text) {
    radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', name);
    radio.setAttribute('class', name);
    radio.setAttribute('id', value);
    radio.setAttribute('value', value);
    label = document.createElement('label');
    label.setAttribute('for', value);
    label.innerHTML = text;
    form.appendChild(label);
    form.appendChild(radio);
}
/*
 call the function to print each radio button and label required
 */
createRadios('select1', 'type', 'life', 'label1', 'Life');
createRadios('select2', 'type', 'work', 'label2', 'Work');

/*
 Get the value of the radio button that is checked and return it
 */
function getRadioCheckedValue() {
    let radios = document.getElementsByName('type');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}
/*
 Select the amount of quotes to be printed and print messages if errors
 Run a for loop for the amount the user has input and run the showQuotes function that many times
 */
function selectAmount(quote) {
    amountInput.setAttribute('value', amountInput.value);
    let amount = amountInput.value;
    p.className = "error";
    if (!quote) {
        p.innerHTML = errorNoQuote;
    }
    else if (!amount) {
        p.innerHTML = errorNoAmount
    }
    else if (amount > 5 || amount <= 0) {
        p.innerHTML = errorValue;
    } else {
        p.innerHTML = '';
        p.className = "quote";
        for (let i = 0; i < amountInput.value; i += 1) {
            showQuotes(quote);
        }
        button.innerHTML = printMore;
        amountInput.value = '';
        form.appendChild(buttonClear);
    }

}
/*
 print the quote depending on which quote has been choosen
 */
function showQuotes(quote) {
    if (quote === 'life') {
        p.innerHTML += life.describe() + "<br>";
    } else {
        p.innerHTML += work.describe() + "<br>";
    }
}

/*
 event listener that clears the quotes should the user decide he doesn't
 want to see any more quotes. Once clicked this button is then removed
 */
buttonClear.addEventListener('click', (e) => {
    e.preventDefault();
    p.innerHTML = startMessage;
    buttonClear.remove();
    p.className = "message";
});

/*
 event listener on submit that gets the value of the radio button and stores it in a variable
 this is then passed to the select Amount function so that we know which quote to print
 as this value is then passed down to the showQuotes function
 */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    buttonClear.remove();
    let quote = getRadioCheckedValue();
    selectAmount(quote);
});