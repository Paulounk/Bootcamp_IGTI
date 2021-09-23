var valor = document.getElementById('valor')
var prazo = document.querySelector("#prazo")
var juros = document.querySelector("#juros")
var prazoMeses = document.querySelector("#prazoMeses")
var jurosMes = document.querySelector("#jurosMes")
var jurosAcum = document.querySelector("#jurosAcum")

//FUNÇÃO PRINCIPAL
function simulaFinanciamento() {

    //CALCULO DO PRAZO
    prazoMeses.value = prazo.value * 12;
    prazoMeses.innerHTML = prazoMeses.value;

    //CALCULO DO JUROS AO MÊS
   
    jurosMes.value = ((1 + juros.valueAsNumber) ** (1 / 12) - 1);
    console.log(jurosMes.value)
    jurosMes.innerHTML = jurosMes.value;
    
    //CALCULO DA AMORTIZAÇÃO
    var vAmortizacao = 0;
    vAmortizacao = (valor.value/prazoMeses.value).toFixed(2);

    var jAcumulados=0;
    var resp = 0;

    for(let i = 0; i < prazoMeses.value; i++){
        //JUROS
        console.log(valor.value)
        resp = parseFloat(((valor.value - (i * vAmortizacao)) * jurosMes.value).toFixed(2));
        
        //TOTAL
        let vtotal = parseFloat(resp + parseFloat(vAmortizacao)).toFixed(2);
    
        //JUROS ACUMULADOS
        jAcumulados = jAcumulados + resp

        //CRIANDO ELEMENTOS DINAMICAMENTE
        var tbody = document.getElementById('tbody')

        let tr = tbody.insertRow()

        let td_pres = tr.insertCell()
        let td_amort = tr.insertCell()
        let td_juros = tr.insertCell()
        let td_total = tr.insertCell()

        td_pres.innerHTML = ((i+1) + "º")
        td_amort.innerHTML = "  R$ " + vAmortizacao
        td_juros.innerHTML = "  R$ " + resp
        td_total.innerHTML = "  R$ " + vtotal
    }  
    jurosAcum.value = jAcumulados.toFixed(2);
    jurosAcum.innerHTML = jAcumulados

    
}