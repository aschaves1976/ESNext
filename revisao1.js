// let e const
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)
//console.log(b) - nao funciona pois a variavel foi criada com let que possui escopo de bloco

//Template String
const produto = 'IPad'
console.log(`${produto} é caro`)

//Destructuring - tirar de dentro de uma estrutura algo
const [l,e, ...tras] = 'Cod3r'
console.log(l,e,tras)
const [x, y] = [1,2]
console.log(x, y)
const [z,,w] = [1,2,3] // nete caso estamos ignorando o elemento 2
console.log(z, w)

const{nome, idade} = {nome: 'Ana', idade: 9}
console.log (nome, idade)
const{prod: p, preco} = {preco: 300.7, prod: 'SSD'}
console.log(p, preco)