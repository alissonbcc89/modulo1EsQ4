const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',
    }
};

const {nome, endereco: { estado }, endereco: {cidade} } = empresa;

    console.log(nome);
    console.log(estado);
    console.log(cidade);

const usuario = {
    nome: 'Alisson',
    idade: 31,
}

    function mostrarInfo(usuario)
    {
        return '${usuario.nome} tem ${usuario.idade} anos.';
    }
console.log(mostrarInfo);