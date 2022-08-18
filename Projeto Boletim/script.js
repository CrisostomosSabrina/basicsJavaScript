let inicio = alert("Olá estudante, você ainda não tem notas cadastradas");
do {
    let disciplinas = prompt("Insera a disciplina que deseja cadastradar");
    let nota1 = prompt("Digite a nota 1");
    let nota2 = prompt("Digite a nota 2");
    let nota3 = prompt("Digite a nota 3");
    let nota1number = parseInt(nota1)
    let nota2number = parseInt(nota2)
    let nota3number = parseInt(nota3)
    let media = (nota1number + nota2number + nota3number) /3;

    if(media >= 6.00){
        alert("Parabéns, você foi aprovado");
    } else{
        alert("Sinto muito! Reprovado.");
    }
    var pergunta = prompt("Continuar inserindo notas?");
    if (pergunta =="Não" || pergunta =="não"){
        alert("Ok see you!");
    }
}while(pergunta =="sim" || pergunta =="Sim");
