let items = [];

const addTexto = () =>{
    let nomeProduto = document.getElementById("nome_produto");
    let precoProduto = document.getElementById("valor_produto");
    
    items.push({
        nome: nomeProduto.value,
        valor:precoProduto.value
    })

    let listaProdutos = document.querySelector(".lista-produtos")
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
    nomeProduto.value = "";
    precoProduto.value = "";

    
    
    let somaProduto = document.querySelector(".soma-produto h1");
    somaProduto.innerHTML =`Total : R$`+soma;
}

const delList = () =>{
    items = [];

    document.querySelector(".lista-produtos").innerHTML = ""
    document.querySelector(".soma-produto h1").innerHTML = "R$ 0"
}

const delItem = () =>{
    let inputValue = document.querySelector(".delete input[type=text]");
    let index = items.findIndex(x=> x.nome === inputValue.value);
    let soma = 0;
    if(index > -1){
        items.splice(index, 1);
        let listaProdutos = document.querySelector(".lista-produtos");
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
        inputValue.value = "";
        let somaProduto = document.querySelector(".soma-produto h1");
        somaProduto.innerHTML =`Total : R$`+soma;
    }else{
        alert(`Esse item não está na lista`)
    }
}

document.querySelector("input[type=submit").addEventListener('click',addTexto);
document.querySelector("button[name=limpar]").addEventListener('click',delList);
document.querySelector("button[name=delete-btn]").addEventListener('click',delItem);