function carregar () {
   var div1 = window.document.getElementById('msg')
   var div2 = window.document.getElementById('foto')
   var data = new Date()
   var hora = data.getHours()
   div1.innerHTML = `Agora são ${hora} horas`
    if (hora <= 0 && hora>=12)
        {div2.src = 'manha.png'}
    else if (hora >12 && hora <= 18)
        {div2.src = 'tarde.png'}
    else 
        {div2.src ='noite.png'}
    

}