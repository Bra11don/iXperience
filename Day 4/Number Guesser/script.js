const input = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener('click', (event) => {

    // for(let i = 0;i<output.children.length;i++){
    //     output.children[i].remove();
    // }

    output.innerHTML = '';

    const randomNumber = Math.round(Math.random()*10);
    
    const element = document.createElement('div');
    element.classList.add('alert')

    if(input.value == randomNumber){
        element.classList.add('alert-success');
        element.innerHTML = 'you guessed correctly.. the number was ' + randomNumber
    }
    else{
        element.classList.add('alert-danger');
        element.innerHTML = 'you guessed incorrectly.. the number was ' + randomNumber

    }

    output.appendChild(element);

})