let valores = [9, 8, 7, 6, 5, 4, 3, 2, 1]
valores.sort()

/*
for(let position = 0; position < valores.length; position++){
    console.log(`A posição ${position} contem o valor ${valores[position]}`)
}
*/

for(let position in valores){
    console.log(`A posição ${position} contem o valor ${valores[position]}`)
}
//essa ultima versão é a mais aceita hoje em dia. Portanto use-a.

console.log(valores.indexOf(6))
//buscar a chave/key de um valor atriubuido a lista.