var num = [5,8,2,9,3]

console.log(`O vetor é ${num}`)
console.log(`o vetor tem ${num.length} posições`);
console.log(`A 3º posição do vetor possui o valor ${num[2]}`)
num.push(1)
console.log(`Adicionando o valor 1 ao final do array, teremos ${num}`)
console.log(`O vetor em ordem crescente é ${num.sort()}`)

var pos = 0;
// while(pos <num.length){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
//     pos ++
// }

for(pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O valor 8 está na posição ${num.indexOf(8)}`)