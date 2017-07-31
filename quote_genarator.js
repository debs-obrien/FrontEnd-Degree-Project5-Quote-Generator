const p = document.createElement('p');
const button = document.createElement('button');
const container = document.getElementById('quote_container');
const amountInput = document.createElement('input');
amountInput.setAttribute('type', 'text');
amountInput.setAttribute('value', '');
amountInput.setAttribute('placeholder', 'type a number');


container.appendChild(p);
container.appendChild(amountInput);
container.appendChild(button);

button.innerHTML = 'Print Quote';

p.innerHTML = 'Click the button to print a quote';

function selectAmount(){
    amountInput.setAttribute('value', amountInput.value);
    let amount = amountInput.value;
    if(amount > 5 || amount < 1){
        p.innerHTML= 'Sorry you can only choose a maximum of 5 quotes'
    }else{
        p.innerHTML ='';
        for(let i=0; i<amountInput.value; i+=1){
            p.innerHTML += life.describe() + "<br>";
        }
        button.innerHTML = 'Print more Quotes';
        amountInput.value = '';
    }

}

button.addEventListener('click', function(e){
    e.preventDefault();
    selectAmount();
});

