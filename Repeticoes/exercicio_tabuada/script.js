function tabuada(){
    var tabuada = document.getElementById('txt')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    if(tabuada.value.length == 0){
        alert('[ERRO] digite um numero')
    }else{
        var tabu = Number(tabuada.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10){
            var item = document.createElement ('option')
            item.text = `${tabu} x ${c} = ${tabu * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    // for (var c = 0 ; c <= 10; c++ ){
    //     res.innerHTML+=`${c} x ${tabu} = ${c * tabu} <br>`
    // }
}