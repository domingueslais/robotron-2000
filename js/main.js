const subtrair = document.querySelector('#isubtrair')
const somar = document.querySelector('#isomar')
const braco = document.querySelector('#ibraco')

somar.addEventListener('click',()=> {manipulaDados(somar)})
subtrair.addEventListener('click',()=>{manipulaDados(subtrair)})

function manipulaDados (operacao) {
    if (operacao === somar) {
        braco.value = parseInt(braco.value) + 1
    } else {
        braco.value = parseInt(braco.value) - 1
    }
}