const etch = document.querySelector("#etch");

//function to create the grid 
function createGrid(edgeNumber) {
    let width = (500/edgeNumber).toString();
    let height = (500/edgeNumber).toString();
    for (i = 0; i < edgeNumber**2; i++) {
        const square = document.createElement('div');
        square.classList.add('gridsquare');
        square.style.flex = '1 0 '+(100/edgeNumber)+'%';
        square.style.width = width+'px';
        square.style.height = height+'px';
        etch.appendChild(square);
    }
}

//function to delete the grid
function deleteGrid(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

//initial grid load
let rgbMode = false;
createGrid(16);
draw();



//changes cell colors on mouseover
function draw() {
    const grid = document.querySelectorAll("div.gridsquare");

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

let slider = document.getElementById("gridsize");
slider.oninput = function() {
    deleteGrid(etch);
    createGrid(this.value);
    draw();
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


function toggleBorder() {
    const grid = document.querySelectorAll("div.gridsquare");
    if (grid[0].style.border == "0px solid") {
        grid.forEach((gridsquare) => {
            gridsquare.style.border = "1px rgb(227, 227, 227)";
            gridsquare.style.borderStyle = "none solid solid none";
        })
    } else {
    
    grid.forEach((gridsquare) => {
        gridsquare.style.border = "0px solid";
    })
    }
}

function partyMode() {
    let v1 = Math.floor(Math.random() * 256);
    let v2 = Math.floor(Math.random() * 256);
    let v3 = Math.floor(Math.random() * 256);
    let rgb = "rgb("+v1+","+v2+","+v3+")";
    return rgb;
}

function reset() {
    deleteGrid(etch);
    createGrid(document.getElementById("gridsize").value);
    draw();
}