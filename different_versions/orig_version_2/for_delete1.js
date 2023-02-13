function addRow1(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);
  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);
  
  // another way to add a row
  for(var i = 0; i < arrsplitArray.length; i++) {
    var tr = tableRef.insertRow()
    for(var j = 0; j < arrsplitArray[i].length; j++) {
      var td = tr.insertCell(); 
      td.appendChild(document.createTextNode(arrsplitArray[i][j]))
      td.style.border = '1px solid black';
    }}


}



function changeTable_2(p1) {
    var arr = ``
    var arr_2 = ``
    var newTable = ``
    var textarea_ = `should be table of contents`
  if(p1 === 'hello') {
    newTableArr = `Name,Site,,
Thinking Fast and Slow (Choices, intuition),https://read.amazon.com/?asin=B00555X8OA,,
Range (sports analytics),https://read.amazon.com/?asin=B07H1ZYWTM&language=en-US,,
Weapons of Math Destruction,https://read.amazon.com/?asin=B019B6VCLO&language=en-US,`
    }
    if(p1 === 'docs') {
    newTableArr = `anticipation,https://docs.google.com/document/d/1Vsbb63_jn9QhcdEIFARlrDqhIHr_v2CdAOlUG44Ouzg/edit?usp=sharing,
chess lessons,https://docs.google.com/document/d/1lUtEPcXX6WB1nOiVUjaE2Nobw_dYTLeqKvgxob4Fgkk/edit?usp=sharing,
puzzles,https://docs.google.com/document/d/1SjZzxXPiEFHEsZ8PiQ2Doqp6OgFixXElFu038_jvJXE/edit?usp=sharing,
tactics,https://docs.google.com/document/d/11kb6uqg1BR0lS3alYK8zjNtNBDFtM61_kuzncMKWSjU/edit?usp=sharing,
forked,https://docs.google.com/document/d/1G_plbT-Q2q2eACwaVAZ5cNr8oWPafspypaPk9hgmVrc/edit?usp=sharing,
end game,https://docs.google.com/document/d/1m5uXzxa1_e5V4gAHgFadD1tghAwUyXRrYuunRNE158o/edit?usp=sharing,
games,https://docs.google.com/document/d/1u4MfJeindbfr37XMTqmGOD8fKXJXwRwlnIKdJOaFJ4U/edit?`
    
    }
   if(p1 === 'sheets') {
     newTableArr = `games,https://docs.google.com/spreadsheets/d/14JIdRS3ZcegZ7lauPo8LQEmqnLgJRGk-1JqUU0KrH5Y/edit#gid=0
puzzles,https://docs.google.com/spreadsheets/d/1FVOuIMKSBr8147OXM3aeqowcKosfYPLtpnm_cQ9S_4Y/edit?usp=sharing
lessons,https://docs.google.com/spreadsheets/d/1GbeqbvoZQZ-oeP6z81gBwZVCItDqWcrC48Hu55IfCEw/edit?usp=sharing
     `
     
   }
  if(p1 === 'music') {
    newTableArr = `name,site,,
Funk Fusion Guitar Backing Track in D Minor,https://youtu.be/cFfQkNlViqA,,
Smooth Jazz Ballad - Backing Jam Track in Dm,https://youtu.be/6xd-Hu62GUw,,
Chill Lofi Hip Hop Rnb Backing Track in D Minor,https://youtu.be/wwjSiEzzfXQ,,
Instrumental Piano Beats Ft PianOwned Lofi Samples - Chillhop Neo Soul Type Music 2021,https://youtu.be/k8g0I9kd-m4,
    `
  }

      // Get a reference to the table
  let tableRef = document.getElementById('my-table');
  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);
  var arrsplit = newTableArr.split('\n')
  arrsplitArray = new Array();
  for (var i = 0; i < arrsplit.length; i++) {
      arrsplitArray[i] = arrsplit[i].split(",");
    }
  // another way to add a row
  for(var i = 0; i < arrsplitArray.length; i++) {
    var tr = tableRef.insertRow()
    for(var j = 0; j < arrsplitArray[i].length; j++) {
      var td = tr.insertCell(); 
      td.appendChild(document.createTextNode(arrsplitArray[i][j]))
      td.style.border = '1px solid black';
    }}
  }





$("#clear_TOC").click( function() {
     $( ".inner" ).empty();

  });

 toc_img_arr = `chess_images_games
      chess_images_lessons
      chess_images_openings
      https://www.google.com hello 234
      `
  
  $("#reveal_img_toc").click( function() {
      var toc_img_arr1 = toc_img_arr.split("\n")
 

      for(var i = 0; i < toc_img_arr1.length; i++) {
      // Trim the excess whitespace.
        toc_img_arr1[i] = toc_img_arr1[i].replace(/^\s*/, "").replace(/\s*$/, "");
         $(".inner").append("<p></p>" )

      $( ".inner" ).append(toc_img_arr1[i]);
    }
    $(".inner").append("<p></p>" )

  });
 




function changeImages(p1) {
    var arr = ``
    var arr_2 = ``
    var newTable = ``
    var textarea_ = `should be table of contents`
    if(p1 === 'chess_images_games') {
        arr_2 = `https://www.dropbox.com/s/thskq6kq7ybhs1a/games_battery1.jpg?raw=1
https://www.dropbox.com/s/a11o4zsixsiughi/pawn_break.jpg?raw=1
https://www.dropbox.com/s/vhi6y9dnqqoy3mr/where_is_your_bishop.jpg?raw=1
`
    }
     if(p1 === 'chess_images_lessons') {
        arr_2 = `https://www.dropbox.com/s/i0y3fyi329r2z3f/dont_let_them_castle6.jpg?raw=1
https://www.dropbox.com/s/gc0ispgzmhv3dsc/dont_let_them_castle5.jpg?raw=1
https://www.dropbox.com/s/im0s30bkxx39lyq/dont_let_them_castle4.jpg?raw=1
https://www.dropbox.com/s/9uwubo4rh59sdgx/dont_let_them_castle3.jpg?raw=1
https://www.dropbox.com/s/7tebfdz1etrpzx9/dont_let_them_castle2.jpg?raw=1
https://www.dropbox.com/s/ylc3tojl9pr2xcf/dont_let_them_castle1.jpg?raw=1
`
    }
   if(p1 === 'chess_images_openings') {
        arr_2 = `https://www.dropbox.com/s/44xhdqbi0a4idov/modern_defense_knight1.jpg?raw=1
`
    }
   if(p1 === 'reveal') {
     var toc_arr_var = toc_arr.split("\n")
 

     for(var i = 0; i < toc_arr_var.length; i++) {
      // Trim the excess whitespace.
        toc_arr_var[i] = toc_arr_var[i].replace(/^\s*/, "").replace(/\s*$/, "");
       
         $(".inner").append("<p></p>" )

      $( ".inner" ).append(toc_arr_var[i]);
    }
    $(".inner").append("<p></p>" )

    }
   if(p1 === 'clear') {
    $( ".inner" ).empty();

    }
  
  
  
    
  var thumb1 = document.querySelector('.slide-container');

  var fc_2 = thumb1.firstElementChild

  while (fc_2) {
    thumb1.removeChild(fc_2)
    fc_2 = thumb1.firstElementChild

  }  
  
    var second_str_array_2 = arr_2.split("\n")

    for(var i = 0; i < second_str_array_2.length; i++) {
    // Trim the excess whitespace.

    second_str_array_2[i] = second_str_array_2[i].replace(/^\s*/, "").replace(/\s*$/, "");

    var aImg = document.createElement('img');
    var aDiv = document.createElement('div');
    aDiv.appendChild(aImg)
    aDiv.className = "slide fade"
    aImg.src = second_str_array_2[i]
    var thumb = document.querySelector('.slide-container');
    thumb.appendChild(aDiv)

    slides = document.querySelectorAll(".slide")
}
}


function gotoLinks(p1) {
    var arr = ``
    var arr_2 = ``
    var newTable = ``
    var textarea_ = `should be table of contents`


    if(p1 === 'hello') {
    toc_arr = `games
    lessons
    https://www.google.com hello 234
    https://www.fantasypros.com hello 232
    `
    }
    if(p1 === 'docs') {
    toc_arr = `
    anticipation  https://docs.google.com/document/d/1Vsbb63_jn9QhcdEIFARlrDqhIHr_v2CdAOlUG44Ouzg/edit?usp=sharing
chess lessons https://docs.google.com/document/d/1lUtEPcXX6WB1nOiVUjaE2Nobw_dYTLeqKvgxob4Fgkk/edit?usp=sharing
puzzles https://docs.google.com/document/d/1SjZzxXPiEFHEsZ8PiQ2Doqp6OgFixXElFu038_jvJXE/edit?usp=sharing
tactics https://docs.google.com/document/d/11kb6uqg1BR0lS3alYK8zjNtNBDFtM61_kuzncMKWSjU/edit?usp=sharing
forked  https://docs.google.com/document/d/1G_plbT-Q2q2eACwaVAZ5cNr8oWPafspypaPk9hgmVrc/edit?usp=sharing
end game  https://docs.google.com/document/d/1m5uXzxa1_e5V4gAHgFadD1tghAwUyXRrYuunRNE158o/edit?usp=sharing
games https://docs.google.com/document/d/1u4MfJeindbfr37XMTqmGOD8fKXJXwRwlnIKdJOaFJ4U/edit?usp=sharing
    `
      
      
    }
    
   if(p1 === 'sheets') {
     toc_arr = `games https://docs.google.com/spreadsheets/d/14JIdRS3ZcegZ7lauPo8LQEmqnLgJRGk-1JqUU0KrH5Y/edit#gid=0
puzzles https://docs.google.com/spreadsheets/d/1FVOuIMKSBr8147OXM3aeqowcKosfYPLtpnm_cQ9S_4Y/edit?usp=sharing
lessons https://docs.google.com/spreadsheets/d/1GbeqbvoZQZ-oeP6z81gBwZVCItDqWcrC48Hu55IfCEw/edit?usp=sharing
     
     `
     
   }
  
     if(p1 === 'music') {
     toc_arr = `Funk Fusion Guitar Backing Track in D Minor https://youtu.be/cFfQkNlViqA  
Smooth Jazz Ballad - Backing Jam Track in Dm  https://youtu.be/6xd-Hu62GUw  
Chill Lofi Hip Hop Rnb Backing Track in D Minor https://youtu.be/wwjSiEzzfXQ  
Instrumental Piano Beats Ft PianOwned Lofi Samples - Chillhop Neo Soul Type Music 2021  https://youtu.be/k8g0I9kd-m4
     
     `
     
   }

  

    var toc_arr_var = toc_arr.split("\n")
        $( ".inner" ).append( "<p></p>");

        for(var i = 0; i < toc_arr_var.length; i++) {
            // Trim the excess whitespace.
              toc_arr_var[i] = toc_arr_var[i].replace(/^\s*/, "").replace(/\s*$/, "");
              var toc_arr_var_2 = toc_arr_var[i].split(/[ ,\t]/);
              console.log(toc_arr_var_2)
              for(var j = 0; j < toc_arr_var_2.length; j++ ){
                if (toc_arr_var_2[j].includes("https")) {
                    var toc_http_var = jQuery('<a>').attr('href', toc_arr_var_2[j]).attr('target', '_blank').text(toc_arr_var_2[j])
                    console.log(toc_arr_var_2[j])
                    $( ".inner" ).append(toc_http_var);
                    $( ".inner" ).append( "<span> </span>" );
                } 
                else {  
                    $( ".inner" ).append(toc_arr_var_2[j]);
                    $( ".inner" ).append( "<span> </span>" );
              }
            }
            $( ".inner" ).append( "<p></p>");
              
        }


}


function changeTable(p1) {
    var arr = ``
    var arr_2 = ``
    var newTable = ``
    var textarea_ = `should be table of contents`
    if(p1 === 'hello') {
    arr = `https://docs.google.com/spreadsheets/d/1ql8wa4EsrDYenIGeB02c57axB1UxJ5XE9eSmGb2ZPkI/edit#gid=0;
    `
    newTable = `<table class="tg">
  <thead>
    <tr>
      <th class="tg-7zrl">Name</th>
      <th class="tg-7zrl">Site</th>
      <th class="tg-0lax"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-7zrl">Thinking Fast and Slow (Choices, intuition)</td>
      <td class="tg-7h26"><a href="https://read.amazon.com/?asin=B00555X8OA">https://read.amazon.com/?asin=B00555X8OA</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-7zrl">Range&nbsp;&nbsp;(sports analytics)</td>
      <td class="tg-7h26"><a href="https://read.amazon.com/?asin=B07H1ZYWTM&language=en-US">https://read.amazon.com/?asin=B07H1ZYWTM&amp;language=en-US</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-7zrl">Weapons of Math Destruction</td>
      <td class="tg-7h26"><a href="https://read.amazon.com/?asin=B019B6VCLO&language=en-US">https://read.amazon.com/?asin=B019B6VCLO&amp;language=en-US</a></td>
      <td class="tg-0lax"></td>
    </tr>
  </tbody>
  </table>`
    }
 if(p1 === 'docs') {
    arr=`links`    
    newTable = `<table class="tg">
    <thead>
      <tr>
        <th class="tg-s12t"><span style="font-weight:normal;color:#333;background-color:#FFF">Docs</span></th>
        <th class="tg-7zrl">Sites</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-7zrl">anticipation</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/1Vsbb63_jn9QhcdEIFARlrDqhIHr_v2CdAOlUG44Ouzg/edit?usp=sharing">https://docs.google.com/document/d/1Vsbb63_jn9QhcdEIFARlrDqhIHr_v2CdAOlUG44Ouzg/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-7zrl"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-7zrl">chess lessons</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/1lUtEPcXX6WB1nOiVUjaE2Nobw_dYTLeqKvgxob4Fgkk/edit?usp=sharing">https://docs.google.com/document/d/1lUtEPcXX6WB1nOiVUjaE2Nobw_dYTLeqKvgxob4Fgkk/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-7zrl"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-7zrl">puzzles</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/1SjZzxXPiEFHEsZ8PiQ2Doqp6OgFixXElFu038_jvJXE/edit?usp=sharing">https://docs.google.com/document/d/1SjZzxXPiEFHEsZ8PiQ2Doqp6OgFixXElFu038_jvJXE/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-kcps"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-s12t"><span style="font-weight:normal;color:#333;background-color:#FFF">tactics</span></td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/11kb6uqg1BR0lS3alYK8zjNtNBDFtM61_kuzncMKWSjU/edit?usp=sharing">https://docs.google.com/document/d/11kb6uqg1BR0lS3alYK8zjNtNBDFtM61_kuzncMKWSjU/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-kcps"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-s12t"><span style="font-weight:normal;color:#333;background-color:#FFF">forked</span></td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/1G_plbT-Q2q2eACwaVAZ5cNr8oWPafspypaPk9hgmVrc/edit?usp=sharing">https://docs.google.com/document/d/1G_plbT-Q2q2eACwaVAZ5cNr8oWPafspypaPk9hgmVrc/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-kcps"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-7zrl">end game</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/1m5uXzxa1_e5V4gAHgFadD1tghAwUyXRrYuunRNE158o/edit?usp=sharing">https://docs.google.com/document/d/1m5uXzxa1_e5V4gAHgFadD1tghAwUyXRrYuunRNE158o/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-kcps"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-7zrl">games</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/document/d/1u4MfJeindbfr37XMTqmGOD8fKXJXwRwlnIKdJOaFJ4U/edit?usp=sharing">https://docs.google.com/document/d/1u4MfJeindbfr37XMTqmGOD8fKXJXwRwlnIKdJOaFJ4U/edit?usp=sharing</a></td>
      </tr>
    </tbody>
    </table>`
    }
     if(p1 === 'sheets') {
    arr=`links`    
    newTable = `<table class="tg">
    <thead>
      <tr>
        <th class="tg-7zrl">games</th>
        <th class="tg-ls4t"><a href="https://docs.google.com/spreadsheets/d/14JIdRS3ZcegZ7lauPo8LQEmqnLgJRGk-1JqUU0KrH5Y/edit#gid=0">https://docs.google.com/spreadsheets/d/14JIdRS3ZcegZ7lauPo8LQEmqnLgJRGk-1JqUU0KrH5Y/edit#gid=0</a></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-7zrl"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-7zrl">puzzles</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/spreadsheets/d/1FVOuIMKSBr8147OXM3aeqowcKosfYPLtpnm_cQ9S_4Y/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1FVOuIMKSBr8147OXM3aeqowcKosfYPLtpnm_cQ9S_4Y/edit?usp=sharing</a></td>
      </tr>
      <tr>
        <td class="tg-7zrl"></td>
        <td class="tg-kcps"></td>
      </tr>
      <tr>
        <td class="tg-7zrl">lessons</td>
        <td class="tg-ls4t"><a href="https://docs.google.com/spreadsheets/d/1GbeqbvoZQZ-oeP6z81gBwZVCItDqWcrC48Hu55IfCEw/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1GbeqbvoZQZ-oeP6z81gBwZVCItDqWcrC48Hu55IfCEw/edit?usp=sharing</a></td>
      </tr>
    </tbody>
    </table>`

    }
     else if(p1 === 'music') {
  newTable = `<table class="tg">
  <thead>
    <tr>
      <th class="tg-7zrl">name</th>
      <th class="tg-7zrl">site</th>
      <th class="tg-0lax"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-j6zm"><span style="font-weight:bold">Funk Fusion Guitar Backing Track in D Minor</span></td>
      <td class="tg-7h26"><a href="https://youtu.be/cFfQkNlViqA">https://youtu.be/cFfQkNlViqA</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-kcps"><span style="color:#000;background-color:#FFF">Smooth Jazz Ballad - Backing Jam Track in Dm</span></td>
      <td class="tg-ls4t"><a href="https://youtu.be/6xd-Hu62GUw">https://youtu.be/6xd-Hu62GUw</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-kcps"><span style="color:#000;background-color:#FFF">Chill Lofi Hip Hop Rnb Backing Track in D Minor</span></td>
      <td class="tg-ls4t"><a href="https://youtu.be/wwjSiEzzfXQ">https://youtu.be/wwjSiEzzfXQ</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-kcps"><span style="color:#000;background-color:#FFF">Instrumental Piano Beats Ft PianOwned Lofi Samples - Chillhop Neo Soul Type Music 2021</span></td>
      <td class="tg-ls4t"><a href="https://youtu.be/k8g0I9kd-m4">https://youtu.be/k8g0I9kd-m4</a></td>
      <td class="tg-0lax"></td>
    </tr>
  </tbody>
  </table>`
     }
  else if(p1 === 'kindle') {
        arr = `https://docs.google.com/spreadsheets/d/1ql8wa4EsrDYenIGeB02c57axB1UxJ5XE9eSmGb2ZPkI/edit#gid=0;
  
  `
      newTable = `<table class="tg">
  <thead>
    <tr>
      <th class="tg-7zrl">Name</th>
      <th class="tg-7zrl">Site</th>
      <th class="tg-0lax"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-7zrl">Thinking Fast and Slow (Choices, intuition)</td>
      <td class="tg-7h26"><a href="https://read.amazon.com/?asin=B00555X8OA">https://read.amazon.com/?asin=B00555X8OA</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-7zrl">Range&nbsp;&nbsp;(sports analytics)</td>
      <td class="tg-7h26"><a href="https://read.amazon.com/?asin=B07H1ZYWTM&language=en-US">https://read.amazon.com/?asin=B07H1ZYWTM&amp;language=en-US</a></td>
      <td class="tg-0lax"></td>
    </tr>
    <tr>
      <td class="tg-7zrl">Weapons of Math Destruction</td>
      <td class="tg-7h26"><a href="https://read.amazon.com/?asin=B019B6VCLO&language=en-US">https://read.amazon.com/?asin=B019B6VCLO&amp;language=en-US</a></td>
      <td class="tg-0lax"></td>
    </tr>
  </tbody>
  </table>`
  }
  else if(p1 === 'programming') {
  arr = `https://docs.google.com/spreadsheets/d/1sjXzcvEzU4XHquUtcW4BwixZ0nuZslN7g2n2PDX6efU/edit?usp=sharing
`
  
  }
        else if(p1 === 'chess') {
arr = `see 'chess1': Piano, 'chess2': white, 'chess3': black, 'chess4': lessons

`  

    }
    else if(p1 === 'chess1') {
  arr=`Piano`
newTable = `<table class="tg">
  <thead>
    <tr>
      <th class="tg-s3dz"><span style="font-weight:bold;background-color:#BDBDBD">opponent_rating</span></th>
      <th class="tg-s3dz"><span style="font-weight:bold;background-color:#BDBDBD">win or loss</span></th>
      <th class="tg-0a1l"><span style="font-weight:bold;background-color:#BDBDBD">site</span></th>
      <th class="tg-s3dz"><span style="font-weight:bold;background-color:#BDBDBD">comments</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-o5n3"><span style="font-weight:bold;background-color:#FFF">938_alan</span></td>
      <td class="tg-o5n3"><span style="font-weight:bold;background-color:#FFF">loss</span></td>
      <td class="tg-xsgc"><a href="https://www.chess.com/analysis/game/live/24036435021">https://www.chess.com/analysis/game/live/24036435021</a></td>
      <td class="tg-dgl5">blunder 12. 17. 22. , mistake 6., 9., 18.</td>
    </tr>
    <tr>
      <td class="tg-6s59"><span style="font-weight:bold;background-color:#F3F3F3">717</span></td>
      <td class="tg-2692"><span style="font-weight:bold;background-color:#F3F3F3">draw</span></td>
      <td class="tg-8zg5"><a href="https://www.chess.com/analysis/game/live/24024457107">https://www.chess.com/analysis/game/live/24024457107</a></td>
      <td class="tg-9qck">Modern defense (Italian); bl: 6., 22., 29.; m.: 28</td>
    </tr>
    <tr>
      <td class="tg-2mzs"><span style="font-weight:bold;background-color:#FFF">817</span></td>
      <td class="tg-o5n3"><span style="font-weight:bold;background-color:#FFF">loss</span></td>
      <td class="tg-xsgc"><a href="https://www.chess.com/analysis/game/live/24022654815">https://www.chess.com/analysis/game/live/24022654815</a></td>
      <td class="tg-dgl5">French defense: bl.: 21., 22.</td>
    </tr>
    <tr>
      <td class="tg-6s59"><span style="font-weight:bold;background-color:#F3F3F3">759</span></td>
      <td class="tg-2692"><span style="font-weight:bold;background-color:#F3F3F3">loss</span></td>
      <td class="tg-8zg5"><a href="https://www.chess.com/analysis/game/live/23942841471">https://www.chess.com/analysis/game/live/23942841471</a></td>
      <td class="tg-9qck">Giuoco: Main Line, Bird's Attack: m. 16, 19., 22., </td>
    </tr>
  </tbody>
  </table>`
  
  }
  else if(p1 === 'chess4') {
        arr = `https://docs.google.com/spreadsheets/d/1GbeqbvoZQZ-oeP6z81gBwZVCItDqWcrC48Hu55IfCEw/edit?usp=sharing
  
  `
  }
 
  else if(p1 === 'chess2') {
    arr=`White`
    newTable = `<table class="tg">
    <thead>
      <tr>
        <th class="tg-s3dz"><span style="font-weight:bold;background-color:#BDBDBD">opponent_rating</span></th>
        <th class="tg-s3dz"><span style="font-weight:bold;background-color:#BDBDBD">win or loss</span></th>
        <th class="tg-s3dz"><span style="font-weight:bold;background-color:#BDBDBD">comments</span></th>
        <th class="tg-bobw"><span style="font-weight:bold">site</span></th>
        <th class="tg-7zrl"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-2mzs"><span style="font-weight:bold;background-color:#FFF">600</span></td>
        <td class="tg-o5n3"><span style="font-weight:bold;background-color:#FFF">loss</span></td>
        <td class="tg-ls4t"><a href="https://www.dropbox.com/s/ot683erghwydt0k/ruy_lopez_690.mp4?raw=1">https://www.dropbox.com/s/ot683erghwydt0k/ruy_lopez_690.mp4?raw=1</a></td>
        <td class="tg-2b7s">24243499959</td>
        <td class="tg-7zrl">Ruy Lopez</td>
      </tr>
      <tr>
        <td class="tg-6s59"><span style="font-weight:bold;background-color:#F3F3F3">700</span></td>
        <td class="tg-2692"><span style="font-weight:bold;background-color:#F3F3F3">win_</span></td>
        <td class="tg-lktk"><a href="https://www.dropbox.com/s/4fqr24br9yi74v0/chess_24339728293.mp4?raw=1">https://www.dropbox.com/s/4fqr24br9yi74v0/chess_24339728293.mp4?raw=1</a></td>
        <td class="tg-2b7s">24339728293</td>
        <td class="tg-0lax">Four Knights Variation</td>
      </tr>
    </tbody>
    </table>`
    
    }
  else if(p1 === 'chess3') {
    arr=`Black`
    newTable = `<table class="tg">
    <thead>
      <tr>
        <th class="tg-a61a"><span style="font-weight:bold;background-color:#BDBDBD">opponent_rating</span></th>
        <th class="tg-a61a"><span style="font-weight:bold;background-color:#BDBDBD">win or loss</span></th>
        <th class="tg-a61a"><span style="font-weight:bold;background-color:#BDBDBD">comments</span></th>
        <th class="tg-fll5"><span style="font-weight:bold">site</span></th>
        <th class="tg-za14"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-hgfz"><span style="font-weight:bold;background-color:#FFF">600</span></td>
        <td class="tg-bn54"><span style="font-weight:bold;background-color:#FFF">win</span></td>
        <td class="tg-mfxq"><a href="https://www.dropbox.com/s/sn8iq23kqro14o2/chess_24329586067.mp4?raw=1">https://www.dropbox.com/s/sn8iq23kqro14o2/chess_24329586067.mp4?raw=1</a></td>
        <td class="tg-jkyp">24329586067</td>
        <td class="tg-za14">Ruy Lopez</td>
      </tr>
      <tr>
        <td class="tg-epyu"><span style="font-weight:bold;background-color:#F3F3F3">600</span></td>
        <td class="tg-ht0t"><span style="font-weight:bold;background-color:#F3F3F3">draw</span></td>
        <td class="tg-tpnh"><a href="https://www.dropbox.com/s/hygq5z9xk6iu5oy/chess_24350543375.mp4?raw=1">https://www.dropbox.com/s/hygq5z9xk6iu5oy/chess_24350543375.mp4?raw=1</a></td>
        <td class="tg-jkyp">24350543375</td>
        <td class="tg-0pky">Four Knights Variation</td>
      </tr>
    </tbody>
    </table>`
    
    }
  else if(p1 === 'try1') {
  
  var thumb1 = document.querySelector('.slide-container');

  var fc_2 = thumb1.firstElementChild

  while (fc_2) {
    thumb1.removeChild(fc_2)
    fc_2 = thumb1.firstElementChild

  }
  arr_2 = `https://www.dropbox.com/s/tssunpjstezk51j/Screenshot%2021.jpg?raw=1;https://www.dropbox.com/s/jf3j7ivq3kvu95p/Screen%20Shot%209.jpg?raw=1`

  var second_str_array_2 = arr_2.split(";")

  second_str_array_2 = second_str_array_2.filter(function(s){
      return ~s.indexOf("https");
  });

  console.log(second_str_array_2)
     
  for(var i = 0; i < second_str_array_2.length; i++) {

  var aImg = document.createElement('img');
  var aDiv = document.createElement('div');
  aDiv.appendChild(aImg)
  aDiv.className = "slide fade"
  aImg.src = second_str_array_2[i]
  var thumb = document.querySelector('.slide-container');
  thumb.appendChild(aDiv)
   console.log(second_str_array_2[i])

}
  slides = document.querySelectorAll(".slide")

   }
  else if(p1 === 'projects') {
        arr = `https://docs.google.com/document/d/183qn_leDJseBPG4MOOcyVySGXMXve_MImeQMfn8qK8o/edit?usp=sharing
  
  `
  }
       var second_str_array = arr.split(";")
       $( ".inner" ).empty();
      //  var second_test_var_2 = jQuery('<a>').attr('href', '').text('first : reload!')
      //  console.log(second_str_array)
      //  $( ".inner" ).append( "<p></p>" );
      // $( ".inner" ).append( second_test_var_2);
      // $( ".inner" ).append( "<p></p>" );
       for(var i = 0; i < second_str_array.length; i++) {
      // Trim the excess whitespace.
      second_str_array[i] = second_str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
   
      // Add additional code here, such as:
      if (second_str_array[i].includes("https")) {
          var second_test_var_1 = jQuery('<a>').attr('href', second_str_array[i]).attr('target', '_blank').text(second_str_array[i])
      $( ".inner" ).append( "<p></p>" );
      $( ".inner" ).append( "<span>" );
      $( ".inner" ).append( i + 1 );
      $( ".inner" ).append( "<span>. </span>" );
      $( ".inner" ).append( second_test_var_1 );
   
      $( ".inner" ).append( "<p></p>" );
      console.log('hello') }
      else {
        $(".inner").append("<p></p>" )
        $( ".inner" ).append($('<p>').css('color', 'green').text(second_str_array[i]));   
       $(".inner").append("</p>" )      
    }}
       
  }




  




  $("#gotoImages").click( function() {
    document.getElementById('r1').checked = true;
    document.getElementById('r2').checked = false;

    document.getElementById("text").focus();

       
  });
  

 $("#gotoLinks").click( function() {
    document.getElementById('r2').checked = true;
    document.getElementById('r1').checked = false;
    document.getElementById("text").focus();
       
  });


 $("#gotoTable").click( function() {
    document.getElementById('r4').checked = true;
    document.getElementById('r1').checked = false;
    document.getElementById("text").focus();
       
  });





  $('#something').click(function() {
      location.reload();
  });
  
  function linkify(inputText) {
      var replacedText, replacePattern1, replacePattern2, replacePattern3;
  
      //URLs starting with http://, https://, or ftp://
      replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
      replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
  
      //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
      replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
  
      //Change email addresses to mailto:: links.
      replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
      replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
  
      return replacedText;
  }
  
  
  
  var arr = `
  
  s: 
  `
  
 



  
  var parsed_inputVal = 0
  

  document.getElementById('Row4Column1').addEventListener('change', function() {
    val = $( "#Row4Column1" ).val();
    
    console.log(val)
    if(val === 'A') {
     changeTable('kindle')
      }
      if(val === 'B') {
  arr = `
  `
  
      inputVal = 0
      parsed_inputVal = 2
      }
    else {
      console.log('in between')
    }
    $( ".inner" ).empty();
    //document.getElementsByClassName('inner_3')[0].innerHTML = newTable;
  
  });
 
 
  

  
 
 
  

  
  
  
  
  const htmlEl = document.getElementsByTagName('html')[0];
  
  const toggleTheme = (theme) => {
      htmlEl.dataset.theme = theme;
  }
  
  function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    console.log(theme)
    console.log(`theme-${theme}`)
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
  
  
  var today = new Date()
  var hour_now = today.getHours()
  
  var theme = document.getElementById('selTheme');
  
  
  theme.addEventListener('change', function() {
    val = $( "#selTheme" ).val();
    
    console.log(val)
    if(val === 'light') {
        console.log('yes')
        document.body.style.backgroundColor = "#9DC88D";
        document.getElementById("text").style.backgroundColor = "#9DC88D";
        document.getElementById("btn_3").style.backgroundColor = "#9DC88D";

    }
    if(val === 'dark') {
        document.body.style.backgroundColor = "#4D774E";
        document.getElementById("text").style.backgroundColor = "#4D774E";
        document.getElementById("btn_3").style.backgroundColor = "#4D774E";
        console.log('no')
    }
    if(val === 'white') {
        document.body.style.backgroundColor = "white";
        document.getElementById("text").style.backgroundColor = "white";
        document.getElementById("btn_3").style.backgroundColor = "white";
        console.log('no')
    }
  
  });
  
document.body.style.backgroundColor = "#9DC88D";
document.getElementById("text").style.backgroundColor = "#9DC88D";
document.getElementById("btn_3").style.backgroundColor = "#9DC88D";



let currentSlide = 0;
var slides = document.querySelectorAll(".slide")
var dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
  })
  slides[n].style.display = "block"
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)




 const pieces = {
        K:"♔", Q:"♕", R:"♖", B:"♗", N:"♘", P:"♙", 
        k:"♚", q:"♛", r:"♜", b:"♝", n:"♞", p:"♟",
      }
 
 function fentohtml() {
        html = document.getElementById("fen").value
          .trim()
          .replace(/\s+.*/,"")
          .replace(/\d+/g, n => " ".repeat(n))
          .replace(/./g, char => "<td>" + (pieces[char] || char))
          .replace(/^|<td>\//g,"\n  <tr>");
        html = "<table class=\"chess\">" + html + "\n</table>";
        document.getElementById("out").innerHTML = html;
        document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
        
      }
      
      fentohtml();



function addRow1(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);
  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);
  
  // another way to add a row
  for(var i = 0; i < arrsplitArray.length; i++) {
    var tr = tableRef.insertRow()
    for(var j = 0; j < arrsplitArray[i].length; j++) {
      var td = tr.insertCell(); 
      td.appendChild(document.createTextNode(arrsplitArray[i][j]))
      td.style.border = '1px solid black';
    }}}


// Call addRow() with the table's ID
//addRow('my-table');

arr__ = `r1b1k2r/ppppqppp/1bn2n2/3Pp3/2B1P3/2P2N2/PP3PPP/RNBQ1RK1 1 -
2kr3r/1pp4p/p2p2pn/n2Bp3/4P2q/P2PPR1P/1PPNQ1P1/2KR4 w - - 2 17  2 -
r2qkb1r/ppp2ppp/2n1pn2/3p3b/2PP1BPP/4PP2/PP6/RN1QKBNR b KQkq g3 0 7 3 move out can attack his knight later
r5k1/ppp1q1p1/2n1pr1p/3p1p1P/1bPP1B1Q/P3P3/1P1N4/2KR1BNR b - - 0 15 4 attack his pawn, then knight and queen is checkmate M3
r5k1/2pq2p1/p3p2Q/n2p1p1P/3P4/P3P3/1P1KB3/6R1 b - - 0 26  5 knight base
1r4k1/2p1q1p1/4p2Q/pB1p1p1P/P2P4/4P3/1P6/2n1K1R1 b - - 5 31 6 landed his bishop on the pawn you can push pawn
1r4k1/2p1q1p1/7Q/pB1ppp1P/P2P4/1nK1P3/1P6/6R1 b - - 3 33  7 attack his bishop with rook then land your queen on pawn
rnbqkbnr/ppp2ppp/3p4/4P3/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 0 3 8 Vos Gambit (opening) bishop guards the bishop
2kr1bnr/pppn4/5q2/3Pp2p/8/2NP1N1P/PPP2P2/R2QKB2 w Q - 3 12  9w  white: attack the queen hang the knight
1k1r2r1/ppp5/4Q2b/3P3p/8/2NP1q1P/PPP5/1K1R1B2 w - - 3 20  10w grab the free piece with the queen
r1bqkb1r/pppp1ppp/2n5/4p3/2BP4/2P2N2/P1P2PPP/R1BQK2R b KQkq - 0 6 11wo  d5 to attack the bishop with queen backup
r2qkb1r/ppp2ppp/2npb3/4p1N1/2BP4/2P5/P1P2PPP/R1BQK2R w KQkq - 2 8 11-black-blunder  get forked: 8 d5 Nd4 9 dxe6 Nxe6 10 Nxe6 fxe6 11 Bxe6
r3kb1r/ppp1q1pp/2npp3/4p1N1/3P4/2P2Q2/P1P2PPP/R1B1K2R w KQkq - 2 10 12-black-mistake  queen to e7, `
    var arrsplit = arr__.split('\n')
    arrsplitArray = new Array();
    for (var i = 0; i < arrsplit.length; i++) {
      arrsplitArray[i] = arrsplit[i].split("\t");
      console.log(arrsplit[i].split("\t"));
    }
    console.log('arrsplit1')
    console.log(arrsplit)
    console.log('arrsplitArray1')
    console.log(arrsplitArray)
    addRow1('my-table');

var counter_ = 0

var regExp = /[a-zA-Z]/g;

  $("#btn_3").click( function() {
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
    } else {
      var table1 = document.getElementsByTagName('table')[1];
      var second_var = table1.rows[first_var].cells[0].textContent
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
      fentohtml_2();
      document.getElementById('text').value = ''
      document.getElementById("text").focus();
    } 
          }
      );


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

document.getElementById("text").focus()


$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
   prev()
    
  }
  else if(e.keyCode == 39) { // right
   next()
   counter_ = counter_ + 1
   var table1 = document.getElementsByTagName('table')[1];
   var second_var = table1.rows[counter_].cells[0].textContent
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
      }
    var second_var_2 = table1.rows[counter_].cells[1].textContent
    var second_var_3 = table1.rows[counter_].cells[2].textContent

    document.getElementById('front').innerHTML = second_var_2
    document.getElementById('back').innerHTML = 'click to reveal'
    fentohtml_2();
  }
});

arr_4 = `1  -
2 -
3 move out can attack his knight later
4 attack his pawn, then knight and queen is checkmate M3
5 knight base
6 landed his bishop on the pawn you can push pawn
7 attack his bishop with rook then land your queen on pawn
8 Vos Gambit (opening) bishop guards the bishop
9w  white: attack the queen hang the knight
10w grab the free piece with the queen
11wo  d5 to attack the bishop with queen backup
11-black-blunder  get forked: 8 d5 Nd4 9 dxe6 Nxe6 10 Nxe6 fxe6 11 Bxe6
12-black-mistake  queen to e7, 
`

var arr_4split = arr_4.split('\n')
arr_4splitArray = new Array();
for (var i = 0; i < arr_4split.length; i++) {
      arr_4splitArray[i] = arr_4split[i].split("\t");
}


var element = document.getElementById("back"); //grab the element
element.onclick = function() { //asign a function
  var table1 = document.getElementsByTagName('table')[1];
  var second_var_3 = table1.rows[counter_].cells[2].textContent
  document.getElementById('back').innerHTML = second_var_3
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

    // Loop through the rows of the CSV data
    for (const row of rows) {
      // Create a new table row
      const tr = document.createElement('tr');

      // Loop through the cells of the row
      for (const cell of row) {
        // Create a new table cell
        const td = document.createElement('td');
        td.innerText = cell;
        tr.appendChild(td);
      }

      // Append the row to the table
      table.appendChild(tr);
    }
  })
  .catch(error => console.error(error));