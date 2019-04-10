// utilza-se promiss quando se quer um processamento assincrono
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            segundos > 3 ?
            reject('Tempo muito alto... ') :
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(4,'Utilizando a função')
.then(p1 => p1.concat(' promises'))
.then(p2 => p2.concat(' no JS!!'))
.then(fala => console.log(fala))
.catch(e => console.log('ERROR: ', e))