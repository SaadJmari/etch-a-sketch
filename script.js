const container = document.querySelector(".container");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");
const gridSizeDisplay = document.querySelector("output").value;
const gridSizeInput = document.querySelector("#sizeInput");
let size = 16;


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



gridSizeInput.addEventListener('input', (e) => {
    const gridSize = e.target.value;

    size = gridSize;
    createGrid(size);
})



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

//clear the grid
clearBtn.addEventListener("click", () => {

    const columns = document.querySelectorAll(".column");
    columns.forEach(cell => {
        cell.style["background-color"] = "white";
    })
})

createGrid(size);