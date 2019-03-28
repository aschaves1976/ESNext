//Arrow Function
const soma = (a, b) => a + b
const diminui = (a, b, c) => (a+b)-c
console.log(soma(2,5))
console.log(diminui(2, 5, 5))

// Arrow Function (this)
const lexico1 = () => console.log (this === exports)
lexico1()

const lexico2 = lexico1.bind({})
lexico2()

// parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log() // retornará Node, utiliza o valor padrão
log(null) // retornará null, utiliza o parâmetro informado
log('sou mais forte') // retornara a frase informada, utiliza o parâmetro informado

// operador rest
const total = (...numeros) =>{
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total (2,3,4,5))

function total2 (...numeros){
    let total = 0
    numeros.forEach(n => total += n*2)
    console.log (total)
}
total2(2,3,4,5)
