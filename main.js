const container = document.getElementById("container");
var colors = 'black';
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let clearButton = document.querySelector('.clear')

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

clearButton.addEventListener('click', () => {
    document.querySelectorAll('.squares').forEach(e => e.style.backgroundColor = 'white');
})




makeRows(100, 100);
