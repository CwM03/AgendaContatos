const form = document.getElementById('form-agenda');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    
    const nomeContato = document.getElementById('nome-contato');
    const numContato = document.getElementById('num-contato');

    if (contatos.includes(nomeContato.value)) {
        alert(`o contato ${nomeContato.value} já foi inserido!`)
    } else {
        contatos.push(nomeContato.value);
        numeros.push(numContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    numContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

