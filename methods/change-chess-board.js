

  var config = {
    //Spanish Opening
    position: "r1bqk1nr/pppp2pp/2n5/2Q5/4P3/2p2N2/P4PPP/RNB2RK1 b - - 0 10 black-to-move",
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);


function onDrop(source, target, piece, newPos, oldPos, orientation) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + Chessboard.objToFen(newPos));
  console.log("Old position: " + Chessboard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  textarea_val = $("#myTextArea").val();
  add_ =
    textarea_val +
    document.getElementById("spacecounter").innerHTML +
    "," +
    source +
    "-" +
    target +
    ",";
  //$("#myTextArea").val(add_);
  //document.getElementById("fenposition_1").innerHTML = Chessboard.objToFen(
    newPos
  //);
}


// but doesn't really work
