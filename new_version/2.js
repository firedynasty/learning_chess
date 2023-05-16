var board = Chessboard('myBoard', {
    draggable: true,
    dropOffBoard: 'snapback',
    position: 'start',
  });
  
  var dict_1 = {
    0: "https://ucc4b8ff1028d034abc285c1b292.dl.dropboxusercontent.com/cd/0/inline/B3IqEWjb0DM8KxOFLJE3pgXEzDmVt0XoOz9B3CXliioRsRKPc231YB7f7l3b5fkGKgw0wzjLfYWoN5OiK5DgYeBW-qNWqnI13dy1ra8RWtHlccjTU-js2CfSd6s4S9O3ulrl03u2APeojLY1s2dvR8-kQRXUcBc7GQk195_qLqoHJQ/file#",
    1: "https://ucfbb1877fdbd7f8fff6006a8a1f.dl.dropboxusercontent.com/cd/0/inline/B3K-UClQx2yg3DYyYxHQjase-dHKSyoADg7FsfFItQTYyB8ZXw-JqLaOJa-u-1-BNIyHR4IN8jPbmLfzzX53ylmypnYaCCvchOl6bTtmGKu86aHH58oHFJi0pmhUJR3RiIzBDwm6LWsVEqDvMVceLD2lPmy4RcznUru1m-GAHBbOnA/file#"
  };
  
  
  
  
  
  fetch('https://uc699d6b996d1807cb33a604ff6c.dl.dropboxusercontent.com/cd/0/inline/B3LgaUhfb21PbciPj5gUJwWrf3e3anjAZ7KUXDDx33a3TeiGY9aEGpozEjCSl4vlMNd6rSD-M03NpQMIPfAFM43Dcxfvfjy8zevPeQ_p4Fts8ndqu_dkjMmQrjgrASaUT66h6mnr0WfrjhjR4vuI4IkLr4YMP6zedZF_sjYSnNuKUQ/file#')  
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
  
  
  function check_fen_position() {
    setTimeout(function() {
      var lastWord = document.getElementById("fenposition_1").innerHTML.split(" ").pop();
      if (/\bblack\b/.test(lastWord)) {
        if (board.orientation() === 'white') {
          board.flip();
        }
      } else if (/\bwhite\b/.test(lastWord)) {
        if (board.orientation() === 'black') {
          board.flip();
        }
      }
    }, 1000);
  }
  
  
  
     // create a javascript function called "repopulate_table_drop"
     function repopulate_table_drop() {
        // Get the table and the dropdown menu
      
        var table = document.getElementById("my-table");
        var dropdown = document.getElementById("table_drop");
      
        // Clear existing options from the dropdown menu
        dropdown.innerHTML = "";
      
        console.log(table.rows.length)
        // Loop through the rows of the table and add options to the dropdown menu
        for (var i = 0; i < table.rows.length; i++) {
          // Create a new option element
          var option = document.createElement("option");
        
          // Set the value of the option to the index times 10
          option.value = i;
        
          // Set the text of the option to the index plus a period
          option.text = i + ".";
        
          // Add the option to the dropdown menu
          dropdown.add(option);
          }
      
      }
      
      setTimeout(repopulate_table_drop, 2000);
  
      var table_drop_choice = document.getElementById("table_drop");
      table_drop_choice.addEventListener("change", function () {
        console.log('hello world')
        first_var = parseInt($('#table_drop').val())
        var table1 = document.getElementsByTagName('table')[0];
        var second_var = table1.rows[first_var].cells[1].textContent
        document.getElementById('fenposition_1').innerHTML = second_var
      
      
      
             if(table1.rows[first_var].cells[3].textContent.includes('https')){
               console.log('yes')
               var link = document.createElement("a");
               link.href = table1.rows[first_var].cells[3].textContent
               link.textContent = table1.rows[first_var].cells[3].textContent
               //add target="_blank" to the link element
               link.setAttribute("target", "_blank");
               // Append the link element to li3
               //change the ID front to link with innerHTML
               document.getElementById("site_or_clipboard").innerHTML = ''
               //append link to ID site_or_clipboard
               document.getElementById("site_or_clipboard").appendChild(link);
               } else {
               console.log('no')
               //change innerHTML of id "site_or_clipboard"
               document.getElementById('site_or_clipboard').innerHTML = 'Pgn copied to clipboard!'
               navigator.clipboard.writeText(table1.rows[first_var].cells[3].textContent)
               .then(() => {
               console.log('Text copied to clipboard');
               })
               .catch(err => {
               console.error('Error copying text: ', err);
               });
             }
       
             board.position(second_var)
        
             if($('#r1').is(':checked')){ 
              console.log('No Reveal is checked')
              document.getElementById('back').innerHTML = 'click to reveal'
               }
              else if ($('#r2').is(':checked')) {
              console.log('Reveal is checked')
              var second_var_3 = table1.rows[first_var].cells[2].textContent
              document.getElementById('back').innerHTML = second_var_3
            
              }
            check_fen_position();
      
      
        //set adding_info to none
      })
  
  
  var element = document.getElementById("back"); //grab the element
  element.onclick = function() { //asign a function
  var table1 = document.getElementsByTagName('table')[0];
  //grab the innerHTML of ID front
  var first_var = parseInt($('#table_drop').val())
  //write an if else first_var is NaN
  if (isNaN(first_var)) {
    console.log('not a number')
  } else {
    var second_var_3 = table1.rows[first_var].cells[2].textContent
    document.getElementById('back').innerHTML = second_var_3
  
  }
  }
  
  
const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
const table_x = document.getElementById("my-table");

function csvToArray(str, delimiter = ",") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
  return arr;
}

csvFile.addEventListener("change", function (e) {
  e.preventDefault(); 
  const input = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const text = e.target.result;
    const data = csvToArray(text);

    table_x.innerHTML = ""; // Clear table first
    const headers = Object.keys(data[0]); // Get header names from first row
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table_x.appendChild(headerRow);

    data.forEach(rowData => {
      const row = document.createElement("tr");
      headers.forEach(header => {
        const td = document.createElement("td");
        td.textContent = rowData[header];
        td.style.border = '1px dotted black';
        row.appendChild(td);
      });
      table_x.appendChild(row);
    });
  };
  
  reader.readAsText(input);
  console.log('hello world')
  setTimeout(repopulate_table_drop, 1000);
});

table_x.style.borderCollapse = 'collapse';


function tableDropChoice(argument1){
    console.log('hello world')
    first_var = parseInt(argument1)
    var table1 = document.getElementsByTagName('table')[0];
    var second_var = table1.rows[first_var].cells[1].textContent
    document.getElementById('fenposition_1').innerHTML = second_var
  
  
  
         if(table1.rows[first_var].cells[3].textContent.includes('https')){
           console.log('yes')
           var link = document.createElement("a");
           link.href = table1.rows[first_var].cells[3].textContent
           link.textContent = table1.rows[first_var].cells[3].textContent
           //add target="_blank" to the link element
           link.setAttribute("target", "_blank");
           // Append the link element to li3
           //change the ID front to link with innerHTML
           document.getElementById("site_or_clipboard").innerHTML = ''
           //append link to ID site_or_clipboard
           document.getElementById("site_or_clipboard").appendChild(link);
           } else {
           console.log('no')
           //change innerHTML of id "site_or_clipboard"
           document.getElementById('site_or_clipboard').innerHTML = 'Pgn copied to clipboard!'
           navigator.clipboard.writeText(table1.rows[first_var].cells[3].textContent)
           .then(() => {
           console.log('Text copied to clipboard');
           })
           .catch(err => {
           console.error('Error copying text: ', err);
           });
         }
   
         board.position(second_var)
    
         if($('#r1').is(':checked')){ 
          console.log('No Reveal is checked')
          document.getElementById('back').innerHTML = 'click to reveal'
           }
        else if ($('#r2').is(':checked')) {
          console.log('Reveal is checked')
          var second_var_3 = table1.rows[first_var].cells[2].textContent
          document.getElementById('back').innerHTML = second_var_3
        
        }
        check_fen_position();
  }
$("#increment_one").click( function() {
	console.log("hello world")
	var selectElement = document.getElementById("table_drop");

	// Get the current value of the select element
	var currentValue = parseInt(selectElement.value);

	// Increment the current value by one
	var newValue = currentValue + 1;
	tableDropChoice(newValue)
    selectElement.value = newValue.toString();
});

//if


if($('#r1').is(':checked')){ 
  console.log('No Reveal is checked')
  document.getElementById('back').innerHTML = 'click to reveal'
   }
else if ($('#r2').is(':checked')) {
  console.log('Reveal is checked')
  var second_var_3 = table1.rows[first_var].cells[2].textContent
  document.getElementById('back').innerHTML = second_var_3

}

