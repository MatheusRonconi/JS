var xmr = new XMLHttpRequest;

function p() {
    alert('ola')  
    xmr.onreadystatechange =  function (){
      if(xmr.readyState == 4){
        alert('FUNCIONOU!!!')
        var treino = JSON.parse(xmr.responseText);
        console.log(treino[0].id)
        for(var i =0; i < treino.length; i++){
          console.log(treino[i].id);
          document.getElementById('tre').innerHTML += ''+treino[i].id+';<br>';
        }
      }
    }
    xmr.open("GET","https://gorest.co.in/public/v2/posts");
    xmr.send();
}