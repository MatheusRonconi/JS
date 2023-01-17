var xmr = new XMLHttpRequest;

function a() {
    alert('ola1')
    xmr.onreadystatechange = function (){
        if(xmr.readyState == 4){
            var teste = JSON.parse(xmr.responseText);
            alert('funcionando1!!')
            console.log(teste[1])
            for (var i = 0; i<teste.length; i++){
                console.log(teste[0].id)
            }
        }
    }
    xmr.open("GET","https://gorest.co.in/public/v2/posts");
    xmr.send();
}
function b() {
    alert('ola2')
    xmr.onreadystatechange = function (){
        if(xmr.readyState == 4){
            var teste = JSON.parse(xmr.responseText);
            alert('funcionando2!!')
            console.log(teste[0].id)
        }
    }
    xmr.open("GET","https://gorest.co.in/public/v2/comments");
    xmr.send();
}
function c() {
    alert('ola3')
    xmr.onreadystatechange = function (){
        if(xmr.readyState == 4){
            var teste = JSON.parse(xmr.responseText);
            alert('funcionando3!!')
            console.log(teste[0].id)
        }
    }
    xmr.open("GET","https://gorest.co.in/public/v2/todos");
    xmr.send();
}