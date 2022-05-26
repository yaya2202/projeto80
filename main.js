var listaDePessoas = []; 
function enviar() {
    var nomePessoas = document.getElementById("textBox").value;
    nomePessoas = nomePessoas.toLowerCase();
    listaDePessoas.push(nomePessoas);
    var mostrarListaPessoas = [];
    for(var i = 0; i<listaDePessoas.length; i++){
      mostrarListaPessoas.push(listaDePessoas[i]+"<br>");
    }
    console.log(mostrarListaPessoas);
    var removeVirgulas = mostrarListaPessoas.join(" ");
    document.getElementById("div2").innerHTML=removeVirgulas;
    document.getElementById("textBox").value="";
} 

function organizar() {
    document.getElementById("div2").innerHTML="";
    listaDePessoas.sort();
    var listaOrganizar = [];
    for(var i = 0; i<listaDePessoas.length; i++){
        listaOrganizar.push(listaDePessoas[i]+"<br>");
    }
    var removeVirgulas = listaOrganizar.join(" ");
    document.getElementById("div2").innerHTML=removeVirgulas;
}

function remover() {
    listaDePessoas = [];
    document.getElementById("div2").innerHTML="";
}

function pesquisar() {
    var s= document.getElementById("textBox2").value;
    s = s.toLowerCase();
    var found=0;
    var j;
    for(j=0; j<listaDePessoas.length; j++) {
        if(s==listaDePessoas[j]) {
            found=found+1;
        }
    }
    document.getElementById("h4").innerHTML="Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado "+found+" vez(es)");
}
