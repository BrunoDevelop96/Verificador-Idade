function verificar() {
   
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

        if (fano.velue == 0 || fano.value > ano ) {
            window.alert('[ERRO] Verifique os dados e tente novamente') } 
        else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - fano.value
   var genero = ''
   var img= document.createElement('img')
      img.setAttribute('id','foto')

           if (fsex[0].checked) {
            genero = ''  
            if (idade >= 0 && idade <=10) {
              // Criança
              genero = 'Criança'
              img.setAttribute ('src' , 'img-verificador/homem-crianca.png')
            } else if (idade < 18) {
              // Jovem
              genero = 'Jovem'
              img.setAttribute ('src' , 'img-verificador/homem-jovem.png')
            }  else if (idade < 50) {
              //Adulto
              genero = 'Adulto'
              img.setAttribute ('src' , 'img-verificador/homem-adulto.png')
            } else {
              //Idoso
              img.setAttribute ('src' , 'img-verificador/homem-idoso.png')
              genero = 'Idoso'
            }  }        
                           //Fim dos ifs else HOMEM

            if (fsex[1].checked) {
            genero = ''  
            if (idade >= 0 && idade <=10) {
              // Criança
              genero = 'Criança'
              img.setAttribute ('src' , 'img-verificador/mulher-crianca.png')
            } else if (idade < 18) {
              // Jovem
              genero = 'Jovem'
              img.setAttribute ('src' , 'img-verificador/mulher-jovem.png')
            }  else if (idade < 50) {
              //Adulto
              genero = 'Adulto'
              img.setAttribute ('src' , 'img-verificador/mulher-adulta.png')
            } else {
              //Idoso
              genero = 'Idoso'
              img.setAttribute ('src' , 'img-verificador/mulher-idosa.png')
            }  }              
                          //Fim dos ifs else MULHER

      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
      }
     }
    
