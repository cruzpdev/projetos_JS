function verificar(){
    let ini = document.getElementById('txtn1')
    let fim = document.getElementById('txtn2')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
       // window.alert('Dados inválidos. Tente novamente!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Inválido! Considerando passo 1.')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p ) {
                res.innerHTML +=`${c} 👉`
            }
        }
        res.innerHTML +=`🏁`
    }
}

