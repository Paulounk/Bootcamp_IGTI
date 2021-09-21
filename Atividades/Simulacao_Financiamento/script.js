var valor =  document.querySelector("#valor").value
var prazo =  document.querySelector("#prazo").value
var juros =  document.querySelector("#juros").valueAsNumber

var prazoMeses = document.querySelector("#prazoMeses")
var jurosMes = document.querySelector("#jurosMes")
var jurosAnos = document.querySelector("#jurosAnos")

//CRIA ELEMENTOS DINAMICOS
function criaElemento(elemento){
    return document.createElement(elemento);
}

function simulaFinanciamento(){

    //PRAZO
    prazoMeses.value = prazo * 12;
    prazoMeses.innerHTML = prazoMeses.value;

    //JUROS AO MÊS
    jurosMes.value = ((1 + juros)**(1/12)-1);
    jurosMes.innerHTML = jurosMes.value;

    //JUROS ACUMULADOS
    var vAmortizacao = valor/prazoMeses.value;
    
    //ELEMENTOS DINAMICOS
    

    for(var i = 0; i <= prazoMeses.value; i++){
        
        var resp  = ((valor - (i * vAmortizacao)) * jurosMes.value).toFixed(2)
        var tabela = document.querySelector('#tabela')
        var columns = document.createElement('tr');
        columns.innerHTML = resp
        tabela.appendChild(columns)
       
    }

    


}

