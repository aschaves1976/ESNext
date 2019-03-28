// operador ... rest(juntar) / spread(espalhar)
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

// operador spread
const funcionario ={nome: 'Maria', idade: 29}
const clone = {ativo: true, ...funcionario}
console.log(clone)

const par =[2, 4, 6, 8, 10]
const impar = [1,3,5,7,9]
const numbers =[0,...impar, ...par]
console.log(numbers)