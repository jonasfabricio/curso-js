//var hora = 0
var agora = new Date()//Irá puxar a data, hora... exata
var hora = agora.getHours()//Irá puxar a hora exata no momento acionado
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora < 4){
    console.log('Boa madrugada')
}else if (hora < 12){
    console.log('Bom dia.')
}else if(hora < 18){
    console.log('Boa tarde.')
}else if(hora <= 24){
    console.log('Boa noite')
} else{
    console.log('Verifique se a hora está correta e tente novamente.')
}