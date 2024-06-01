let numero = document.getElementById('txtn')
let tabela = document.getElementById('select')
let resultado = document.getElementById('res')
let lista = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, lista)){
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado.`
        tabela.appendChild(item)
    } else {
        window.alert('[ERROR] Verifique o número e tente novamente!')
    }
    numero.value = ''
    numero.focus()
    resultado.innerHTML = ''
}

function finalizar(){
    let total = lista.length
    let menor = lista[0]
    let maior = lista[0]
    let soma = 0
    let media = 0

    if(lista.length == 0){
        window.alert('[ERROR] Adicione números a lista antes de finalizar.')
    } else {
        for (let pos in lista){
            soma += lista[pos]
            if(lista[pos] > maior)
                maior = lista[pos]
            if(lista[pos] < menor)
                menor = lista[pos]
        }
        media = soma / total
        resultado.innerText = ''
        resultado.innerHTML += `Ao todo temos ${total} números. <br>`
        resultado.innerHTML += `O menor valor informado foi ${menor}. <br>`
        resultado.innerHTML += `O maior valor informado foi ${maior}. <br>`
        resultado.innerHTML += `A soma de todos os números é ${soma}. <br>`
        resultado.innerHTML += `A média dos números é ${media}. <br>`
    }
}