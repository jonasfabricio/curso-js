function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        //manhã
        img.src = 'manha.jpg'
    }else if(hora > 12 && hora < 18){
        //tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(26, 123, 97)'
    }else{
        //noite
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(1, 71, 85)'
    }
}