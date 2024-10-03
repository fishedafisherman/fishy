
var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

//var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); // click an image to drag
            tile.addEventListener("dragover", dragOver); //moveing image around while clicked
            tile.addEventListener("dragenter", dragEnter); //draggin image onto anothe one
            tile.addEventListener("dragleave", dragLeave); //dragging image leaving another image
            tile.addEventListener("drop", dragDrop); //drag an image over another image, dropping image
            tile.addEventListener("dragend", dragEnd);// after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currTime = this; //This refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragENter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTime = this; //this refers to the img tile being dopped on
}

function dragEnd() {

    if(!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    
    if (isAdjacent) {
        let currImg = currTime.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;
    }
}