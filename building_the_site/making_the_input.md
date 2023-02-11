for the input, I would want to be able to : scroll through the table and then if it matches make the table. 

then, append to another element right below: with ____, _____, _____ so that I might have two or threee of the same positions when I look up only with the first couple letters.



```javascript

$('#text').keypress(function (e) {
  if (e.which == 13) {
    console.log($("#text").val())

    var first_var = parseInt($("#text").val())
    counter_ = parseInt($("#text").val())
            
    if(regExp.test($("#text").val())){
      function fentohtml_3() {
        html = $("#text").val()
          .trim()
          .replace(/\s+.*/,"")
          .replace(/\d+/g, n => " ".repeat(n))
          .replace(/./g, char => "<td>" + (pieces[char] || char))
          .replace(/^|<td>\//g,"\n  <tr>");
        html = "<table class=\"chess\">" + html + "\n</table>";
        document.getElementById("out").innerHTML = html;
        document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
            }
      fentohtml_3();
      console.log('first_if')
      console.log($("#text").val())
    } else {
      var table1 = document.getElementsByTagName('table')[1];
      var second_var = table1.rows[first_var].cells[0].textContent
      console.log(second_var)
      console.log('second else, print second_var')
      console.log(second_var)
      function fentohtml_2() {
        html = second_var
          .trim()
          .replace(/\s+.*/,"")
          .replace(/\d+/g, n => " ".repeat(n))
          .replace(/./g, char => "<td>" + (pieces[char] || char))
          .replace(/^|<td>\//g,"\n  <tr>");
        html = "<table class=\"chess\">" + html + "\n</table>";
        document.getElementById("out").innerHTML = html;
        document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
      var third_var = table1.rows[counter_].cells[1].textContent
      var third_var_2 = table1.rows[counter_].cells[2].textContent

      document.getElementById('front').innerHTML = third_var
      document.getElementById('back').innerHTML = 'click to reveal'
     
      }
      fentohtml_2() 
      document.getElementById('text').value = ''
      document.getElementById("text").focus();
    }

      return false;    //<---- Add this line
      
      }});

```

Second version:

```javascript
$('#text').keypress(function (e) {
  if (e.which == 13) {
    console.log($("#text").val())

    var first_var = parseInt($("#text").val())
    counter_ = parseInt($("#text").val())
            
    if(regExp.test($("#text").val())){
      var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 0, row; row = table.rows[i]; i++) {
    		var cell = row.cells[0];
    		if (cell.textContent.includes($("#text").val())) {
        		console.log("Match found in row " + (i + 1));
        		break;
    		}
	  }
      function fentohtml_3() {
        html = for_entry_to_fentohtml_3
          .trim()
          .replace(/\s+.*/,"")
          .replace(/\d+/g, n => " ".repeat(n))
          .replace(/./g, char => "<td>" + (pieces[char] || char))
          .replace(/^|<td>\//g,"\n  <tr>");
        html = "<table class=\"chess\">" + html + "\n</table>";
        document.getElementById("out").innerHTML = html;
        document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
            }
      fentohtml_3();
      console.log('first_if')
      console.log($("#text").val())
    } else {
      var table1 = document.getElementsByTagName('table')[1];
      var second_var = table1.rows[first_var].cells[0].textContent
      console.log(second_var)
      console.log('second else, print second_var')
      console.log(second_var)
      function fentohtml_2() {
        html = second_var
          .trim()
          .replace(/\s+.*/,"")
          .replace(/\d+/g, n => " ".repeat(n))
          .replace(/./g, char => "<td>" + (pieces[char] || char))
          .replace(/^|<td>\//g,"\n  <tr>");
        html = "<table class=\"chess\">" + html + "\n</table>";
        document.getElementById("out").innerHTML = html;
        document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
      var third_var = table1.rows[counter_].cells[1].textContent
      var third_var_2 = table1.rows[counter_].cells[2].textContent

      document.getElementById('front').innerHTML = third_var
      document.getElementById('back').innerHTML = 'click to reveal'
     
      }
      fentohtml_2() 
      document.getElementById('text').value = ''
      document.getElementById("text").focus();
    }

      return false;    //<---- Add this line
      
      }});



	  var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 0, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        if (cell.textContent.includes($("#text").val())) {
            console.log("Match found in row " + (i + 1));
            break;
        }
 
 	 var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 0, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        console.log(cell)
        }

        var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 0, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        console.log(cell)
        }

        //returns: <td style="border: 1px solid black;">r1b1k2r/ppppqppp/1bn2n2/3Pp3/2B1P3/2P2N2/PP3PPP/RNBQ1RK1 1 -</td>

        var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 1, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        console.log(cell.textContent.trim())
        }

        //return the textcontent
        console.log(cell.textContent.trim());
        // because my table is messed up



    if(regExp.test($("#text").val())){
      var table1 = document.getElementsByTagName('table')[1];
      var for_entry_to_fentohtml_3 = '';
      for (var i = 1, row; row = table1.rows[i]; i++) {
        var cell = row.cells[1];
        if (cell.textContent.includes($("#text").val())) {
            console.log("Match found in row " + (i + 1));
            p1.innerHTML += "Match found in row: " + (i + 1) + ", "
            for_entry_to_fentohtml_3 = cell.textContent
        }
    }
    	//there were some issues 
    	//cells[1] refers to : the second column
    	//textContent gives an error when your cells return as undefined
    
      function fentohtml_3() {
        html = for_entry_to_fentohtml_3
          .trim()
          .replace(/\s+.*/,"")
          .replace(/\d+/g, n => " ".repeat(n))
          .replace(/./g, char => "<td>" + (pieces[char] || char))
          .replace(/^|<td>\//g,"\n  <tr>");
        html = "<table class=\"chess\">" + html + "\n</table>";
        document.getElementById("out").innerHTML = html;
        document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
            }
      fentohtml_3();






```