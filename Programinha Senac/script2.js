do {
    var gasolina = prompt("Digite o valor da gasolina");
    var alcool = prompt("Digite o valor do álcool");
    
    var gasolinanumber = parseInt(gasolina)
    var alcoolnumber = parseInt(alcool)
    
    var divisao = alcool/gasolina
    
    if (divisao > 0.7) {
        alert("Vale a pena abastecer com gasolina");
    
    } else if (divisao < 0.7) {
        alert("Vale a pena abastecer com álcool")
     
    } else {
        alert("Tanto faz abastecer com um ou outro");
    }

    var resposta = prompt ("Deseja realizar um novo cálculo? \n Responda S para sim ou N para não");

    if (resposta == "N" || resposta =="n"){  
        alert("Certo! Se precisar depois pode contar com a gente :)");
    }
    else{
        alert("Opa! Não entendi, tente novamente!")
        resposta = prompt ("Deseja realizar um novo cálculo? \n Responda S para sim ou N para não");
    }
}while(resposta =="S" || resposta =="s");
