function verificar() {
    var anonasctxt = document.getElementById('anonasc')
    var anonasc = Number(anonasctxt.value)
    var anoatual = Number(2024)
    if (anonasc == 0 || anonasc > anoatual){
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    }else {    
    var idade = anoatual - anonasc
    var resultado = document.getElementById('res')
    var sex = document.getElementsByName('radsex')
    var genero = ''
    if (sex[0].checked){
        genero = 'Homem'
    }else if (sex[1].checked){
        genero = 'Mulher'
    }else{
        window.alert('[ERROR] Selecione seu gênero e tente novamente.')
    }    
    resultado.innerHTML = `Identificamos que você é ${genero}, e tem ${idade} anos.`
    }

}