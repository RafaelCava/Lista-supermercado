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
    
    items.push({
        nome: nomeProduto.value,
        valor:precoProduto.value
    })
    addTexto();
    nomeProduto.value = "";
    precoProduto.value = "";
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
        alert(`Esse item não está na lista`)
    }
}

document.querySelector("input[type=submit").addEventListener('click',addItem);
document.querySelector("button[name=limpar]").addEventListener('click',delList);
document.querySelector("button[name=delete-btn]").addEventListener('click',delItem);