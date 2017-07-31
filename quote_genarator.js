const p = document.createElement('p');
const button = document.createElement('button');
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

p.innerHTML = 'Click the button to print a quote';

function createRadios(radio, name, value, label, text){
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

createRadios('select1', 'type', 'life', 'label1', 'Life');
createRadios('select2', 'type', 'work','label2', 'Work');

function getRadioCheckedValue() {
    let radios = document.getElementsByName('type');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value);
            return radios[i].value;
        }
    }
}

function selectAmount(quote){
    amountInput.setAttribute('value', amountInput.value);
    let amount = amountInput.value;
    if(!quote){
        p.innerHTML= 'Please choose the type of quote';
    }
    else if(!amount){
        p.innerHTML= 'Please choose an amount';
    }
    else if(amount > 5 || amount <= 0){
        p.innerHTML= 'Sorry you can only between 1 and 5 quotes';
    }else{
        p.innerHTML ='';
        for(let i=0; i<amountInput.value; i+=1){
            showQuotes(quote);
        }
        button.innerHTML = 'Print more Quotes';
        amountInput.value = '';
    }

}
function showQuotes(quote){
    if(quote==='life'){
        p.innerHTML += life.describe() + "<br>";
    }else{
        p.innerHTML += work.describe() + "<br>";
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let quote = getRadioCheckedValue();
    selectAmount(quote);
});