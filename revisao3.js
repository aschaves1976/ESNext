/**
 *  Novos recursos do ES8
 * Object.values / Object.entries
 */
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal

const nome = 'Lucas'
const pessoa ={
    nome,
    fala () {
        return 'Olá !!'
    }
}
console.log(pessoa.nome, pessoa.fala())

// class
class Animal{
    familia(){
        return 'mamíferos'
    } 
}
class Cachorro extends Animal{
    falar(){
        return 'Au Au !'
    }
}
console.log( new Cachorro().familia(), new Cachorro().falar())  