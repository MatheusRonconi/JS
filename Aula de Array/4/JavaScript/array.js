Array = []

function registro(){
    var X = document.getElementById('texto1')
    

    for(var i = 0; Array.length < X.value;i++){
    let Num = prompt('Por favor digite o valor que deseja salvar')
    Array[i] = Num
    }
    console.log(Array)
    
}