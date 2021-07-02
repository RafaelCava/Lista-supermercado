let items = [];

document.querySelector("input[type=submit").addEventListener('click',()=>{
    let nomeProduto = document.getElementById("nome_produto");
    let precoProduto = document.getElementById("valor_produto");
    
    items.push({
        nome: nomeProduto.value,
        valor:precoProduto.value
    })

    /* 
    <div class="lista-produto-single">
        <h3>Redbull</h3>
        <h3 class="price-produto">R$20,00</h3>
    </div>
     */
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
    somaProduto.innerHTML = "R$ "+soma;
})