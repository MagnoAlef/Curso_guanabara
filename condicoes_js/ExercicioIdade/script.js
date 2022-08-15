function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')
     if(fano.value.length == 0 || Number(fano.value) > ano){
alert('[ERRO] verifique os dados e tente novamente')
     }else{
         var fsex =document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var sexo = ''
          var img = document.createElement('img')
           img.setAttribute('id','foto')
         if(fsex[0].checked){
             sexo = 'homem'
               if(idade >=0 && idade <10){
         Crianca
         img.setAttribute('src','homem_crianca.jpg')
     }else if(idade < 21){
         //Jovem
         img.setAttribute('src','homem_jovem.jpg')
     }else if(idade < 50){
         //Adulto
         img.setAttribute('src','homem_adulto.jpg')
     }else{
         //Velho
         img.setAttribute('src','homem_velho.jpg')
     }

            } else if (fsex[1].checked){
             sexo = 'mulher'
  if(idade >=0 && idade <10){
    //     //Crianca
         img.setAttribute('src','mulher_crianca.jpg')
     }else if(idade < 21){
    //     //Jovem
         img.setAttribute('src','mulher_jovem.jpg')
     }else if(idade < 50){
    //     //Adulto
         img.setAttribute('src','mulher_adulta.jpg')
     }else{
    //     //Velho
         img.setAttribute('src','mulher_idosa.jpg')
     }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${sexo} com ${idade}`
            res.appendChild(img)
        }
    }

   