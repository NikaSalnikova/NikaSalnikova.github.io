const baseButtons = document.querySelectorAll('.base_str');
const typingObject = document.querySelector('.typingObject');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
typingObject.innerText = '';
let mainString = '';

for (let baseButton of baseButtons) {
    let buttonText = baseButton.innerText;
    baseButton.addEventListener('click', function(){
        typingObject.innerText =`${typingObject.innerText}${buttonText}`;
    })}


document.querySelector('.clear1').addEventListener('click', function() {
    typingObject.innerText = '';
    mainString = '';
})
document.querySelector('.clear2').addEventListener('click', function() {
    typingObject.innerText = '';
    mainString = '';
})

document.querySelector('.clear3').addEventListener('click', function() {
    typingObject.innerText = `${typingObject.innerText.slice(0, -1)}`;
})


equals.addEventListener('click', function(){
    for (let symbol of typingObject.innerText) {
        mainString = mainString + symbol;
    }
    mainString = mainString.replaceAll('×', '*');
    mainString = mainString.replaceAll('–', '-');
    mainString = mainString.replaceAll('÷', '/');
    mainString = mainString.replaceAll(',', '.');
    console.log(mainString);
    typingObject.innerText = `${eval(mainString)}`;

})
