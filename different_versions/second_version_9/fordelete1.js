
const htmlEl = document.getElementsByTagName("html")[0];

const toggleTheme = (theme) => {
  htmlEl.dataset.theme = theme;
};

function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
  console.log(theme);
  console.log(`theme-${theme}`);
}

// document.addEventListener("DOMContentLoaded", () => {
//   const savedTheme = localStorage.getItem("theme") || "auto";

//   applyTheme(savedTheme);

//   for (const optionElement of document.querySelectorAll("#selTheme option")) {
//     optionElement.selected = savedTheme === optionElement.value;
//   }

//   document.querySelector("#selTheme").addEventListener("change", function () {
//     localStorage.setItem("theme", this.value);
//     applyTheme(this.value);
//   });
// });

var today = new Date();
var hour_now = today.getHours();

var theme = document.getElementById("selTheme");

document.body.style.backgroundColor = "#ffffff";

const pieces = {
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟"
};

// Call addRow() with the table's ID
//addRow('my-table');
counter_ = 0;

var counter_ = 0;

var regExp = /[a-zA-Z]/g;

textareaSplit = new Array();


function onDrop(source, target, piece, newPos, oldPos, orientation) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + Chessboard.objToFen(newPos));
  console.log("Old position: " + Chessboard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  document.getElementById("fenposition_1").innerHTML = Chessboard.objToFen(
    newPos
  );
}

var config = {
  //Spanish Opening
  position: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R",
  pieceTheme:
    "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
  draggable: true,
  dropOffBoard: "snapback",
  onDrop: onDrop
};

var board = Chessboard("myBoard", config);

var regex = /^[0-9]+$/;


var array_of_moves = ["a1-a2", "b1-b2"];


// if you want escape .. you need to do something else
// if you want escape .. you need to do something else


//require to get the switch



//require to get the switch


//require to get the switch



current_move_counter = 0;
new_array = [0, 0];

current_fen = "rr";

another_counter = 0

up_position = 0 





  
  


selection_var = 0;

move_board_counter_ = 0;

matching_letters = {
  '1a': 1,
  '4a': 7,
  '8a': 15, 
  '12a': 23, 
  '16a': 31, 
  '20a': 39,
  '24a': 47
  
}


number_and_counter = {1:'1a', 2:'1b', 3:'2a', 4:'2b', 5:'3a', 6:'3b', 7:'4a', 8:'4b', 9:'5a', 10:'5b',
11:'6a', 12:'6b', 13:'7a', 14:'7b', 15:'8a', 16:'8b', 17: '9a', 18: '9b', 19: '10a', 20: '10b', 21: '11a', 
22:'11b', 23:'12a', 24:'12b', 25:'13a', 26:'13b', 27:'14a', 28:'14b', 29:'15a', 30:'15b', 31:'16a', 32:'16b',
33: '17a', 34: '17b', 35:'18a', 36:'18b', 37:'19a', 38:'19b', 39:'20a', 40:'20b', 41:'21a', 42:'21b', 43:'22a',
44:'22b', 45:'23a', 46:'23b', 47:'24a', 48:'24b', 49:'25a', 50:'25b', 51:'26a', 52:'26b', 53:'27a', 54:'27b', 
55:'28a', 56:'28b', 57:'29a', 58:'29b', 59:'30a', 60:'30b', 61:'31a', 62:'31b', 63:'32a', 64:'32b', 65:'33a', 
66: '33b', 67:'34a', 68:'34b', 69:'35a', 70:'35b', 71:'36a', 72:'36b', 73:'37a', 74:'37b', 75:'38a', 76:'38b',
77:'39a', 78:'39b', 79:'40a', 80:'40b',

}




  



text_val = 1;
number_val = parseInt(text_val);
number_val_comp = number_val - 1;


//getSelectedText_to_enterMoves


// progression
// counter 
//5 
progression_counter = 26
// if you want 27 on the list you need to subtract by 1 to get 26.





fen_list_retrieve = {
  'r3kbnr/ppp1q1pp/2np4/4p3/2B1P1b1/2P2N2/PP1N1PPP/R1BQK2R' : 'c4-g8,h8-g8,d1-b3,',
  '2kr1bnr/1pp3pp/3pq3/n3p1N1/P3P3/2P4P/3N1PP1/R1BQK2R' : 'e6-f6,d2-b3,a5-c6,a4-a5,h7-h6,g5-f3,g7-g5,a5-a6,b7-b6,c1-e3,c8-b8,b3-d2,f6-e6,d1-a4,d6-d5,e4-d5,d8-d5,a4-b3,', 
  'rnb2rk1/ppppq1pp/1b6/5p2/3PP3/2N2N1P/PPP2KP1/R1BQ1B1R': 'c3-d5,e7-e8,f1-c4,g8-h8,e4-f5,d7-d6,g2-g4,',
  'r1b2rk1/ppp1q1pp/1bn5/4Bp2/3P4/2N2N1P/PPP2KP1/R2Q1B1R': 'c3-d5,e7-f7,d5-b6,a7-b6,f1-d3,',
  'r1b2rk1/ppp4p/1b6/5p2/1q1n2p1/2NB2BP/PPP2KPN/R2QR3': 'f2-f1,c8-e6,a2-a3,b4-c5,c3-a4,c5-c6,e1-e6,d4-e6,a4-b6,a7-b6,f2-f1,c8-e6,a2-a3,b4-b4,b4-b4,b4-b4,b4-c5,c3-a4,c5-c6,e1-e1,e1-e6,d4-e6,a4-b6,g4-h3,a7-b6,d1-f3,b6-b5,f3-c6,b7-c6,h2-f3,g3-g3,g3-c7,e6-c5,f8-c8,c7-e5,c5-d3,c2-d3,c6-c5,f1-f2,g8-f7,g2-h3,a1-g1,',
  'rnQb1k1r/pp3ppp/8/3N4/3q1B2/8/PPP2KPP/4RB1R': 'f4-e3,d4-d5,e3-c5,f8-g8,e1-e1,e1-e1,e1-e8,',
  '2kr1b1r/ppp2ppp/2n5/8/3PqBb1/2P2N2/PP2B1PP/R2QK2R': 'd8-d4',
  'r1nqk2r/ppp1bp2/3p2p1/6Bp/3P4/5N2/PPP3PP/R2QR1K1': 'g5-f6,h8-f8,d1-d3,',
  'r1nq1r2/pppkbp2/3p1Bp1/7p/3P4/3Q1N2/PPP3PP/R3R1K1': 'd3-b5,c7-c6,b5-b7,',
  'r1nqkr2/ppp1bp2/3p1Bp1/7p/3P4/3Q1N2/PPP3PP/R3R1K1': 'e1-e7,c8-e7,a1-e1,',
  'r3k2r/p1pn1ppp/1p6/3Pp2N/4p3/P1q4P/2P2PP1/R2Q1RK1': 'g7-g6,h5-g3,f7-f5,d1-e1,c3-e1,f1-e1,a7-a6,g3-e2,e8-c8,a8-d8,a1-b1,h7-h5,a3-a4,h5-h4,e1-d1,g6-g5,d5-d6,c7-c6,e2-c3,h8-h6,f2-f3,e4-f3,g2-f3,d8-f8,d1-d2,f8-f6,b1-d1,b6-b5,a4-b5,a6-b5,c3-a2,c8-b7,a2-c1,b7-b6,c1-d3,e5-e4,f3-e4,f5-e4,d3-e1,f6-f5,d2-f2,h6-f6,f2-f5,f6-f5,d1-d4,f5-e5,g1-f1,c6-c5,d4-d1,e5-e6,f1-e2,b6-c6,e1-g2,e6-d6,d1-a1,d7-e5,a1-a6,c6-d5,g2-e3,d5-e6,a6-a5,e5-f3,',
  '2rr2k1/2p4p/1p4p1/p2Pqp2/P1Q1p3/1R5P/2P2PP1/3R2K1': 'g8-g7,b3-b5,g7-h6,c4-e2,d8-d6,c2-c4,c8-d8,e2-e3,f5-f4,e3-d4,e5-f5,',
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR': 'a2-a3',
  '7k/1b4pp/p3B3/1pp5/8/7P/PBP3r1/Q4N1K': 'g2-c2, h1-g1, c2-g2, g1-h1, g2-b2, h1-g1, b2-g2, g1-h1, g2-a2, h1-g1, a2-a2, a2-a1,',
  'k1n5/p2R2b1/2p2qpp/4rp2/2P5/1P2Q1P1/P4PBP/6K1': ' e3-e5, f6-e5, g2-c6, a8-b8, d7-b7, b8-a8, b7-b5,',
  'r3kb1r/ppp2p1p/2n3p1/3qpb2/8/1P3N2/PBPPQPPP/R3KB1R': 'f3-e5, c6-e5, b2-e5, e5-c7, e8-d7',
  '3rkb1r/ppp2p1p/6p1/q3p3/1nP5/P4N2/1BbPQPPP/3RKB1R': 'f3-f3, e2-e5, a5-e5, b2-e5, c2-d1, e1-d1, h8-g8, a3-b4, f8-b4, e5-c7, d8-d7, c7-f4, b4-c5, f4-e3, c5-e3, f2-e3, e8-e7, f3-d4,',
  '3rkb1r/ppp2p1p/2n3p1/q3pb2/2P5/PP3N2/1B1PQPPP/3RKB1R': 'f7-f6,b3-b4,f8-b4,f3-e5,f6-e5,a3-b4,a5-b4,', 
  'r3kb1r/1p2q3/p3p1b1/2pp1ppp/3P4/2P1PQBP/PP1N1PP1/R5KR' : 'e1-e1',
  
  'r3kb1r/1p2q3/p3ppb1/2pp2pp/3P4/2P1PQBP/PP1N1PP1/R5KR'  : 'e1-e1', 
  
  'r3kb1r/1p2q3/p3ppb1/2pp2pp/3P4/2P1PQB1/PP1N1PPP/R5KR' : 'h2-h4, g5-g4, f3-d1,',
  'rnb1k2r/ppppqppp/5n2/2b1N3/4P3/2N5/PPPP1PPP/R1BQKB1R' : 'd2-d4,c5-b4,f1-d3,c7-c5,e1-g1,h1-f1,c5-d4,c3-b5,e7-e5,f2-f4,e5-e7,b5-c7,e8-f8,c7-a8,f6-e4,a8-c7,e4-f6,d1-f3,b8-c6,a2-a3,b4-d6,c7-d5,e7-e6,d5-f6,e6-f6,c1-d2,',
  'r1b2rk1/ppp1q1pp/1bn5/4Bp2/3P4/2N2N1P/PPP2KP1/R2Q1B1R' : 'f1-c4,g8-h8,c3-d5,e7-d8,c2-c3,f5-f4,d5-b6,a7-b6,',
  'r1b2rk1/ppp1q2p/1bn5/4Bp2/3P2p1/2NB1N1P/PPP2KP1/R2QR3' : 'c3-d5,e7-d8,d5-b6,c6-e5,b6-a8,e5-g6,d3-c4,g8-g7,f3-e5,g4-h3,c2-c3,b7-b5,c4-b5,f5-f4,e5-g6,h7-g6,d1-e2,d8-h4,f2-g1,c8-b7,e2-e7,h4-e7,e1-e7,g7-f6,a1-e1,b7-a8,e1-e6,f6-g5,g2-h3,',
  'r3kb1r/1p2q1p1/p1b2n1p/2ppN1BQ/3P4/8/PP3PPP/RN2K2R' : 'f6-h5,g5-e7,f8-e7,d4-c5,e7-c5,',
  'r2kbb1r/1p2q3/p4pNp/2pp3Q/3P4/8/PP3PPP/RN4KR' : 'e7-e4',
  'r1bqkbnr/pp1n1ppp/2p1p3/3p4/2PP2P1/1Q6/PP2PPBP/RNB1K1NR': 'd7-b6,c4-c5,b6-d7,e6-e6,g1-f3,e6-e5,',
}

//7

fen_list_comments  = {
  'r1bqkbnr/pp1n1ppp/2p5/2Ppp3/3P2P1/1Q3N2/PP2PPBP/RNB1K2R' : 'push the middle because got #s',
  'r3kbnr/ppp1q1pp/2np4/4p3/2B1P1b1/2P2N2/PP1N1PPP/R1BQK2R' : 'the queen will have a triple attack',
}

fen_list_retrieve_list = []

for (const [key,value] of Object.entries(fen_list_retrieve)) {
    fen_list_retrieve_list.push(key)    
}




entered_fen  = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'




  var config = {
    //Spanish Opening
    position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);









var element = document.getElementById("gotoHome"); //grab the element
element.onclick = function() { //
  console.log(window.scrollY)
  window.scrollTo(0,0)

  //window.scrollTo(0,0)

}



fetch('https://raw.githubusercontent.com/firedynasty/learning_chess/main/chess_positions.csv')
  .then(response => response.text())
  .then(data => {
    // Use Papa Parse to parse the CSV data
    const csv = Papa.parse(data);
    // Get the rows from the parsed data
    const rows = csv.data;

    // Get the table by its ID
    const table = document.getElementById("my-table");
    table.style.borderCollapse = 'collapse';

    // Loop through the rows of the CSV data
    for (const row of rows) {
      // Create a new table row
      const tr = document.createElement('tr');

      // Loop through the cells of the row
      for (const cell of row) {
        // Create a new table cell
        const td = document.createElement('td');
        td.innerText = cell;
        td.style.border = '1px dotted black';
        tr.appendChild(td);
      }

      // Append the row to the table
      table.appendChild(tr);
    }
  })
  .catch(error => console.error(error));


var element = document.getElementById("enter_"); //grab the element
element.onclick = function() { //asign a function
  console.log('hello world')
  var p1 = document.getElementById("adding_info");
  p1.innerHTML = ''
    
  console.log($("#text_chess").val())

  var first_var = parseInt($("#text_chess").val())
  var rowCount = document.getElementById('my-table').rows.length - 1 
  if(first_var>rowCount){
    first_var = 1
  }
  counter_ = parseInt($("#text_chess").val())
            
/*
            var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 1, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        console.log(cell.textContent.trim())
        }

*/
  if(regExp.test($("#text_chess").val())){
    //regExp sees if what is entered is a number
    //in this case if there are letters, ie the FEN
    var table1 = document.getElementsByTagName('table')[2];
    var for_entry_to_fentohtml_3 = '';
    for (var i = 1, row; row = table1.rows[i]; i++) {
      var cell = row.cells[1];
      var cell_0 = row.cells[0]
      if (cell.textContent.includes($("#text_chess").val())) {
        console.log("Match found in row " + (i + 1));
        p1.innerHTML += "Match found in row: " + (i + 1) + ", "
        for_entry_to_fentohtml_3 = cell.textContent
        first_var = cell_0.textContent
      }
    }
    var config = {
    //Spanish Opening
      position: for_entry_to_fentohtml_3,
      pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
      draggable: true,
      dropOffBoard: "snapback",
      onDrop: onDrop
    };

    board = Chessboard("myBoard", config);
    document.getElementById('text_chess').value = ''
    console.log('first_if')
    console.log($("#text_chess").val())
    document.getElementById('fenposition_1').innerHTML = table1.rows[first_var].cells[1].textContent
    document.getElementById('front').innerHTML = first_var

    } else {
      var table1 = document.getElementsByTagName('table')[2];
      console.log('first_var')
      console.log(first_var)
      var second_var = table1.rows[first_var].cells[1].textContent
      navigator.clipboard.writeText(table1.rows[first_var].cells[3].textContent)
      .then(() => {
      console.log('Text copied to clipboard');
      })
     .catch(err => {
      console.error('Error copying text: ', err);
      });
      console.log(second_var)
      console.log('second else, print second_var')
      console.log(second_var)
      var config = {
    //Spanish Opening
        position: second_var,
        pieceTheme:
          "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: "snapback",
        onDrop: onDrop
      };
      board = Chessboard("myBoard", config);
      document.getElementById('fenposition_1').innerHTML = second_var
      document.getElementById('back').innerHTML = 'click to reveal'
      document.getElementById('text_chess').value = ''
      document.getElementById("text_chess").focus();
      document.getElementById('front').innerHTML = first_var
      }

      return false;    //<---- Add this line
         //<---- Add this line  
    }



$('#text_chess').keypress(function (e) {
  if (e.which == 13) {
    var p1 = document.getElementById("adding_info");
    p1.innerHTML = ''
    
    console.log($("#text_chess").val())

    var first_var = parseInt($("#text_chess").val())
    var rowCount = document.getElementById('my-table').rows.length - 1 
    if(first_var>rowCount){
      first_var = 1
    }
    counter_ = parseInt($("#text_chess").val())
            
/*
 in summary, this code checks if the value of the element with an ID of "text_chess" is 
 greater than the number of rows in the table with an ID of "my-table". 
 If it is, the value of first_var is set to 1.
*/
    if(regExp.test($("#text_chess").val())){
      //regExp sees if what is entered is a number
      //in this case if there are letters, ie the FEN

      var table1 = document.getElementsByTagName('table')[2];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 1, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        var cell_0 = row.cells[0]
        if (cell.textContent.includes($("#text_chess").val())) {
            console.log("Match found in row " + (i + 1));
            p1.innerHTML += "Match found in row: " + (i + 1) + ", "
            for_entry_to_fentohtml_3 = cell.textContent
            first_var = cell_0.textContent
        }
    }
    var config = {
    //Spanish Opening
      position: for_entry_to_fentohtml_3,
      pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
      draggable: true,
      dropOffBoard: "snapback",
      onDrop: onDrop
    };

    board = Chessboard("myBoard", config);
      document.getElementById('text_chess').value = ''
      console.log('first_if')
      console.log($("#text_chess").val())
      document.getElementById('fenposition_1').innerHTML = table1.rows[first_var].cells[1].textContent
      document.getElementById('front').innerHTML = first_var

    } else {
      //if you have entered a number

      var table1 = document.getElementsByTagName('table')[2];
      console.log('first_var')
      console.log(first_var)
      var second_var = table1.rows[first_var].cells[1].textContent
      //use the clipbord API to copy table1.rows[first_var].cells[3].textContent to the clipboard
      navigator.clipboard.writeText(table1.rows[first_var].cells[3].textContent)
        .then(() => {
        console.log('Text copied to clipboard');
        })
       .catch(err => {
        console.error('Error copying text: ', err);
      });

      console.log(second_var)
      console.log('second else, print second_var')
      console.log(second_var)
      var config = {
    //Spanish Opening
        position: second_var,
        pieceTheme:
          "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: "snapback",
        onDrop: onDrop
      };
      board = Chessboard("myBoard", config);


      document.getElementById('fenposition_1').innerHTML = second_var
      document.getElementById('back').innerHTML = 'click to reveal'
      document.getElementById('text_chess').value = ''
      document.getElementById("text_chess").focus();
      document.getElementById('front').innerHTML = first_var

      }

      return false;    //<---- Add this line
      
      }});



var element = document.getElementById("back"); //grab the element
element.onclick = function() { //asign a function
  var table1 = document.getElementsByTagName('table')[2];
  //grab the innerHTML of ID front
  var first_var = parseInt(document.getElementById('front').innerHTML)
  //write an if else first_var is NaN
  if (isNaN(first_var)) {
    console.log('not a number')
  } else {
    var second_var_3 = table1.rows[first_var].cells[2].textContent
    document.getElementById('back').innerHTML = second_var_3
  
  }


}

var choice_by_ten_catch = document.getElementById("choice_by_ten");
choice_by_ten_catch.addEventListener("change", function () {
  console.log('hello world')
  console.log(parseInt($('#choice_by_ten').val()));
  text_input_val = parseInt($("#text_chess").val())
  dropdown_choice = parseInt($('#choice_by_ten').val())
  if(isNaN(text_input_val)) {
    console.log('NaN')
    console.log(parseInt($("#choice_by_ten").val()))
    //if the dropdown is not the dropdown dont do anything
    //else dont do something
    if(isNaN(dropdown_choice)) {
      console.log('dropdown is NaN')
    }else{
      $("#text_chess").val(parseInt($('#choice_by_ten').val()))
    }
  }else {
    if(isNaN(dropdown_choice)) {
      console.log('dropdown is NaN')
    }else{
      new_value = text_input_val + parseInt($('#choice_by_ten').val())
      $("#text_chess").val(new_value)
    }

  }
});


var choice_by_one_catch = document.getElementById("choice_by_one");
choice_by_one_catch.addEventListener("change", function () {
  console.log('hello world')
  console.log(parseInt($('#choice_by_one').val()));
  text_input_val = parseInt($("#text_chess").val())
  dropdown_choice = parseInt($('#choice_by_one').val())
  if(isNaN(text_input_val)) {
    console.log('NaN')
    console.log(parseInt($("#choice_by_one").val()))
    //if the dropdown is not the dropdown dont do anything
    //else dont do something
    if(isNaN(dropdown_choice)) {
      console.log('dropdown is NaN')
    }else{
      $("#text_chess").val(parseInt($('#choice_by_one').val()))
    }
  }else {
    if(isNaN(dropdown_choice)) {
      console.log('dropdown is NaN')
    }else{
      new_value = text_input_val + parseInt($('#choice_by_one').val())
      $("#text_chess").val(new_value)
    }

  }
});

var element = document.getElementById("flip_board_2"); //grab the element
element.onclick = function () {
  //asign a function
  console.log("flip board");
  board.flip();
};




  //create a function whenever click on id load_puzzle
  var element = document.getElementById("load_puzzles"); //grab the element
  element.onclick = function() { 
  
      //set the id my-table innerhtml to ''
      document.getElementById("my-table").innerHTML = '';
  
      fetch('https://raw.githubusercontent.com/firedynasty/learning_chess/main/chess_puzzles.csv')
      .then(response => response.text())
      .then(data => {
        // Use Papa Parse to parse the CSV data
        const csv = Papa.parse(data);
        // Get the rows from the parsed data
        const rows = csv.data;
    
        // Get the table by its ID
        const table = document.getElementById("my-table");
        table.style.borderCollapse = 'collapse';
    
        // Loop through the rows of the CSV data
        for (const row of rows) {
          // Create a new table row
          const tr = document.createElement('tr');
    
          // Loop through the cells of the row
          for (const cell of row) {
            // Create a new table cell
            const td = document.createElement('td');
            td.innerText = cell;
            td.style.border = '1px dotted black';
            tr.appendChild(td);
          }
    
          // Append the row to the table
          table.appendChild(tr);
        }
      })
      .catch(error => console.error(error));
  
  }
  
  //recreate the previous function with id load_positions
  var element = document.getElementById("load_positions"); //
  element.onclick = function() { //
      //set the id my-table innerhtml to ''
      document.getElementById("my-table").innerHTML = '';
      
      fetch('https://raw.githubusercontent.com/firedynasty/learning_chess/main/chess_positions.csv')
      .then(response => response.text())
      .then(data => {
        // Use Papa Parse to parse the CSV data
        const csv = Papa.parse(data);
        // Get the rows from the parsed data
        const rows = csv.data;
    
        // Get the table by its ID
        const table = document.getElementById("my-table");
        table.style.borderCollapse = 'collapse';
    
        // Loop through the rows of the CSV data
        for (const row of rows) {
          // Create a new table row
          const tr = document.createElement('tr');
    
          // Loop through the cells of the row
          for (const cell of row) {
            // Create a new table cell
            const td = document.createElement('td');
            td.innerText = cell;
            td.style.border = '1px dotted black';
            tr.appendChild(td);
          }
    
          // Append the row to the table
          table.appendChild(tr);
        }
      })
      .catch(error => console.error(error));
  
  }
  

    //recreate the previous function with id front
var element = document.getElementById("front"); //
element.onclick = function() { //
      
      //set that to a integer
      var first_var = parseInt(document.getElementById('front').innerHTML)
      
      // create if else first_var is a NaN
      if(isNaN(first_var)) {
        //set the innerHTML of ID front to 1
        document.getElementById('front').innerHTML = 1
        var first_var = 1
        var table1 = document.getElementsByTagName('table')[2];
        console.log('first_var')
        console.log(first_var)
        var second_var = table1.rows[1].cells[1].textContent
        navigator.clipboard.writeText(table1.rows[1].cells[3].textContent)
        .then(() => {
        console.log('Text copied to clipboard');
        })
       .catch(err => {
        console.error('Error copying text: ', err);
        });
        var config = {
          //Spanish Opening
              position: second_var,
              pieceTheme:
                "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
              draggable: true,
              dropOffBoard: "snapback",
              onDrop: onDrop
            };
        board = Chessboard("myBoard", config);
        document.getElementById('fenposition_1').innerHTML = second_var
      document.getElementById('back').innerHTML = 'click to reveal'
      document.getElementById('text_chess').value = ''
      document.getElementById("text_chess").focus();

      }else {
        //increment first_var by 1
        first_var = first_var + 1
        //set the innerHTML of ID front to first_var
        document.getElementById('front').innerHTML = first_var
        var table1 = document.getElementsByTagName('table')[2];
        console.log('first_var')
        console.log(first_var)
        var second_var = table1.rows[first_var].cells[1].textContent
        navigator.clipboard.writeText(table1.rows[first_var].cells[3].textContent)
        .then(() => {
        console.log('Text copied to clipboard');
        })
       .catch(err => {
        console.error('Error copying text: ', err);
      });
        var config = {
        //Spanish Opening
            position: second_var,
            pieceTheme:
              "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
            draggable: true,
            dropOffBoard: "snapback",
            onDrop: onDrop
          };
          board = Chessboard("myBoard", config);
    
    
          document.getElementById('fenposition_1').innerHTML = second_var
          document.getElementById('back').innerHTML = 'click to reveal'
          document.getElementById('text_chess').value = ''
          document.getElementById("text_chess").focus();
          document.getElementById('front').innerHTML = first_var
      }


    }

