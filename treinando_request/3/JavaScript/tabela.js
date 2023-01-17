var xmr = new XMLHttpRequest;
function generateTable(){
    alert('oi')
xmr.onreadystatechange = function(){
    if(xmr.readyState == 4){
        var tabela = JSON.parse(xmr.responseText);
        const length = tabela['entries'].length;
        alert(length);
        const entries = Object.keys();
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");

        alert('ola')
        console.log(tabela['entries'][0]['API'])
        console.log(tabela['entries'][length])
        console.log(length)
        for (let i = 0; i < 10; i++) {
            const row = document.createElement("tr");
        
            for (let j = 0; j < 10; j++) {
              const cell = document.createElement("td");
              const cellText = document.createTextNode(tabela['entries'][j]['Description'] +', ');
              cell.appendChild(cellText);
              row.appendChild(cell);
            }
            tblBody.appendChild(row);
          }
        
          tbl.appendChild(tblBody);
          document.body.appendChild(tbl);
          tbl.setAttribute("border", "2");
        }
    }
    xmr.open('GET','https://api.publicapis.org/entries');
xmr.send();
}
