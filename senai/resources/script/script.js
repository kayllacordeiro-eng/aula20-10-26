/* let nomes = ["Paula Ribeiro","Ana Julia","Israel de Oliveira"];

//Enquanto é um laço de repetição que sempre irá "rodar" enquanto
//a condição passada for verdadeira.
let contador = 0
while (contador <= 20){
    alert (contador);
    contador = contador + 2
} */

let nomes =["Paula Ribeiro","Ana Julia","Israel Oliveira"];
/* let indice = 0;
let encerrar = 0;


while (encerrar <nomes.length){
    console.log(nomes[indice]);
    nomes.splice(indice, 1);
    console.log(nomes)
}
let nome = "erick"
let login = prompt("digite seu erick")
while(login != nome){
    alert("senha incorreta,tente novamente")

    login = prompt("digite seu login")
}
alert("bem vindoao sistema")
console.log */

//Odena os itensdo array em ordemalfabetica
/* nomes.sort();

//cria a listagem de itens
nomes.forEach(nome=>{
    console.log(nome);
}

)

let indice = nomes.indexOf("israel de oliveira")
nomes.splice(indice,1); */

let opcao = prompt("Escolha uma opção:\n1 - Excluir uma receita\n2 - Apenas ver a lista");
switch (opcao) {
    case "1":
        let receitaParaExcluir = prompt("Digite o nome exato da receita que quer apagar:");
        let posicao = receitas.indexOf(receitaParaExcluir);
        
        if (posicao !== -1) {
            receitas.splice(posicao, 1);
            alert("Receita excluída com sucesso!");
        } else {
            alert("Receita não encontrada!");
        }
        break;
        
    case "2":
        alert("Ok! Vamos mostrar a lista no console.");
        break;
        
    default:
        alert("Opção inválida!");
        break;
}
console.log("=== MINHAS RECEITAS ===");
receitas.forEach(function(receita) {
    console.log(receita);
});