let listaDeNomes = []

while (true) {
    const acao = prompt("Escolha uma ação:\n1 - Adicionar nome\n2 - Filtrar nomes\n3 - Buscar nome\n4 - Transformar nomes\n5 - Verificar condição\n6 - Exibir lista completa\n7 - Sair")

    if (acao === "7") {
        console.log("Encerrando o programa.")
        break
    }

    switch (acao) {
        case "1":
            const novoNome = prompt("Digite o nome:")
            listaDeNomes.push(novoNome)
            console.log(`Nome "${novoNome}" adicionado.`)
            break

        case "2":
            const letraFiltro = prompt("Digite a letra inicial para filtrar:")
            const nomesFiltrados = listaDeNomes.filter(nome => nome.startsWith(letraFiltro))
            console.log("Nomes filtrados:", nomesFiltrados.length ? nomesFiltrados : "Nenhum nome encontrado.")
            break

        case "3":
            const nomeBuscado = prompt("Digite o nome a ser buscado:")
            const nomeEncontrado = listaDeNomes.find(nome => nome === nomeBuscado)
            console.log(nomeEncontrado ? `Nome encontrado: ${nomeEncontrado}` : "Nome não encontrado.")
            break

        case "4":
            listaDeNomes = listaDeNomes.map(nome => nome.toUpperCase())
            console.log("Lista transformada:", listaDeNomes)
            break

        case "5":
            const todosTemMaisQueTres = listaDeNomes.every(nome => nome.length > 3)
            console.log(`Todos os nomes têm mais de três caracteres? ${todosTemMaisQueTres}`)
            break

        case "6":
            console.log("Lista de nomes:")
            listaDeNomes.forEach((nome, indice) => console.log(`${indice}: ${nome}`))
            break

        default:
            console.log("Opção inválida. Escolha um número entre 1 e 7.")
    }
}