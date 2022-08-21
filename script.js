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

//    draw();

}

let rgbMode = false;
console.log(rgbMode);

createGrid(64); //create initial grid on page load
draw();

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
    //drawingPartyMode();
    //console.log("drawingpartymode");
    draw();
    console.log("draw");
    //console.log(rgbMode);
}


function drawingPartyMode() {
    if (rgbMode == false) {
        rgbMode = true;
        console.log("rgbMode turned to:\n");
        console.log(rgbMode);
        
        draw();
        // console.log(rgbMode);
        
    } else {
        rgbMode = false;
        console.log("rgbMode turned to:\n");
        console.log(rgbMode);

        // console.log(rgbMode);
        draw();
        
    }
    
}

function partyMode() {
    let v1 = Math.floor(Math.random() * 256);
    let v2 = Math.floor(Math.random() * 256);
    let v3 = Math.floor(Math.random() * 256);
    let rgb = "rgb("+v1+","+v2+","+v3+")";
    return rgb;
}

function toggleBorder() {
    const grid = document.querySelectorAll("div.gridsquare");
    if (grid[0].style.border == "0px solid") {
        grid.forEach((gridsquare) => {
            gridsquare.style.border = "1px solid";
        })
    } else {
    
    grid.forEach((gridsquare) => {
        gridsquare.style.border = "0px solid";
    })
    }
}

function draw() {
    const grid = document.querySelectorAll("div.gridsquare");

    console.log("test");

    if (rgbMode == true) {
        grid.forEach((gridsquare) => {
            gridsquare.addEventListener(
                "mouseover", function() {
                    gridsquare.style.backgroundColor = partyMode();
                }
            )
            })
    } else {
    grid.forEach((gridsquare) => {
        gridsquare.addEventListener(
            "mouseover", function() {
                gridsquare.style.backgroundColor = "rgb(43, 130, 252)";
            }
        )
        })
    }
}



