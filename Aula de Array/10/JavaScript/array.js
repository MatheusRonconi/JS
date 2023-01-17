Array = []
Array2 = []
function criar(){
    var text1 = document.getElementById('texto1')
    var text2 = document.getElementById('texto2')

    var t = text1.value
    var d = text2.value

    for (var i = 0; Array.length < t;i++)
    {
        Array.push(t)
    }
    for (var j = 0; Array2.length < d;j++){
        Array2.push(d)
    }
    console.log(Array)
    console.log(Array2)
    document.write(Array)
}