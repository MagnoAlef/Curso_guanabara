function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora  = 13
msg.innerHTML = `Agora sao ${hora} horas`
if (hora >= 0 && hora <12){
    //Bom dia
    img.src = 'manha.jpg' 
    document.body.style.background='white'
}else if (hora >= 12 && hora <=18){
    //Boa tarde 
    img.src = 'tarde.jpg'
    document.body.style.background='red'
}else{
    //Boa noite
    img.src = 'noite.jpg'
    document.body.style.background='black'
}
}