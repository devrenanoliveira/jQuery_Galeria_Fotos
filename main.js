$(document).ready(function() { /*inclusão do jQuery - Dentro dos parênteses informamos o elemento (seletor) e o .ready diz que, quando o jQuery estiver pronto, ele vai realizar a função abaixo */
    $('header button').click(function() { /* aqui quer dizer que, o botão do header, ao ser clicado, fará a função de "slide down" */
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() { /* ao clicar no botão cancelar, chama a função de "slide up" para recolher o formulário */
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { // seria o mesmo que dizer que o submit, do formulário recebe o evento abaixo (preventDefault)
        e.preventDefault(); // cancela a ação padrão do "submit", fazendo com que a página não recarregue
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val(); // recupera o valor do input inserido no formulário (onde está escrito URL da imagem) 
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); // adiciona a variável inserida no formulário ao "novo item" (elemento de destino) usando o appendTo
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000);
            $('#endereço-imagem-nova').val('') // faz com que o campo do formulário onde se insere o input (URL da imagem) desapareça conforme você adiciona novas imagens, para não ficar o link anterior lá 
    })
})

/* Explicação mais detalhada para a parte que inicia no $(`<img src e vai até o .appendTo(novoItem);)

A primeira parte cria um novo elemento de imagem (<img>) e adiciona o atributo "src" com o endereço da nova imagem 
(armazenado na variável "enderecoDaNovaImagem"). Em seguida, o elemento de imagem é adicionado como filho do elemento "novoItem" usando a função appendTo().

A segunda parte cria um elemento <div> com uma classe CSS chamada "overlay-imagem-link". Dentro deste elemento div, há um link (<a>) que aponta para o endereço da nova 
imagem e é aberto em uma nova janela (target="_blank"). O link tem um título "Ver imagem em tamanho real". Este elemento div com o link é então adicionado como filho do elemento 
"novoItem" usando a função appendTo().

No geral, esse código adiciona uma nova imagem com um link para uma versão em tamanho real quando um novo item é criado. */