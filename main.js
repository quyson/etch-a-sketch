const container = document.getElementById("container");
var colors = 'black';

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

function clear(){
    let allSquares = document.querySelectorAll('.squares');
    allSquares.style.backgroundColor = 'white';
}


makeRows(100, 100);
clear();