let num = document.getElementById('txtn')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //se o numero na lista for diferente de -1(indexof retorna -1 no valor não encontrado)
        return true
    } else {
        return false
    }

}

function adicionar (){
    if(isnumero(num.value) && !inlista(num.value, valores)) { //SE isnumero(valor de num) E NÃO inlista(valor de num)
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''  //se as condições acima forem verdadeiras, esvazie o res.innerHTML
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
   num.value = '' //objeto.atributo recebe vazio (isso serviu pra apagar o número depois de escrever)
   num.focus() //volta o cursor pro início do texto. 
}
function finalizar(){
    if (valores.length == 0) {
        window.alert ('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){  //pra cada posição em valores...
            soma += valores[pos] //a soma começa em zero. dessa forma, vai somar todos os valores escritos no vetor
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML +=` <p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML +=` <p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}