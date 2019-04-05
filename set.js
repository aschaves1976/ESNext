/**
 *  Set é uma estrutura de conjunto, não indexada que não aceita repetição
 *  array e objeto {} são estruturas indexadas
 */
const times = new Set()
times.add('Flamengo')
times.add('Vasco').add('Botafogo').add('Fluminense').add('Flamengo')

console.log(times)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Vasco')
console.log(times.size)
console.log(times.has('Vasco'))

const nomes =['Lucas', 'Maria Flor', 'Maria Luiza','Lucca','Lucas']
const nomesSet = new Set(nomes)

console.log(nomesSet)