import { contatos } from "./contatos.js"


export const listarCidades = function (id) {
    const dados = contatos["whats-users"][id].contacts;
    let array = [];
    return (array = dados);
};

console.log(listarCidades(1));