/**
 * o forIn itera com indices, enquanto que o 
 * forOf itera com valores
 */

for (let letra of 'Alessandro'){
    // retorna valores
    console.log(letra)
}
const assuntos =['Map', 'Set', 'Promise']
for (let i in assuntos){
    //retorna os índices
    console.log(i)
}
for (let assunto of assuntos){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])
for (let assunto of assuntosMap){
    console.log(assunto)
}
for(let chv of assuntosMap.keys()){
    console.log(chv)
}
for(let vl of assuntosMap.values()){
    console.log(vl)
}
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}
const letras = new Set(['a','b','c'])
for (let letra of letras){
    console.log(letra)
}