Array = []
Array1 = []
function calculadora(){
    var text = document.getElementById('texto1')

    var valor = parseFloat(text.value)

    Array[0] = valor
    for (var i =1; valor > i; i++){
        Array[0] = Array[0] *(valor - i)
    }
    console.log(Array)

    /*for(var j =1; valor > j;j++, i++){
      Array1[i] = Array[i] * j
    }

    console.log(Array1)*/
}