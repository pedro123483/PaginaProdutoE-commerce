let quantidadeProduto = document.getElementById("quantidadeProduto");

let aumentarQuantidade = document.getElementById("aumentar");

let diminuirQuantidade = document.getElementById("diminuir");

let valorSpan = document.getElementsByTagName("span")[2];

let imagemGrande = document.querySelector('img.shoes')

let imagem1 = document.getElementById("imagem1");

let imagem2 = document.getElementById("imagem2");

let imagem3 = document.getElementById("imagem3");

let imagem4 = document.getElementById("imagem4");

imagem4.addEventListener('click', () =>{

    imagemGrande.setAttribute('src', './imagens/image-product-4.jpg')
})

imagem3.addEventListener('click', () =>{

    imagemGrande.setAttribute('src', './imagens/image-product-3.jpg')
})

imagem2.addEventListener("click", () =>{

    imagemGrande.setAttribute('src', './imagens/image-product-2.jpg')
})

imagem1.addEventListener("click", () => {

    imagemGrande.setAttribute('src', './imagens/image-product-1.jpg');
})

aumentarQuantidade.addEventListener("click", () =>{

    quantidadeProduto.innerHTML++
})

diminuirQuantidade.addEventListener("click", () => {

    if(valorSpan.innerText != '0'){

        quantidadeProduto.innerHTML--
    }
    
})


