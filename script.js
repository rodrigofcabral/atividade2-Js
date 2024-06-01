var numero1 = prompt('Digite o primeiro numero :')
var operacao = prompt('Você deseja somar ou subtrair ?')
var numero2 = prompt('Digite o segundo numero :')

var numero1 = (parseFloat(numero1))
var numero2 = (parseFloat(numero2))

function Calculo (numero1 , numero2 , operacao){
    var Resultado

    if (operacao == 'somar') {
        Resultado = (numero1 + numero2)
    } else if (operacao == 'subtrair'){ 
        Resultado = (numero1 - numero2)    
    } else {
        Resultado = ('Erro , Preencha a pergunta com as palavras *somar* ou *subtrair*')
    }
    
    return Resultado
} 

var Resultado = Calculo(numero1 , numero2 , operacao) 

document.write('O resultado da operação é de ' + Resultado)

