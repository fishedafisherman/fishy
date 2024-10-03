
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