//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; //arrayProdutos
let amigo = {};
let nomeAmigo = {};


function adicionarAmigo() {//Salvar
    let amigo = lerDados();
    //alert('ler dados');
    if(validaCampo(amigo)) {
        //alert('Adicionar Amigo');
        adicionar(amigo);
        listaTabela();
        limparCampo();
     
    }
        
    console.log(amigo);
    console.log(amigos);
    console.log(listaDeAmigos);
         
}
function listaTabela() {
        

        let ul = document.getElementById("listaAmigos");
        ul.innerHTML = '';
        
        
        for(let i = 0; i < amigos.length; i++){
            ul.innerHTML = '';
            amigos.forEach(function(item) {
                
                let li = document.createElement("li");
                
                li.textContent = item.nomeAmigo;
                
                ul.appendChild(li);
                
            })

        }
        
             
}

function limparCampo() {
  amigo = document.querySelector('input');
  amigo.value = '';
}


function lerDados() {
    let amigo = {};
    amigo.nomeAmigo = document.getElementById('amigo').value;
    return amigo;

}

function validaCampo(amigo) {
    if(amigo.nomeAmigo == '') {
        alert('Nome Inválido!');
        return false;
    }
    if(amigo.nomeAmigo != '') {
        alert('Amigo Adicionado com Sucesso!');

    }      
    
    return true;
}

function adicionar(amigo) {
    amigos.push(amigo);
    nomeAmigo++;

}

 

function sortearAmigo() {

    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let ul = document.getElementById("resultado");
    ul.innerText = '';
    const li = document.createElement("reslutado");
    li.textContent = amigoSorteado;
    ul.appendChild(li);

    console.log(amigoSorteado);
    return amigos[amigoSorteado];
    console.log(amigoSorteado);
    

    
    
}



    
    
    
    
    
    
    
    
    
 
          
            







        




    

