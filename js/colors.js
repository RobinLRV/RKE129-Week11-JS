const myButton = document.querySelector('button');
const myBox = document.querySelector('.box')
const colors = ["red","green","blue","yellow"];


myButton.addEventListener('click', changeColor);

function changeColor() {
    console.log("Hello from script file");
    let randomIndex = Math.floor(Math.random() * colors.length);
    myBox.style.backgroundColor = colors[randomIndex];
}
