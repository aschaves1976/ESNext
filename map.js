const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // não funciona, retorna undefined
console.log(tecnologias.get('react')) // retorna {framework: false}
console.log(tecnologias.get('react').framework) // retorna o valor false

// criar um Map e atribuir elementos
const chavesVariadas = new Map([
    [function(){ }, 'função'],
    [{}, 'objeto'],
    [123, 'números'],
    [[], 'array']
])
chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl)
})
// comando para verificar se existe um determinado elemento dentro do Map
console.log(chavesVariadas.has(123))
// delete de um determinado elemento dentro de Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
// identificar a quantidade de elemento Map
console.log(chavesVariadas.size)
console.log(chavesVariadas.values())
console.log(chavesVariadas.keys())

// as chaves não se repetem, mas os valores podem se repetir
chavesVariadas.set(123, 'A')
chavesVariadas.set(123, 'B')
chavesVariadas.set(456, 'B')

console.log(chavesVariadas)