var board = Chessboard('myBoard', {
  draggable: true,
  dropOffBoard: 'snapback',
  position: 'start',
  snapbackSpeed: 500,
  snapSpeed: 100,
  onDragStart: function(source, piece, position, orientation) {
    // Prevent default browser behavior during drag and drop
    event.preventDefault();
  },
  onDrop: function(source, target) {
    // Get the textarea element by its id
    var textarea = document.getElementById('myTextArea');
    console.log(target);

    // Update the value of the textarea with the target square where the piece was dropped
    textarea.value += board.fen() + "\n";
  }
});



  var dict_1 = {
    0: "https://ucc4b8ff1028d034abc285c1b292.dl.dropboxusercontent.com/cd/0/inline/B3IqEWjb0DM8KxOFLJE3pgXEzDmVt0XoOz9B3CXliioRsRKPc231YB7f7l3b5fkGKgw0wzjLfYWoN5OiK5DgYeBW-qNWqnI13dy1ra8RWtHlccjTU-js2CfSd6s4S9O3ulrl03u2APeojLY1s2dvR8-kQRXUcBc7GQk195_qLqoHJQ/file#",
    1: "https://ucfbb1877fdbd7f8fff6006a8a1f.dl.dropboxusercontent.com/cd/0/inline/B3K-UClQx2yg3DYyYxHQjase-dHKSyoADg7FsfFItQTYyB8ZXw-JqLaOJa-u-1-BNIyHR4IN8jPbmLfzzX53ylmypnYaCCvchOl6bTtmGKu86aHH58oHFJi0pmhUJR3RiIzBDwm6LWsVEqDvMVceLD2lPmy4RcznUru1m-GAHBbOnA/file#"
  };

var movesArray = ['1.', '1...', '2.', '2...', '3.', '3...', '4.', '4...', '5.', '5...', '6.', '6...', '7.', '7...', '8.', '8...', '9.', '9...', '10.', '10...', '11.', '11...', '12.', '12...', '13.', '13...', '14.', '14...', '15.', '15...', '16.', '16...', '17.', '17...', '18.', '18...', '19.', '19...', '20.', '20...', '21.', '21...', '22.', '22...', '23.', '23...', '24.', '24...', '25.', '25...', '26.', '26...', '27.', '27...', '28.', '28...', '29.', '29...', '30.', '30...', '31.', '31...', '32.', '32...', '33.', '33...', '34.', '34...', '35.', '35...', '36.', '36...', '37.', '37...', '38.', '38...', '39.', '39...', '40.', '40...', '41.', '41...', '42.', '42...', '43.', '43...', '44.', '44...']
  



$("#flip_board").click( function() {
  board.flip();
});

//if




function getSelectedText_to_gotoHighlightedLink() {
  var selectedText = '';
  if (window.getSelection) {
      selectedText = window.getSelection();
  }
  else if (document.getSelection) {
      selectedText = document.getSelection();
  }
  else if (document.selection) {
      selectedText = document.selection.createRange().text;
  } else return;
  console.log(selectedText.toString().trim());
                   //this would be the flashcard
  board.position(selectedText.toString().trim());
}

goToHighlight.addEventListener('click', function() {
  getSelectedText_to_gotoHighlightedLink();
});



counter_ = 0;




bracket_counter = 0


const tableE = document.getElementById('my-table');

tableE.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    var clickedRow = event.target.parentNode; // Get the parent row of the clicked cell
    var tableRows = tableE.querySelectorAll('tr');
    var rowIndex = Array.prototype.indexOf.call(tableRows, clickedRow);
    var rowNumber = rowIndex + 1; // Row index is 0-based, so add 1
    
    console.log('Clicked on row number:', rowNumber);
    bracket_counter = rowIndex;
    
    // Use the same highlightCell function as bracket navigation
    highlightCell(rowNumber);
    document.getElementById('bracketReveal').innerHTML = bracket_counter;
  }
});



var convertTextAreaColumns = document.getElementById('convertTextAreaColumns');

convertTextAreaColumns.addEventListener('click', function() {
  console.log('convert text area clicked');
  bracket_counter = 0;
  var textarea = document.querySelector("#myTextArea");
  var arr = textarea.value.trim();

  // Clear the existing table
  document.getElementById('my-table').innerHTML = '';

  // Get the table element
  var table = document.getElementById('my-table');

  // Split the input string into rows
  var rows = arr.split('\n');
  
  // Iterate over each row
  for (var i = 0; i < rows.length; i++) {
    // Split the row into cells based on both '\n' and '\t'
    var cells = rows[i].split(/\n|\t/);
    
    // Create a new row
    var row = document.createElement('tr');
    
    // Iterate over each cell in the row
    for (var j = 0; j < cells.length; j++) {
      // Create a new cell
      var cell = document.createElement('td');
      
      // Set the cell content to the current cell string
      cell.textContent = cells[j];
      cell.style.border = '1px solid black';
      
      // Append the cell to the row
      row.appendChild(cell);
    }
    
    // Append the row to the table
    table.appendChild(row);
  }
});

var convertTextAreaTest = document.getElementById('convertTextAreaTest');

convertTextAreaTest.addEventListener('click', function() {
  console.log('convert text area clicked');
  var textarea = document.querySelector("#myTextArea");
  var arr = textarea.value.trim();

  // Clear the existing table
  document.getElementById('my-table').innerHTML = '';

  // Get the table element
  var table = document.getElementById('my-table');

  // Split the input string into rows
  var rows = arr.split('\n');
  
  // Iterate over each row
  for (var i = 0; i < rows.length; i++) {
    // Split the row into cells based on '\t'
    var cells = rows[i].split('\t');
    
    // Create a new row for 'x'
    var xRow = document.createElement('tr');

    // Create the first cell for the xRow (copy from original)
    var xCell1 = document.createElement('td');
    xCell1.textContent = cells[0];
    xCell1.style.border = '1px solid black';
    xRow.appendChild(xCell1);

    // Create the second cell for the xRow (insert 'x')
    var xCell2 = document.createElement('td');
    xCell2.textContent = 'x';
    xCell2.style.border = '1px solid black';
    xRow.appendChild(xCell2);

    // Append the xRow to the table
    table.appendChild(xRow);

    // Create the original row
    var row = document.createElement('tr');

    // Iterate over each cell in the original row
    for (var j = 0; j < cells.length; j++) {
      // Create a new cell
      var cell = document.createElement('td');

      // Set the cell content to the current cell string
      cell.textContent = cells[j];
      cell.style.border = '1px solid black';

      // Append the cell to the row
      row.appendChild(cell);
    }

    // Append the original row to the table
    table.appendChild(row);
  }
});


var convertTextAreaSemiColons = document.getElementById('convertTextAreaSemiColons');

convertTextAreaSemiColons.addEventListener('click', function() {
  console.log('convert text area clicked');
    var textarea = document.querySelector("#myTextArea2"); // Updated ID here
    var arr = textarea.value.trim();

    // Clear the existing table
    document.getElementById('my-table2').innerHTML = ''; // Updated ID here

    // Get the table element
    var table = document.getElementById('my-table2'); // Updated ID here

    // Split the input string into rows
    var rows = arr.split(';');

    // Iterate over each row
    for (var i = 0; i < rows.length; i++) {
      // Create a new row
      var row = document.createElement('tr');

      // Create a new cell
      var cell = document.createElement('td');

      // Set the cell content to the current row string
      cell.textContent = rows[i];
      cell.style.border = '1px solid black';

      // Append the cell to the row
      row.appendChild(cell);

      // Append the row to the table
      table.appendChild(row);
    }
    // Place your code here to convert the text area content into a table
  });


var clearTextArea2 = document.getElementById('clearTextArea2');

clearTextArea2.addEventListener('click', function() {
  console.log('convert text area clicked');
    var textarea = document.querySelector("#myTextArea2"); // Updated ID here
    textarea.value = ''; // Clear the innerHTML of the textarea

    
  })

var fenReveal = document.getElementById('fenReveal');

fenReveal.addEventListener('click', function () {
  console.log('fenReveal clicked');
  if (currentGamePositions.length > 0) {
    positionCounter = (positionCounter + 1) % currentGamePositions.length;
    loadPositionBoardOnly(positionCounter);
    console.log('FenReveal click - moved to position:', positionCounter + 1);
  } else {
    console.log('No positions loaded for navigation');
  }
})

var moveReveal = document.getElementById('moveReveal');

moveReveal.addEventListener('click', function() {
  console.log('moveReveal clicked');
  if (currentGamePositions.length > 0) {
    positionCounter = positionCounter === 0 ? currentGamePositions.length - 1 : positionCounter - 1;
    loadPositionBoardOnly(positionCounter);
    console.log('MoveReveal click - moved to position:', positionCounter + 1);
  } else {
    console.log('No positions loaded for navigation');
  }
});


var getInnerHTML = document.getElementById('getInnerHTML');

getInnerHTML.addEventListener('click', function() {
  console.log('get inner HTML');
  // Get references to the table and the <p> tag
  const table = document.getElementById('my-table');
  const paragraph = document.getElementById('returnInnerHTML');

  // Get the rows of the table
  const rows = table.getElementsByTagName('tr');

  // Concatenate the outerHTML of each row
  let tableWithTrTags = '';
  for (let i = 0; i < rows.length; i++) {
    tableWithTrTags += rows[i].outerHTML;
  }

  // Set the innerHTML of the <p> tag with the table's content (including <tr> tags)
  var textarea = document.querySelector("#myTextArea"); // Updated ID here
  textarea.value = tableWithTrTags;
});

var convertTextAreaInnerHTML = document.getElementById('convertTextAreaInnerHTML');


convertTextAreaInnerHTML.addEventListener('click', function() {
  console.log('convert text area clicked');
    var textarea = document.querySelector("#myTextArea"); // Updated ID here
    var arr = textarea.value.trim();

    // Clear the existing table
    document.getElementById('my-table').innerHTML = ''; // Updated ID here

    document.getElementById('my-table').innerHTML = arr;
    // Place your code here to convert the text area content into a table
  });

document.getElementById('my-table').innerHTML = '<tr><td style="border: 1px solid black;">r2qkbnr/ppp2ppp/2np4/4p3/2B1P1b1/5N1P/PPPP1PP1/RNBQ1RK1 b kq - 0 5</td><td style="border: 1px solid black;">5... black to move</td></tr><tr><td style="border: 1px solid black;">r2qkbnr/ppp2ppp/2np4/4p3/2B1P1b1/5N1P/PPPP1PP1/RNBQ1RK1 b kq - 0 5</td><td style="border: 1px solid black;">dont take move the bishop back to h, or take the knight instead</td></tr><tr><td style="border: 1px solid black;">2kr1bnr/pppq1pp1/3p3p/4n3/2BNP3/7P/PPP2P1K/RNBQ2R1 w - - 1 11</td><td style="border: 1px solid black;">11. white to move</td></tr><tr><td style="border: 1px solid black;">2kr1bnr/pppq1pp1/3p3p/4n3/2BNP3/7P/PPP2P1K/RNBQ2R1 w - - 1 11</td><td style="border: 1px solid black;">mistake here</td></tr><tr><td style="border: 1px solid black;">2kr2nr/pppq1pb1/3p3p/5Pp1/2n1P3/2N2N1P/PPP4K/R1BQ2R1 b - - 2 14</td><td style="border: 1px solid black;">14.. black to move</td></tr><tr><td style="border: 1px solid black;">2kr2nr/pppq1pb1/3p3p/5Pp1/2n1P3/2N2N1P/PPP4K/R1BQ2R1 b - - 2 14</td><td style="border: 1px solid black;">14... black has a capture here</td></tr><tr><td style="border: 1px solid black;">2kr2nr/pppq1p2/3p3p/3NnPp1/P3P3/7P/1PP4K/R1BQ2R1 b - a3 0 17</td><td style="border: 1px solid black;">17... black to move</td></tr><tr><td style="border: 1px solid black;">2kr2nr/pppq1p2/3p3p/3NnPp1/P3P3/7P/1PP4K/R1BQ2R1 b - a3 0 17</td><td style="border: 1px solid black;">17... kick out the knight move the queen to e7 square</td></tr>'



var $alan1 = '<tr><td style="border: 1px solid black;">1.e4 e6 2.Nc3 d5 3.Nf3 Be7 4.d4 c5 5.Bb5+ Nc6 6.Bf4 Nf6 7.e5 Nd7 8.O-O Qb6 9.a4 a6 10.Bd3 Qxb2 11.Ne2 Qb6 12.c3 cxd4 13.Rb1 Qa7 14.cxd4 Bd8 15.Ng5 O-O 16.Bxh7+ Kh8 17.Bd3 Bb6 18.Ng3 Nxd4 19.Qh5+ Kg8 20.Qh7# 1-0</td><td style="border: 1px solid black;">1.e4 e6 2.Nc3 d5 3.Nf3 Be7 4.d4 c5 5.Bb5+ Nc6 6.Bf4 Nf6 7.e5 Nd7 8.O-O Qb6 9.a4 a6 10.Bd3 Qxb2 11.Ne2 Qb6 12.c3 cxd4 13.Rb1 Qa7 14.cxd4 Bd8 15.Ng5 O-O 16.Bxh7+ Kh8 17.Bd3 Bb6 18.Ng3 Nxd4 19.Qh5+ Kg8 20.Qh7# 1-0</td><td style="border: 1px solid black;">mate in two</td></tr>'

var $cheesecake = `<tr><td style="border: 1px solid black;">https://www.chess.com/game/live/81480652067</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">site</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">4rk1/pppnqppp/4p3/b2pP3/3P4/2PBP2P/PP4P1/R1BQ1RK1 w - - 1 13</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r4rk1/pppnqppp/4p3/b2pP3/3P4/2PBP2P/PP4P1/R1BQ1RK1 w - - 1 13</td><td style="border: 1px solid black;">can attack with e4</td></tr><tr><td style="border: 1px solid black;">r1bqk2r/ppp2ppp/3b1n2/3p4/6n1/4PN2/PPPNBPPP/R1BQK2R w KQkq - 4 8</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r1bqk2r/ppp2ppp/3b1n2/3p4/6n1/4PN2/PPPNBPPP/R1BQK2R w KQkq - 4 8</td><td style="border: 1px solid black;">should get this position</td></tr><tr><td style="border: 1px solid black;">r1bqk2r/ppp2ppp/3b1n2/3pn3/5P2/4P3/PPPNB1PP/R1BQK1NR b KQkq f3 0 7</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r1bqk2r/ppp2ppp/3b1n2/3pn3/5P2/4P3/PPPNB1PP/R1BQK1NR b KQkq f3 0 7</td><td style="border: 1px solid black;">moving the pawn up is a mistake here</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/82504336749?tab=analysis</td><td style="border: 1px solid black;">see page 1 (google docs)</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/82504336749?tab=analysis</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">https://www.chessable.com/variation/5912552/</td><td style="border: 1px solid black;">After playing b3 thousands of times in my career, the ironic twist remains. We intentionally weaken dark squares on the queenside and the Bishop on g7 gets excited! But then duly form our own Bb2 and ensuing dark energy... making a semi mockery of Black's whole dark idea!</td></tr><tr><td style="border: 1px solid black;">https://www.chessable.com/variation/5912552/</td><td style="border: 1px solid black;">After playing b3 thousands of times in my career, the ironic twist remains. We intentionally weaken dark squares on the queenside and the Bishop on g7 gets excited! But then duly form our own Bb2 and ensuing dark energy... making a semi mockery of Black's whole dark idea!</td></tr><tr><td style="border: 1px solid black;">nothing.to.see.here</td><td style="border: 1px solid black;">The King's Indian is a dark-square oriented opening. The g7-bishop applies pressure down the long diagonal, Black follows up with ...d6 and ...e5 almost on auto-pilot in order to open the long diagonal. In this case, Black's auto-pilot strategy to open the long diagonal turns against him because exchanging the fianchettoed bishop after the center opens would lead to weak dark-squares on the kingside.' - Logozar</td></tr><tr><td style="border: 1px solid black;">nothing.to.see.here</td><td style="border: 1px solid black;">The King's Indian is a dark-square oriented opening. The g7-bishop applies pressure down the long diagonal, Black follows up with ...d6 and ...e5 almost on auto-pilot in order to open the long diagonal. In this case, Black's auto-pilot strategy to open the long diagonal turns against him because exchanging the fianchettoed bishop after the center opens would lead to weak dark-squares on the kingside.' - Logozar</td></tr><tr><td style="border: 1px solid black;">2q1rk1/pb2bppp/1pn1pn2/2ppN3/3P1P2/2PBPQ2/PP1N2PP/R1B2RK1</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r2q1rk1/pb2bppp/1pn1pn2/2ppN3/3P1P2/2PBPQ2/PP1N2PP/R1B2RK1</td><td style="border: 1px solid black;">important move to block out the white squares for the opponent or the knight- white queen just moved</td></tr><tr><td style="border: 1px solid black;">r1bqr1k1/p2nbp1p/1p2p1pQ/2ppP3/3P4/2PBP3/PP1N2PP/R1B2RK1</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r1bqr1k1/p2nbp1p/1p2p1pQ/2ppP3/3P4/2PBP3/PP1N2PP/R1B2RK1</td><td style="border: 1px solid black;">the center is closed- the pieces cannot come- everything is on dark- the queen and bishop act as complements black and white. Rook takes f7.</td></tr><tr><td style="border: 1px solid black; background-color: yellow;">https://www.chessable.com/learn/31827?from=homepage</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">https://www.chessable.com/learn/31827?from=homepage</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">https://www.chessable.com/variation/5912321/#/14/w</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">https://www.chessable.com/variation/5912321/#/14/w</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1;rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1;rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2;rnbqkb1r/pppppppp/5n2/8/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq - 0 2;rnbqkb1r/pppppp1p/5np1/8/3P4/4P3/PPP2PPP/RNBQKBNR w KQkq - 0 3;rnbqkb1r/pppppp1p/5np1/8/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 1 3;rnbqk2r/ppppppbp/5np1/8/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq - 2 4;rnbqk2r/ppppppbp/5np1/8/3P4/4PN2/PPP1BPPP/RNBQK2R b KQkq - 3 4;rnbq1rk1/ppppppbp/5np1/8/3P4/4PN2/PPP1BPPP/RNBQK2R w KQ - 4 5;rnbq1rk1/ppppppbp/5np1/8/3P4/4PN2/PPP1BPPP/RNBQ1RK1 b - - 5 5;rnbq1rk1/ppp1ppbp/3p1np1/8/3P4/4PN2/PPP1BPPP/RNBQ1RK1 w - - 0 6;rnbq1rk1/ppp1ppbp/3p1np1/8/3P4/1P2PN2/P1P1BPPP/RNBQ1RK1 b - - 0 6;r1bq1rk1/pppnppbp/3p1np1/8/3P4/1P2PN2/P1P1BPPP/RNBQ1RK1 w - - 1 7;r1bq1rk1/pppnppbp/3p1np1/8/3P4/1P2PN2/PBP1BPPP/RN1Q1RK1 b - - 2 7;r1bq1rk1/pppn1pbp/3p1np1/4p3/3P4/1P2PN2/PBP1BPPP/RN1Q1RK1 w - - 0 8;r1bq1rk1/pppn1pbp/3p1np1/4P3/8/1P2PN2/PBP1BPPP/RN1Q1RK1 b - - 0 8;r1bq1rk1/pppn1pbp/3p2p1/4P3/6n1/1P2PN2/PBP1BPPP/RN1Q1RK1 w - - 1 9;r1bq1rk1/pppn1pbp/3p2p1/4P3/2P3n1/1P2PN2/PB2BPPP/RN1Q1RK1 b - - 0 9;r1bq1rk1/pppn1pbp/3p2p1/4n3/2P5/1P2PN2/PB2BPPP/RN1Q1RK1 w - - 0 10;r1bq1rk1/pppn1pbp/3p2p1/4N3/2P5/1P2P3/PB2BPPP/RN1Q1RK1 b - - 0 10;r1bq1rk1/ppp2pbp/3p2p1/4n3/2P5/1P2P3/PB2BPPP/RN1Q1RK1 w - - 0 11;r1bq1rk1/ppp2pbp/3p2p1/4n3/2P5/1P2P3/PB1QBPPP/RN3RK1 b - - 1 11;r2q1rk1/ppp2pbp/3pb1p1/4n3/2P5/1P2P3/PB1QBPPP/RN3RK1 w - - 2 12;r2q1rk1/ppp2pbp/3pb1p1/4n3/2P5/1PN1P3/PB1QBPPP/R4RK1 b - - 3 12;r4rk1/pppq1pbp/3pb1p1/4n3/2P5/1PN1P3/PB1QBPPP/R4RK1 w - - 4 13;r4rk1/pppq1pbp/3pb1p1/4n3/2P1P3/1PN5/PB1QBPPP/R4RK1 b - - 0 13;r4rk1/1ppq1pbp/3pb1p1/p3n3/2P1P3/1PN5/PB1QBPPP/R4RK1 w - - 0 14;r4rk1/1ppq1pbp/3pb1p1/p3n3/2P1PP2/1PN5/PB1QB1PP/R4RK1 b - - 0 14;r4rk1/1ppq1pbp/3pb1p1/p7/2P1PPn1/1PN5/PB1QB1PP/R4RK1 w - - 1 15;r4rk1/1ppq1pbp/3pb1p1/p4P2/2P1P1n1/1PN5/PB1QB1PP/R4RK1 b - - 0 15;r4rk1/1ppq1pbp/3pb3/p4p2/2P1P1n1/1PN5/PB1QB1PP/R4RK1 w - - 0 16;r4rk1/1ppq1pbp/3pb3/p4P2/2P3n1/1PN5/PB1QB1PP/R4RK1 b - - 0 16;r4rk1/1ppq1pbp/3p4/p4b2/2P3n1/1PN5/PB1QB1PP/R4RK1 w - - 0 17;r4rk1/1ppq1pbp/3p4/p2N1b2/2P3n1/1P6/PB1QB1PP/R4RK1 b - - 1 17;4rrk1/1ppq1pbp/3p4/p2N1b2/2P3n1/1P6/PB1QB1PP/R4RK1 w - - 2 18;4rrk1/1ppq1pbp/3p4/p2N1b2/2P3B1/1P6/PB1Q2PP/R4RK1 b - - 0 18;4rrk1/1ppq1pbp/3p4/p2N4/2P3b1/1P6/PB1Q2PP/R4RK1 w - - 0 19;4rrk1/1ppq1pbp/3p1N2/p7/2P3b1/1P6/PB1Q2PP/R4RK1 b - - 1 19;4rrk1/1ppq1p1p/3p1b2/p7/2P3b1/1P6/PB1Q2PP/R4RK1 w - - 0 20;4rrk1/1ppq1p1p/3p1B2/p7/2P3b1/1P6/P2Q2PP/R4RK1 b - - 0 20;4rrk1/1ppq1p1p/3p1B2/p6b/2P5/1P6/P2Q2PP/R4RK1 w - - 1 21;4rrk1/1ppq1p1p/3p1B2/p5Qb/2P5/1P6/P5PP/R4RK1 b - - 2 21;4rrk1/1ppq1p1p/3p1Bb1/p5Q1/2P5/1P6/P5PP/R4RK1 w - - 3 22;</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">update bottom table</td><td style="border: 1px solid black;">update</td></tr>`

var $newInfo = '<tr><td style="border: 1px solid black;">this game is very interesting</td><td style="border: 1px solid black;">pgn-test</td></tr><tr><td style="border: 1px solid black;">2kr1bnr/pppbqNpp/2n5/3pp3/2B1P3/2NP4/PPP2PPP/R1BQK2R w KQ - 0 8;2kr1bnr/pppbqNpp/2n5/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R b KQ - 0 8;2kr1b1r/pppbqNpp/2n2n2/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R w KQ - 1</td><td style="border: 1px solid black;">pgn-test</td></tr><tr><td style="border: 1px solid black;">here these moves are stopping a wave from black</td><td style="border: 1px solid black;">pgn-test</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/84730958199?tab=analysis</td><td style="border: 1px solid black;">pgn-test</td></tr><tr><td style="border: 1px solid black;">1.e4 e6 2.Nc3 d5 3.Nf3 Be7 4.d4 c5 5.Bb5+ Nc6 6.Bf4 Nf6 7.e5 Nd7 8.O-O Qb6 9.a4 a6 10.Bd3 Qxb2 11.Ne2 Qb6 12.c3 cxd4 13.Rb1 Qa7 14.cxd4 Bd8 15.Ng5 O-O 16.Bxh7+ Kh8 17.Bd3 Bb6 18.Ng3 Nxd4 19.Qh5+ Kg8 20.Qh7# 1-0</td><td style="border: 1px solid black;">pgn-test2</td></tr><tr><td style="border: 1px solid black;">this game is very interesting</td><td style="border: 1px solid black;">pgn-test2</td></tr><tr><td style="border: 1px solid black;">2kr1bnr/pppbqNpp/2n5/3pp3/2B1P3/2NP4/PPP2PPP/R1BQK2R w KQ - 0 8;2kr1bnr/pppbqNpp/2n5/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R b KQ - 0 8;2kr1b1r/pppbqNpp/2n2n2/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R w KQ - 1</td><td style="border: 1px solid black;">pgn-test2</td></tr><tr><td style="border: 1px solid black;">here these moves are stopping a wave from black</td><td style="border: 1px solid black;">pgn-test2</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/84730958199?tab=analysis</td><td style="border: 1px solid black;">pgn-test2</td></tr>'

let dictionaryDatabase = {
 'alan1' : $alan1,
 'chesscake': $cheesecake,
 'newInfo' : $newInfo }



function repopulateDropdown() {
    // Get the dropdown element
    let dropdown = document.getElementById('retrieveData');

    // Clear existing options
    dropdown.innerHTML = '';
    let emptyOpt = document.createElement('option');
    emptyOpt.value = '';
    emptyOpt.textContent = 'Select to Retrieve';
    dropdown.appendChild(emptyOpt);

    // Loop over the dictionary keys
    for (let key in dictionaryDatabase) {
        // Create a new option element
        let opt = document.createElement('option');

        // Set the value and text of the option
        opt.value = key;
        opt.textContent = key;

        // Add the option to the dropdown
        dropdown.appendChild(opt);
    }
}

// Call the function with the ID of your dropdown

      
      setTimeout(repopulateDropdown, 1000);

  var retrieveDataChoice = document.getElementById("retrieveData");
  retrieveDataChoice.addEventListener("change", function () {
        console.log('1')
        let selectedKey = this.value;
        console.log('Selected Key:', selectedKey);
        console.log('Corresponding Value:', dictionaryDatabase[selectedKey]);
        document.getElementById('my-table').innerHTML = dictionaryDatabase[selectedKey]

      });

// Populate folderTextData dropdown
function populateFolderTextDropdown() {
    let dropdown = document.getElementById('folderTextData');
    
    // Check if dictionaryDatabaseFromFolder exists
    if (typeof dictionaryDatabaseFromFolder !== 'undefined') {
        // Clear existing options except the first one
        dropdown.innerHTML = '<option value="" disabled selected>Folder Text Data</option>';
        
        // Add options from the generated data
        for (let key in dictionaryDatabaseFromFolder) {
            let option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            dropdown.appendChild(option);
        }
    } else {
        console.log('dictionaryDatabaseFromFolder not found - run process_texts.py first');
    }
}

// Handle folderTextData dropdown selection
var folderTextDataChoice = document.getElementById("folderTextData");
folderTextDataChoice.addEventListener("change", function () {
    console.log('Folder text data selected');
    let selectedKey = this.value;
    console.log('Selected Key:', selectedKey);
    
    if (typeof dictionaryDatabaseFromFolder !== 'undefined' && dictionaryDatabaseFromFolder[selectedKey]) {
        console.log('Loading folder data:', dictionaryDatabaseFromFolder[selectedKey]);
        document.getElementById('my-table').innerHTML = dictionaryDatabaseFromFolder[selectedKey];
    }
});

// Initialize folder dropdown when page loads
setTimeout(function() {
    populateFolderTextDropdown();
}, 1000);


function highlightCell(rowNumber) {
  const tableE = document.getElementById('my-table');
  const rows = tableE.getElementsByTagName('tr');

  // Reset background color for all cells
  const allCells = tableE.getElementsByTagName('td');
  for (var j = 0; j < allCells.length; j++) {
    allCells[j].style.backgroundColor = '';
  }

  // Get the specific row and its first cell
  const row = rows[rowNumber - 1]; // Subtract 1 since rowNumber is 1-based
  const cell = row.getElementsByTagName('td')[0];

  // Highlight the specified cell
  cell.style.backgroundColor = 'yellow';

  var cellText = cell.textContent;
  console.log('Clicked on row number:', rowNumber);
  console.log(cellText)
    if (cellText.includes(';')) {
      console.log('The text contains a semicolon.');
      var arr = cellText.trim();
      document.getElementById('my-table2').innerHTML = '';
      var table = document.getElementById('my-table2');
      var rows2 = arr.split(';');

      for (var i = 0; i < rows2.length; i++) {
        var row2 = document.createElement('tr');
        var cell2 = document.createElement('td');
        cell2.textContent = rows2[i];
        cell2.style.border = '1px solid black';
        row2.appendChild(cell2);
        table.appendChild(row2);
      }
    } else if (cellText.includes('.')) {
      console.log('The text contains a dot, but no semicolon.');
      var cellTextTrimmed = cellText.toString().trim();
      var anchorTag = `<a href="${cellTextTrimmed}" target="_blank">${cellTextTrimmed}</a>`;
      document.getElementById('fenReveal').innerHTML = anchorTag;

    } else {
      console.log('The text does not contain a dot or a forward slash.');
      console.log(cellText)
      board.position(cellText.toString().trim());
      document.getElementById('fenReveal').innerHTML = cellText.toString().trim();
    }
    counter_ = 0;
}



function isPgnContent(text) {
    if (!text || typeof text !== 'string') return false;
    
    // Clean up the text - remove extra whitespace
    const cleanText = text.trim();
    if (cleanText.length < 10) return false; // Too short to be meaningful PGN
    
    // Look for chess move patterns
    const hasMoveNumbers = /\d+\./.test(cleanText); // Contains move numbers like "1." "2."
    const hasGameResult = /(1-0|0-1|1\/2-1\/2|\*)/.test(cleanText); // Game results
    
    // Enhanced chess move detection
    const hasChessMoves = /[NBRQK]?[a-h]?[1-8]?x?[a-h][1-8](\+|#)?/.test(cleanText); // Piece moves
    const hasPawnMoves = /[a-h][1-8]/.test(cleanText); // Simple pawn moves
    const hasCastling = /(O-O-O|O-O)/.test(cleanText); // Castling notation
    
    // Check for PGN headers (optional but common)
    const hasPgnHeaders = /\[[\w\s]+\s+"[^"]*"\]/.test(cleanText);
    
    // Look for common PGN patterns
    const hasComments = /\{[^}]*\}/.test(cleanText); // Comments in braces
    const hasVariations = /\([^)]*\)/.test(cleanText); // Variations in parentheses
    const hasAnnotations = /[!?]{1,2}/.test(cleanText); // Move annotations
    
    // Score different aspects
    let score = 0;
    
    // Essential PGN elements
    if (hasMoveNumbers) score += 3;
    if (hasGameResult) score += 2;
    if (hasChessMoves || hasPawnMoves) score += 2;
    if (hasCastling) score += 1;
    
    // Additional PGN features
    if (hasPgnHeaders) score += 2;
    if (hasComments) score += 1;
    if (hasVariations) score += 1;
    if (hasAnnotations) score += 1;
    
    // Minimum threshold for PGN detection
    return score >= 4;
}

function parsePgnToPositions(pgnString) {
    try {
        var game = new Chess();
        var positions = [game.fen()]; // Start position
        
        // Clean PGN - remove comments, variations, annotations
        var cleanPgn = pgnString
            .replace(/\{[^}]*\}/g, '') // Remove comments
            .replace(/\([^)]*\)/g, '') // Remove variations
            .replace(/[!?]{1,2}/g, '') // Remove annotations
            .replace(/\d+\./g, '') // Remove move numbers
            .trim();
        
        var moves = cleanPgn.split(/\s+/).filter(move => 
            move && !/(1-0|0-1|1\/2-1\/2|\*)/.test(move)
        );
        
        moves.forEach(move => {
            if (game.move(move)) {
                positions.push(game.fen());
            }
        });
        
        return positions;
    } catch (error) {
        console.error('PGN parsing error:', error);
        return [];
    }
}

// More lenient version - just checks if it looks like FEN-ish
function isFenContentLoose(text) {
    if (!text || typeof text !== 'string') return false;
    
    const cleanText = text.trim();
    if (cleanText.length < 8) return false;
    
    // Split by semicolons for multiple positions
    const positions = cleanText.split(';');
    
    return positions.some(position => {
        const trimmedPos = position.trim();
        if (!trimmedPos) return false;
        
        // Very loose check - just look for FEN-like patterns
        const parts = trimmedPos.split(/\s+/);
        const boardPart = parts[0];
        
        // Must have slashes (indicating ranks)
        if (!boardPart.includes('/')) return false;
        
        // Should have chess piece characters and/or numbers
        if (!/[pnbrqkPNBRQK1-8]/.test(boardPart)) return false;
        
        // Should have 7 slashes (8 ranks)
        const slashCount = (boardPart.match(/\//g) || []).length;
        if (slashCount !== 7) return false;
        
        // If we have additional parts, check for common FEN indicators
        if (parts.length > 1) {
            const restOfFen = parts.slice(1).join(' ');
            // Look for w/b (active color), castling rights, or numbers
            if (/[wb]|[KQkq-]|\d/.test(restOfFen)) return true;
        }
        
        return true; // Just the board position is enough for loose detection
    });
}

var currentGamePositions = []; // Single array for current game positions
var positionCounter = 0; // Single counter for position navigation

function loadPosition(index) {
  if (currentGamePositions.length > 0 && index >= 0 && index < currentGamePositions.length) {
    // Store previous FEN before updating
    var currentFen = document.getElementById('fenReveal').innerHTML;
    if (currentFen && currentFen !== 'FEN' && currentFen !== currentGamePositions[index]) {
      document.getElementById('fenRevealPrevious').innerHTML = currentFen;
    }
    
    // Load new position
    board.position(currentGamePositions[index]);
    document.getElementById('fenReveal').innerHTML = currentGamePositions[index];
    document.getElementById('moveReveal').innerHTML = movesArray[index] || `${index + 1}`;
    console.log(`Position ${index + 1}/${currentGamePositions.length}:`, currentGamePositions[index]);
  }
}

function loadPositionBoardOnly(index) {
  if (currentGamePositions.length > 0 && index >= 0 && index < currentGamePositions.length) {
    // Only update the board, not fenReveal
    board.position(currentGamePositions[index]);
    document.getElementById('moveReveal').innerHTML = movesArray[index] || `${index + 1}`;
    console.log(`Board position ${index + 1}/${currentGamePositions.length}:`, currentGamePositions[index]);
  }
}

function highlightCell(rowNumber) {
  const tableE = document.getElementById('my-table');
  const rows = tableE.getElementsByTagName('tr');

  // Reset background color for all cells
  const allCells = tableE.getElementsByTagName('td');
  for (var j = 0; j < allCells.length; j++) {
    allCells[j].style.backgroundColor = '';
  }

  // Get the specific row and its first cell
  const row = rows[rowNumber - 1]; // Subtract 1 since rowNumber is 1-based
  const cell = row.getElementsByTagName('td')[0];
  const cell3 = row.getElementsByTagName('td')[1];

  // Highlight the specified cell
  cell.style.backgroundColor = 'yellow';

  var cellText = cell.textContent;
  console.log('Clicked on row number:', rowNumber);
  console.log(cellText)
  
  if (cellText.includes(';')) {
    console.log('Semicolon-delimited FEN detected');
    currentGamePositions = cellText.trim().split(';');
    positionCounter = 0;
    console.log('Loaded positions array:', currentGamePositions);
    loadPosition(0);
    
  } else if (isPgnContent(cellText)) {
    console.log('PGN detected');
    currentGamePositions = parsePgnToPositions(cellText);
    positionCounter = 0;
    console.log('Parsed PGN positions array:', currentGamePositions);
    
    // Show the original PGN text in fenReveal, not the FEN positions
    document.getElementById('fenReveal').innerHTML = cellText.toString().trim();
    
    if (currentGamePositions.length > 0) {
      // Load the starting position on the board but keep PGN text in fenReveal
      board.position(currentGamePositions[0]);
      document.getElementById('moveReveal').innerHTML = movesArray[0] || '1';
    } else {
      document.getElementById('fenReveal').innerHTML = 'PGN parsing failed';
    }
    
  } else if (cellText.includes('http://') || cellText.includes('https://') || cellText.includes('www.')) {
    console.log('URL detected - keeping previous positions array');
    // Don't clear currentGamePositions array for URLs, keep them for navigation
    var cellTextTrimmed = cellText.toString().trim();
    var anchorTag = `<a href="${cellTextTrimmed}" target="_blank">${cellTextTrimmed}</a>`;
    document.getElementById('fenReveal').innerHTML = anchorTag;

  } else if (isFenContentLoose(cellText)) {
    console.log('Single FEN position detected');
    currentGamePositions = [cellText.toString().trim()];
    positionCounter = 0;
    console.log('Single position array:', currentGamePositions);
    loadPosition(0);
    
  } else {
    console.log('Text note detected - keeping previous positions array');
    // Don't update currentGamePositions array for text notes
    // Just display the text in fenReveal for now, but keep positions for navigation
    document.getElementById('fenReveal').innerHTML = cellText.toString().trim();
    
    var cellText3 = cell3.textContent;
    if (cellText3) {
      document.getElementById('notesReveal').innerHTML = cellText3.toString().trim();
    }
  }
  
  counter_ = 0; // Reset old counter for compatibility
}


$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    if (currentGamePositions.length > 0) {
      positionCounter = positionCounter === 0 ? currentGamePositions.length - 1 : positionCounter - 1;
      loadPositionBoardOnly(positionCounter);
      console.log('Left arrow keycode - moved to position:', positionCounter + 1);
    } else {
      console.log('No positions loaded to navigate');
    }
  }

  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser

  if(e.keyCode == 39) { // right
    if (currentGamePositions.length > 0) {
      positionCounter = (positionCounter + 1) % currentGamePositions.length;
      loadPositionBoardOnly(positionCounter);
      console.log('Right arrow keycode - moved to position:', positionCounter + 1);
    } else {
      console.log('No positions loaded for navigation');
    }
  }

  if(e.keyCode == 49) { // 1
    console.log('1')
	 if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 0
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[0].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
   if(e.keyCode == 50) { // 1
    console.log('2')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 1
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[1].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 51) { // 1
    console.log('3')
	 if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 2
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[0].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 52) { // 1
    console.log('4')
	 if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 3
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[1].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 53) { // 1
    console.log('5')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 4
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[0].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 54) { // 1
    console.log('6')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 5
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[1].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 55) { // 1
    console.log('7')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 6
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[0].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 56) { // 1
    console.log('8')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 7
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[1].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if(e.keyCode == 57) { // 1
    console.log('9')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 8
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[0].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
    if(e.keyCode == 48) { // 1
    console.log('0')
	if (e.target.tagName === 'INPUT') {
      // If the target is an input field, do nothing and return
      return;
    }
    var table = document.getElementsByTagName('table')[0];
    const day = document.getElementById('table_drop');
    var QO = day.selectedIndex;
    var val = day.options[QO].value;
    var val = parseInt(val)
    var val = val + 9
    var textContent = table.rows[val].cells[0].textContent;
    board.position(table.rows[val].cells[0].textContent.toString().trim())
    document.getElementById('fenReveal').innerHTML = table.rows[val].cells[1].textContent.toString().trim();
    var cells = table.getElementsByTagName('td'); // Get all cells in the table

      // Loop through each cell and reset the background color
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }

    var cell = table.rows[val].cells[0];
    cell.style.backgroundColor = 'yellow';
  }
  if (e.key === ']') {
    console.log(']')
    console.log(']')
    bracket_counter = bracket_counter + 1;
    var maxCount = document.getElementsByTagName('table')[0].rows.length;
  
    if (bracket_counter > maxCount) {
      bracket_counter = 0; // Resets to 0 when it's one more than the length
    }

    console.log('bracket counter: ' + bracket_counter)
    highlightCell(bracket_counter); // Highlights the cell at
    document.getElementById('bracketReveal').innerHTML = bracket_counter


  }
  if (e.key === '[') {
    console.log('[')
    if (bracket_counter > 0) {
      bracket_counter = bracket_counter - 1;
      console.log('bracket counter: ' + bracket_counter)
      highlightCell(bracket_counter); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter


    } else {
      bracket_counter = bracket_counter + 1;
      console.log('bracket counter: ' + bracket_counter)
      highlightCell(bracket_counter); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter


    }
  }

});




var bracketRight = document.getElementById('bracketRight');


bracketRight.addEventListener('click', function() {
  console.log(']')
    bracket_counter = bracket_counter + 1;
    var maxCount = document.getElementsByTagName('table')[0].rows.length;
  
    if (bracket_counter > maxCount) {
      bracket_counter = 0; // Resets to 0 when it's one more than the length
    }

    console.log('bracket counter: ' + bracket_counter)
    highlightCell(bracket_counter); // Highlights the cell at
    document.getElementById('bracketReveal').innerHTML = bracket_counter

});



var bracketLeft = document.getElementById('bracketLeft');

bracketLeft.addEventListener('click', function() {
  if (bracket_counter > 0) {
      bracket_counter = bracket_counter - 1;
      console.log('bracket counter: ' + bracket_counter)
      highlightCell(bracket_counter); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter
    } else {
      bracket_counter = bracket_counter + 1;
      console.log('bracket counter: ' + bracket_counter)
      highlightCell(bracket_counter); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter

    }
});


var rightArrow = document.getElementById('rightArrow');


rightArrow.addEventListener('click', function() {
  if (currentGamePositions.length > 0) {
    positionCounter = (positionCounter + 1) % currentGamePositions.length;
    loadPositionBoardOnly(positionCounter);
    console.log('Right arrow - moved to position:', positionCounter + 1);
  } else {
    console.log('No positions loaded for navigation');
  }
});


var leftArrow = document.getElementById('leftArrow');


leftArrow.addEventListener('click', function() {
  if (currentGamePositions.length > 0) {
    positionCounter = positionCounter === 0 ? currentGamePositions.length - 1 : positionCounter - 1;
    loadPositionBoardOnly(positionCounter);
    console.log('Left arrow - moved to position:', positionCounter + 1);
  } else {
    console.log('No positions loaded to navigate');
  }
});


setTimeout(function() {
  highlightCell(9); // Highlights the cell at index 0 of row number 1
}, 1000);


document.getElementById('my-table').innerHTML = '<tr><td style="border: 1px solid black;">rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1;rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1;rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2;rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2;r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3;r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR b KQkq - 3 3;r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4;r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 4;r2qkbnr/pppb1ppp/2np4/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 2 5;r2qkbnr/pppb1ppp/2np4/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5;r2qkbnr/pppb1ppp/3p4/n3p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 1 6;r2qkbnr/pppb1ppp/3p4/n2Bp3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 2 6;r2qkbnr/pp1b1ppp/2pp4/n2Bp3/4P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 7;r2qkbnr/pp1b1Bpp/2pp4/n3p3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 7;</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">updated table</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r3kbnr/pppbqppp/2np4/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 1 6</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">r3kbnr/pppbqppp/2np4/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 1 6</td><td style="border: 1px solid black;">white to move, queen to e7 is a mistake</td></tr><tr><td style="border: 1px solid black;">r3kbnr/pppbq1pp/2np1p2/3Np1B1/2B1P3/3P1N2/PPP2PPP/R2QK2R b KQkq - 1 7</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black; background-color: yellow;">r3kbnr/pppbq1pp/2np1p2/3Np1B1/2B1P3/3P1N2/PPP2PPP/R2QK2R b KQkq - 1 7</td><td style="border: 1px solid black;">black queen has to go back to d8</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/84644140933?tab=analysis</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/84644140933?tab=analysis</td><td style="border: 1px solid black;">complexity of the hanging knight on the corner!!</td></tr><tr><td style="border: 1px solid black;">rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1;rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1;rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2;rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2;r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3;r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR b KQkq - 3 3;r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4;r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 4;r2qkbnr/pppb1ppp/2np4/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 2 5;r2qkbnr/pppb1ppp/2np4/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5;r3kbnr/pppbqppp/2np4/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 1 6;r3kbnr/pppbqppp/2np4/4p1N1/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 2 6;2kr1bnr/pppbqppp/2np4/4p1N1/2B1P3/2NP4/PPP2PPP/R1BQK2R w KQ - 3 7;2kr1bnr/pppbqNpp/2np4/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQ - 0 7;2kr1bnr/pppbqNpp/2n5/3pp3/2B1P3/2NP4/PPP2PPP/R1BQK2R w KQ - 0 8;2kr1bnr/pppbqNpp/2n5/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R b KQ - 0 8;2kr1b1r/pppbqNpp/2n2n2/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R w KQ - 1 9;2kr1b1N/pppbq1pp/2n2n2/3Bp3/4P3/2NP4/PPP2PPP/R1BQK2R b KQ - 0 9;2kr1b1N/pppbq1pp/2n5/3np3/4P3/2NP4/PPP2PPP/R1BQK2R w KQ - 0 10;2kr1b1N/pppbq1pp/2n5/3Np3/4P3/3P4/PPP2PPP/R1BQK2R b KQ - 0 10;2krqb1N/pppb2pp/2n5/3Np3/4P3/3P4/PPP2PPP/R1BQK2R w KQ - 1 11;2krqb1N/pppb2pp/2n5/3Np1B1/4P3/3P4/PPP2PPP/R2QK2R b KQ - 2 11;2krq2N/pppbb1pp/2n5/3Np1B1/4P3/3P4/PPP2PPP/R2QK2R w KQ - 3 12;2krq2N/pppbN1pp/2n5/4p1B1/4P3/3P4/PPP2PPP/R2QK2R b KQ - 0 12;1k1rq2N/pppbN1pp/2n5/4p1B1/4P3/3P4/PPP2PPP/R2QK2R w KQ - 1 13;1k1rq2N/pppb2pp/2N5/4p1B1/4P3/3P4/PPP2PPP/R2QK2R b KQ - 0 13;1k1rq2N/ppp3pp/2b5/4p1B1/4P3/3P4/PPP2PPP/R2QK2R w KQ - 0 14;1k1Bq2N/ppp3pp/2b5/4p3/4P3/3P4/PPP2PPP/R2QK2R b KQ - 0 14;1k1q3N/ppp3pp/2b5/4p3/4P3/3P4/PPP2PPP/R2QK2R w KQ - 0 15;</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">updated table</td><td style="border: 1px solid black;">updated</td></tr><tr><td style="border: 1px solid black;">2krq2N/pppb2pp/2n5/2bNp1B1/4P3/3P4/PPP2PPP/R2QK2R w KQ - 3 12</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">2krq2N/pppb2pp/2n5/2bNp1B1/4P3/3P4/PPP2PPP/R2QK2R w KQ - 3 12</td><td style="border: 1px solid black;">if white were to take here... that would be a mess unlike taking the bishop</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/84730958199?tab=analysis</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/analysis/game/live/84730958199?tab=analysis</td><td style="border: 1px solid black;">game is so complicated... there were some false moves here and there</td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/game/live/84946339235?username=alansf649</td><td style="border: 1px solid black;"></td></tr><tr><td style="border: 1px solid black;">https://www.chess.com/game/live/84946339235?username=alansf649</td><td style="border: 1px solid black;">https://www.chess.com/game/live/84946339235?username=alansf649</td></tr><tr><td style="border: 1px solid black;">1k4r1/pppr3p/8/3nR3/7P/2PP2n1/PP3b1K/RNBB4 b - - 1 23</td><td style="border: 1px solid black;">x</td></tr><tr><td style="border: 1px solid black;">1k4r1/pppr3p/8/3nR3/7P/2PP2n1/PP3b1K/RNBB4 b - - 1 23</td><td style="border: 1px solid black;">mate in two</td></tr><tr><td style="border: 1px solid black;">1k4r1/pppr3p/8/3nR3/7P/2PP2n1/PP3b1K/RNBB4 b - - 1 23</td><td style="border: 1px solid black;">mate in two</td><td>1.e4 e6 2.Nc3 d5 3.Nf3 Be7 4.d4 c5 5.Bb5+ Nc6 6.Bf4 Nf6 7.e5 Nd7 8.O-O Qb6 9.a4 a6 10.Bd3 Qxb2 11.Ne2 Qb6 12.c3 cxd4 13.Rb1 Qa7 14.cxd4 Bd8 15.Ng5 O-O 16.Bxh7+ Kh8 17.Bd3 Bb6 18.Ng3 Nxd4 19.Qh5+ Kg8 20.Qh7# 1-0</td></tr>'



function handleKeyPress(event) {
	if (event.key === 'Enter') {
    	replaceText();
    }
}

 function replaceText() {
 	var textarea = document.getElementById('myTextArea');
  	var input = document.getElementById('myInput').value;
	console.log(input);
	console.log(textarea.value)
	
    // Replace all occurrences of the input value with a comma
	 if (input === '') {
        return;
    }

	textarea.value = textarea.value.split(input).join(',');
	if (textarea.value.startsWith(',')) {
        // Remove the first character (the comma) by taking the substring from index 1 to the end
        textarea.value = textarea.value.substring(1);
    }
	if (textarea.value.endsWith(',')) {
        textarea.value = textarea.value.slice(0, -1);
    }
	document.getElementById('myInput').value = '';

 }


const clearTextArea = document.getElementById('clearTextArea');

clearTextArea.addEventListener('click', function(event) {
  var textarea = document.getElementById('myTextArea');
  textarea.value = '';
});

const delimitFens = document.getElementById('delimitFens');

delimitFens.addEventListener('click', function(event) {
  var textarea = document.getElementById('myTextArea');
  var content = textarea.value;
  
  // Replace all newlines with semicolons, trim whitespace, and remove empty lines
  var delimited = content.split('\n')
                        .map(line => line.trim())
                        .filter(line => line.length > 0)
                        .join(';');
  
  // Add semicolon at the end if it doesn't already end with one
  if (delimited.length > 0 && !delimited.endsWith(';')) {
    delimited += ';';
  }
  
  textarea.value = delimited;
});

const removeNewlines = document.getElementById('removeNewlines');

removeNewlines.addEventListener('click', function(event) {
  var textarea = document.getElementById('myTextArea');
  var content = textarea.value;
  
  // Remove all newlines and replace with spaces
  var cleaned = content.replace(/\n/g, ' ');
  
  textarea.value = cleaned;
});

const loadChessPgn = document.getElementById('loadChessPgn');

loadChessPgn.addEventListener('click', function(event) {
  var textarea = document.getElementById('myTextArea');
  var content = textarea.value.trim();
  
  if (!content) {
    alert('Please paste PGN content in the textarea first');
    return;
  }
  
  // Use the same logic as bracket navigation to load PGN
  if (isPgnContent(content)) {
    console.log('PGN detected in textarea');
    currentGamePositions = parsePgnToPositions(content);
    positionCounter = 0;
    console.log('Parsed PGN positions array:', currentGamePositions);
    
    // Add row to my-table
    var table = document.getElementById('my-table');
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    
    cell1.style.border = '1px solid black';
    cell2.style.border = '1px solid black';
    cell1.textContent = content;
    cell2.textContent = 'loaded_with_button';
    
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
    
    // Show the original PGN text in fenReveal
    document.getElementById('fenReveal').innerHTML = content;
    
    if (currentGamePositions.length > 0) {
      // Load the starting position on the board
      board.position(currentGamePositions[0]);
      document.getElementById('moveReveal').innerHTML = movesArray[0] || '1';
      console.log('Loaded PGN with', currentGamePositions.length, 'positions');
    } else {
      document.getElementById('fenReveal').innerHTML = 'PGN parsing failed';
      alert('Failed to parse PGN content');
    }
  } else {
    alert('Content does not appear to be valid PGN format');
  }
});

const loadFenPositions = document.getElementById('loadFenPositions');

loadFenPositions.addEventListener('click', function(event) {
  var textarea = document.getElementById('myTextArea');
  var content = textarea.value.trim();
  
  if (!content) {
    alert('Please paste FEN positions in the textarea first');
    return;
  }
  
  // Check if content contains semicolons
  var processedContent = content;
  if (!content.includes(';')) {
    // If no semicolons, apply the same delimiter logic as delimitFens
    processedContent = content.split('\n')
                            .map(line => line.trim())
                            .filter(line => line.length > 0)
                            .join(';');
  }
  
  // Split by both newlines and semicolons, then filter out empty entries
  var positions = processedContent.split(/[\n;]/).filter(pos => pos.trim() !== '').map(pos => pos.trim());
  
  if (positions.length > 0) {
    console.log('Loading FEN positions from textarea');
    currentGamePositions = positions;
    positionCounter = 0;
    console.log('Loaded positions array:', currentGamePositions);
    
    // Add row to my-table
    var table = document.getElementById('my-table');
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    
    cell1.style.border = '1px solid black';
    cell2.style.border = '1px solid black';
    cell1.textContent = content;
    cell2.textContent = 'loaded_with_button';
    
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
    
    // Load the first position
    loadPosition(0);
    console.log('Loaded', positions.length, 'positions for arrow key navigation');
  } else {
    alert('No positions found in textarea');
  }
});

const addText = document.getElementById('addText');

addText.addEventListener('click', function(event) {
  var textarea = document.getElementById('myTextArea');
  var content = textarea.value.trim();
  
  if (!content) {
    alert('Please enter text in the textarea first');
    return;
  }
  
  console.log('Adding text to my-table');
  
  // Add row to my-table
  var table = document.getElementById('my-table');
  var row = document.createElement('tr');
  var cell1 = document.createElement('td');
  var cell2 = document.createElement('td');
  
  cell1.style.border = '1px solid black';
  cell2.style.border = '1px solid black';
  cell1.textContent = content;
  cell2.textContent = 'loaded_with_button';
  
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
  
  console.log('Text added to table successfully');
});

const exportTableCsv = document.getElementById('exportTableCsv');

exportTableCsv.addEventListener('click', function(event) {
  console.log('Exporting my-table as CSV');
  
  var table = document.getElementById('my-table');
  var rows = table.getElementsByTagName('tr');
  
  if (rows.length === 0) {
    alert('No data to export!');
    return;
  }
  
  // Extract table data into array format
  var tableData = [];
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');
    var rowData = [];
    for (var j = 0; j < cells.length; j++) {
      rowData.push(cells[j].textContent);
    }
    tableData.push(rowData);
  }
  
  // Convert to CSV format
  var csvContent = tableData.map(row => row.join(',')).join('\n');
  
  // Create blob and download
  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement('a');
  
  if (navigator.msSaveBlob) {
    // Internet Explorer support
    navigator.msSaveBlob(blob, 'chess_table_export.csv');
  } else {
    // Modern browsers
    link.href = URL.createObjectURL(blob);
    link.download = 'chess_table_export.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  console.log('CSV export completed');
});


// Select all the square elements by their common class name
var squares = document.querySelectorAll('.square-55d63');

// Loop through the squares and add a click event listener to each one
squares.forEach(function(square) {
  square.addEventListener('click', function(event) {
    // Get the ID of the clicked square
    var squareId = event.currentTarget.id;

    // Get the data-square attribute of the clicked square
    var squareName = event.currentTarget.getAttribute('data-square');

    // You can now use squareId and squareName in your logic
    console.log('Square ' + squareName + ' (ID: ' + squareId + ') was clicked!');
	  
    var textarea = document.getElementById('myTextArea');

    // Update the value of the textarea with the target square where the piece was dropped
    textarea.value += squareName + ",";
  });
});


var convertTextAreaFrColumns = document.getElementById('convertTextAreaFrColumns');
convertTextAreaFrColumns.addEventListener('click', function() {
  console.log('convert text area clicked');
  bracket_counter = 0;
  var textarea = document.querySelector("#myTextArea2");
  var arr = textarea.value.trim();

  // Clear the existing table
  document.getElementById('my-table2').innerHTML = '';

  // Get the table element
  var table = document.getElementById('my-table2');

  // Split the input string into rows
  var rows = arr.split('\n');

  // Iterate over each row
  for (var i = 0; i < rows.length; i++) {
    // Split the row into cells based on both '\n' and '\t'
    var cells = rows[i].split(/\n|\t/);

    // Create a new row
    var row = document.createElement('tr');

    // Iterate over each cell in the row
    for (var j = 0; j < cells.length; j++) {
      // Create a new cell
      var cell = document.createElement('td');

      // Set the cell content to the current cell string
      cell.textContent = cells[j];
      cell.style.border = '1px solid black';

      // Append the cell to the row
      row.appendChild(cell);
    }

    // Append the row to the table
    table.appendChild(row);
  }
  console.log("'" + document.getElementById('my-table2').innerHTML + "'");
  //var myVariable = "'" + document.getElementById('my-table2').innerHTML + "'";

});