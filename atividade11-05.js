// EXERCICIOS- Cassia Pereira Lima dia 11/05/2022

// Atividade-01

let pensar = prompt('Acerte o numero inteiro de 0 e 5 ')
if (pensar == 2 ){
    alert('Voce acertou')
}else{
    alert('Voce errou')
}

//Atividade-02

let velocidade = prompt('Qual e a velocidade do carro')

if (velocidade > 80 ){
    let multa = (velocidade-80)*5
    alert(`Atenção! a sua velocidade esta acima de 80km/h. a sua multa e de ${multa}`)
}else{
    alert('Muito bem! voce esta dentro do limite de velocidade')
}

//Atividade-03

let leia = prompt('Coloque o seu numero aqui')

if( leia % 2 === 0){
    alert('esse é par')
} else {
  alert('esse é impar')
}

//Atividade-04

let valor = parseInt(prompt('Digite o seu salário'))

if(valor > 1250){
    let aumento = (valor * 10/100)+ valor;
    alert(aumento)
}else{
     (valor <= 1250)
    let aumento2 = (valor * 15/100)+ valor;
    alert(aumento2)
}

