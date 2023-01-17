Array = []
function ordem(){
    var N1 = document.getElementById('texto1')
    var N2 = document.getElementById('texto2')
    Array[0] = N1.value;
    Array[1] = N2.value; 
    console.log(Array)
    Array.sort()
    console.log(Array)
}