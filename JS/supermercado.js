let items = [];
const listaProdutos = document.querySelector(".lista-produtos")
const somaProduto = document.querySelector(".soma-produto h1")
const addTexto = ()=>{
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map((val)=>{
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
        <h3>${val.nome}</h3>
        <h3 class="price-produto"><span>${val.peso} Kg<span></h3>
        <h3 class="price-produto"><span>R$${val.valor}<span></h3>
        </div>
        
        `
    })
    soma = soma.toFixed(2)
    somaProduto.innerHTML =`Total : R$`+soma;
}

const addItem = () =>{
    let nomeProduto = document.getElementById("nome_produto");
    let precoProduto = document.getElementById("valor_produto");
    let pesoProduto = document.querySelector("input[name=quantidade_produto]");
    if(nomeProduto.value === ""){
        alert("Insira o nome do Produto")
    }else{
        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value,
            peso: pesoProduto.value
        })
        addTexto();
        nomeProduto.value = "";
        precoProduto.value = "";
        pesoProduto.value = "";
    }
}

const delList = () =>{
    items = [];
    listaProdutos.innerHTML = ""
    document.querySelector(".soma-produto h1").innerHTML = `Total : R$0`
}

const delItem = () =>{
    let inputValue = document.querySelector(".delete input[type=text]");
    let index = items.findIndex(x=> x.nome === inputValue.value);
    if(index > -1){
        items.splice(index, 1);
        addTexto();
        inputValue.value = "";
    }else{
        alert(`Este item não está na sua lista`)
    }
}

document.querySelector("input[type=submit").addEventListener('click',addItem);
document.querySelector("button[name=limpar]").addEventListener('click',delList);
document.querySelector("button[name=delete-btn]").addEventListener('click',delItem);