const p = document.createElement('p');
const button = document.createElement('button');
const container = document.getElementById('quote_container');
const amountInput = document.createElement('input');
const select1 = document.createElement('input');
const select2 = document.createElement('input');
const label1 = document.createElement('label');
const label2 = document.createElement('label');
const select = [select1, select2];
select.forEach(function(element){
    element.setAttribute('type', 'radio');
    element.setAttribute('name', 'type');
    container.appendChild(element);

});
select1.setAttribute('value', 'life');
select1.setAttribute('value', 'work');
label1.setAttribute('for', 'type');
label2.setAttribute('for', 'type');
label1.innerHTML = 'life';
label2.innerHTML = 'work';

//better to create a function for the radios and then call it.
//need to append the label to the radios too
//then need to make that part work

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

