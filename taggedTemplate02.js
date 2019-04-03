function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const parcela = 11

console.log(real `1X de ${preco} ou 3X de ${parcela}`)

function altura(partes, ...valores){
    const resultado =[]
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor : `${valor.toFixed(2)}m de altura`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const p1 = 'João'
const altura1 = 1.65
const p2 = 'Maria'
const altura2 = 1.8

console.log(altura `${p1} tem ${altura1}`, altura ` e ${p2} tem ${altura2}`)

function idade(partes, ...valores){
    const resultado=[]
    valores.forEach((valor, indice)=>{
        valor = isNaN(valor) ? valor : `tem ${valor.toFixed(0)} anos`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')

}
const idade1 = 2
const idade2 = 10
console.log(idade `Jair tem ${idade2} e Ana tem ${idade1}`)