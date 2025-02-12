//Important Variables
const container = document.querySelector(".container");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");
const gridSizeDisplay = document.querySelector("output").value;
const gridSizeInput = document.querySelector("#sizeInput");
const randomiseBtn = document.querySelector(".randomiseBtn");
const singleColor = document.querySelector(".singleColor");
let red, green, blue;
let size = 16;

//Event listeners
randomiseBtn.addEventListener('click', randomiseColors);
singleColor.addEventListener('click', enableColoring);

//create a grid
function createGrid(size) {
    container.textContent = '';

    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        container.appendChild(div);
        let row = document.querySelectorAll(".row")
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            div.appendChild(column);
        }

    }

    enableColoring();
}

//Change the grid Size
gridSizeInput.addEventListener('input', (e) => {
    const gridSize = e.target.value;

    size = gridSize;
    createGrid(size);
})

//single color method
function enableColoring() {
    //track mouse state
    let isDrawing = false;

    //Add event listeners to column
    const columns = document.querySelectorAll(".column");

    columns.forEach((cell) => {
        //start drawing when mousedown 
        cell.addEventListener("mousedown", () => {
            isDrawing = true;
            cell.style["background-color"] = colorPicker.value;
        })

        //stop drawing
        cell.addEventListener("mouseup", () => {
            isDrawing = false;
        })

        //click and drag to color
        cell.addEventListener("mouseover", () => {
            if (isDrawing) {
                cell.style["background-color"] = colorPicker.value;
            }
        })
    })
}

//randomise colors
function randomiseColors() {
    const columns = document.querySelectorAll(".column");

    columns.forEach((cell) => {

        cell.addEventListener("mousedown", () => {
            isDrawing = true;
            cell.style["background-color"] = `rgb(${red}, ${green}, ${blue})`;
        })

        //stop drawing
        cell.addEventListener("mouseup", () => {
            isDrawing = false;
        })

        //click and drag to color
        cell.addEventListener("mouseover", () => {

            if (isDrawing) {
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
                cell.style["background-color"] = `rgb(${red}, ${green}, ${blue})`;
            }
        })
    })
}

//clear the grid
clearBtn.addEventListener("click", () => {

    const columns = document.querySelectorAll(".column");
    columns.forEach(cell => {
        cell.style["background-color"] = "white";
    })
})

createGrid(size);