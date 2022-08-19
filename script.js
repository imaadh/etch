const container = document.querySelector("#container");

function createGrid(edgeNumber) {
    const edgeNumberSq = edgeNumber ** 2
    for (i = 0; i < edgeNumberSq; i++) {
        const square = document.createElement('div');
        square.classList.add('gridsquare');
        square.style.flex = '1 0 '+(100/edgeNumber)+'%';
        //square.textContent = "test";
        container.appendChild(square);
   }

   const grid = document.querySelectorAll("div.gridsquare");

   grid.forEach((gridsquare) => {
    gridsquare.addEventListener(
        "mouseover", function() {
            gridsquare.style.backgroundColor = "rgb(43, 130, 252)";
        }
    )
    })
}

createGrid(64); //create initial grid on page load

//function to delete the grid
function deleteGrid(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

let gridnumber;
function capture() {
    gridnumber = prompt("Enter number of pixels per side. Example: Entering '32' will give you a 32x32 grid. Minimum is 16 and maximum is 128.");
    deleteGrid(container);
    createGrid(gridnumber);
}

