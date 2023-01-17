var xmr = new XMLHttpRequest();

        var documento = {
            "id":2525,
            "name": ["amanda", "clara", "samira", "alice"],
            "email":"gowda_fr_sucheta@dickens.name",
            "gender":"male",
            "status":"inactive"
        };
       

        xmr.onreadystatechange = function(){
            
            if(xmr.readyState  == 4){
                var Text = ""
                var teste = JSON.parse(xmr.responseText);
                console.log(teste[0].name);
                console.log(teste[1].name);
                console.log(documento.name)
               
               /* for (const name of teste) {
                    document.write(name.name)
                }
                for (var i in teste.name) {
                    Text += teste.name[i] + ',';
                }*/
               for(let i = 0; i < teste.length; i++)
                {
                   alert(teste[i].name)
                   document.getElementById('esse').innerHTML += ''+teste[i].name+'<br>'
                }
                
                 /*   let i = 0
                while (i < 10)
                {
                    i++
                    console.log(teste[i].name)
                    Text += teste[i].name
                    document.getElementById("esse").innerHTML = ' '+Text+ ', ';
                }*/
            }
        }
        
       // document.getElementById("esse").innerHTML = Text;
        xmr.open("GET","https://gorest.co.in/public/v2/users");
        xmr.send();