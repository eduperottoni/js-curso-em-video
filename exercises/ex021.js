function fatorial(n){
    var result = 1
    for (n ; n>0 ; n --){
        result *= n
    }
    return result
}

console.log(fatorial(5))