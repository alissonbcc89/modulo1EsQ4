"use strict";

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    estado = empresa.endereco.estado,
    cidade = empresa.endereco.cidade;
console.log(nome);
console.log(estado);
console.log(cidade);
var usuario = {
  nome: 'Alisson',
  idade: 31
};

function mostrarInfo(usuario) {
  return '${usuario.nome} tem ${usuario.idade} anos.';
}

console.log(mostrarInfo);
