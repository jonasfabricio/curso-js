function clicar(){
    let txtnum = document.getElementById('txtn')
    let tabuada = document.getElementById('tabuada')
    let num = Number(txtnum.value)

    if(num == 0){
        window.alert('[ERROR] não é possivel tabuada de 0.')
    }else{
       let c = 1
       tabuada.innerHTML = ''
       while (c <= 10){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tabuada.appendChild(item)
        c ++
       }
    }
}