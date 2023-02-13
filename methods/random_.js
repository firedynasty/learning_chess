if a number is NaN

if(isNaN(text_input_val)) {
    console.log('NaN')
    $("#text_chess").val(parseInt($('#choice_by_ten').val()))
  }else {
    new_value = text_input_val + parseInt($('#choice_by_ten').val())
    $("#text_chess").val(new_value)
  }

How to get the rows of a table:

var table1 = document.getElementsByTagName('table')[2];
table1.rows[10].cells[1].textContent

