const container = document.getElementById("container");
var colors = 'black';
let randomColor = Math.floor(Math.random()*16777215).toString(16);


const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    document.querySelectorAll('.squares').forEach(e => e.style.backgroundColor = 'white');
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.squares').forEach(e => e.remove());
    let input = userInput();
    input = Number(input);
    makeRows(input, input);
});


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = colors;
    });
    container.appendChild(cell).className = "squares";
  };
};

function setColor(input){
    colors = input;
}

function userInput(){
    let user = prompt("Please enter a number between 0 and 100: ");
    if(user > 100 || user < 0){
        alert("Error!");
        return
    } else {
        return user;
    }
}

makeRows(16, 16);
