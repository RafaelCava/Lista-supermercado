let items = [];

document.querySelector("input[type=submit").addEventListener('click',()=>{
    let nomeProduto = document.getElementById("nome_produto");
    let precoProduto = document.getElementById("valor_produto");
    
    items.push({
        nome: nomeProduto.value,
        valor:precoProduto.value
    })

    let listaProdutos = document.querySelector(".lista-produtos")
    let soma = 0;
    
    // criar uma function utilizando o map para ativar so quando eu mandar
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
    somaProduto.innerHTML = "R$ "+soma;
    console.log(items)
})

document.querySelector("button[name=limpar]").addEventListener('click',()=>{
    items = [];

    document.querySelector(".lista-produtos").innerHTML = ""
    document.querySelector(".soma-produto h1").innerHTML = "R$ 0"
})


document.querySelector("button[name=delete-btn]").addEventListener('click',()=>{
    let encontrado = document.querySelector(".delete input");
    encontrado = encontrado.value;
    let index = items.filter(x=> x.nome = encontrado ? x : null);
    alert(index.nome)
})
