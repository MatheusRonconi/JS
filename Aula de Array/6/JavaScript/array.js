Array = []



function vetor(){
    var vetor = document.getElementById('texto1')
    
    for(var i = 0; vetor.value > i; i++){
        Array[i] = vetor.value - i;
    }
    console.log(Array)
    let num = prompt('Qual numero deseja buscar dentro do vetor?')

    Array.reverse()

    console.log(Array[num - 1])

    /*for(var i = 0; num == Array[i]; i++){
        console.log(Array[i])
    }*/

    //const found = Array.find(Element => Element > num)

    //console.log(found)
}
