function contar(){
    let ini = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let passo = document.getElementById(`pulo`)
    let res = document.getElementById('resultado')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERROR]Verifique os valores e tente novamente!')
    } else {
        res.innerText = ('Contando: ')

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            window.alert('Considerando o passo como 1.')
            p = 1
        }
            if(i < f){
            //contagem progressiva
            for(c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c}, `
            }
        } else {
            //contagem regressiva
            for(c = i ; c >= f ; c -= p) {
                res.innerHTML += ` ${c}, `
            }
        }
        res.innerHTML += `.`
        }
    }

