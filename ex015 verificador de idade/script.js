function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'fotobebezinho.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotovelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'fotobebezinha.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotovelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}