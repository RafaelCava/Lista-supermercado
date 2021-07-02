let items = [];

document.querySelector("input[type=submit").addEventListener('click',()=>{
    let nomeProduto = document.getElementById("nome_produto").value;
    let precoProduto = document.getElementById("valor_produto").value;
    
    items.push({
        nome: nomeProduto,
        valor:precoProduto
    })
    alert(items[1].nome)
})