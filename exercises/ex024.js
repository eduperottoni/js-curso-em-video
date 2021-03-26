var amigo = {
    nome: 'Eduardo',
    sexo: 'Masculino',
    peso: 85.4,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }}

amigo.engordar(20)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)