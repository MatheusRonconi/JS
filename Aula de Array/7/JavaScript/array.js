Array = [0]
function calcular(){
    var text = document.getElementById('Texto1')
    var j = 1
    var y = 2
    Array[1] = parseInt(text.value)
    for(var i = 0; Array.length < 10; i++, j++, y++){
        Array[y] = Array[i] + Array[j]
    }
    console.log(Array)
    
}