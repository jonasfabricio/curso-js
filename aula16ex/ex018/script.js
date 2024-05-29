function adicionar(){
    let txtn = document.getElementById('txtn')
    let res = document.getElementById('select')
    let n = Number(txtn.value)

    if(n > 0 && n <= 100){
        let item = document.createElement('option')
        item.text = (`O valor ${n} foi adicionado.`)
        res.appendChild(item)
    } else {
        window.alert('[ERROR] Verfique se o número atende aos requisitos.')
    }
}

function finalizar(){
    // Me perdi na hora de ter que armazenar os "n" em uma lista.
}