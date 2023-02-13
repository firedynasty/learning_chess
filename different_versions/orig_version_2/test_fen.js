2qkb1r/ppp2ppp/2n1pn2/3p3b/2PP1BPP/4PP2/PP6/RN1QKBNR b KQkq g3 0 7

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