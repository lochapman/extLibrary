let nameArray = [];
let numberArray = [];

const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const enterButton = document.getElementById ('button');

enterButton.addEventListener('click', function(e) {
    e.preventDefault();
    nameArray.push(nameInput.value);
    numberArray.push(numberInput.value);
    nameInput.value='';
    numberInput.value=0;
    if (nameArray.length>5 && numberArray.length>5) {
        document.getElementById('chartHolder')
        document.querySelector('form').classList.add('hidden');

    }
})
let ctx = document.getElementById('chartThing').getContext('2d');

let Chart = new Chart (ctx, {
    type: 'bar',
    data: {
        
        labels: ['good strategies', 'how to look busy', 'prefer ACT', 'meaning of words', 'anxiety attack'],
    }
})