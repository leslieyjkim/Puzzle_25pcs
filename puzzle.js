var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    //initialize the 5x5 board here
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {   //rows*columns = 5*5 = 25
        pieces.push(i.toString()); //put "1" to "25" into the array(puzzle images names)        
    }

    //Let's shuffle images
    pieces.reverse();
    for (let i=0; i < pieces.length; i++) {
        let j = Math.floor(Math.random()*pieces.length); //get random integer
        
        //swap images
        let tmp = pieces[i];
        pieces[i] = pieces [j];
        pieces[j] = tmp;
    }

    for (let i=0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";
        document.getElementById("pieces").append(tile);
    }
}